import { SITE_ORIGIN } from './config'
import { listRankedProjects } from './client'
import type { RankedProject } from './types'

const OFF_BRAND =
  /functional medicine|gut health|brain fog|holistic pain management|naturopath|iv therapy|peptide/i

const ON_BRAND =
  /chiropract|adjust|spine|spinal|disc|sciatica|herniat|decompression|percussion|stretch|red light|photobio|ice compression|game ready|sports injury|sports rehab|nerve pain|numbness|tingling|shoulder pain|back pain|neck pain|neuromuscular|aligned health|laguna hills/i

function hostOf(url: string): string | null {
  try {
    return new URL(url.startsWith('http') ? url : `https://${url}`).host.replace(/^www\./, '')
  } catch {
    return null
  }
}

function projectWebsite(project: RankedProject): string | null {
  return project.websiteUrl || project.website_url || null
}

export function isThisSiteBlog(title: string, description?: string | null): boolean {
  const text = `${title}\n${description ?? ''}`
  if (OFF_BRAND.test(text)) return false
  return ON_BRAND.test(text)
}

/** Only the Ranked project whose website is this domain. Never another client. */
export async function resolveThisSiteProjectId(): Promise<string | undefined> {
  const configured = process.env.RANKED_PROJECT_ID
  const thisHost = hostOf(SITE_ORIGIN)
  if (!thisHost) return undefined

  const projects = await listRankedProjects().catch(() => [])
  const matching = projects.filter((project) => {
    const website = projectWebsite(project)
    if (!website) return false
    return hostOf(website) === thisHost
  })

  if (configured && matching.some((project) => project.id === configured)) {
    return configured
  }
  if (matching.length >= 1) {
    if (matching.length > 1) {
      console.error(
        `[ranked] ${matching.length} Ranked projects point at ${thisHost}; using ${matching[0].id}`,
      )
    }
    return matching[0].id
  }

  const configuredProject = configured ? projects.find((project) => project.id === configured) : undefined
  const configuredHost = configuredProject ? hostOf(projectWebsite(configuredProject) || '') : null
  if (configuredHost && configuredHost !== thisHost) {
    console.error(
      `[ranked] RANKED_PROJECT_ID is for ${configuredHost}, not ${thisHost}. Other-site calendar skipped.`,
    )
    return undefined
  }

  return configuredProject && !projectWebsite(configuredProject) ? configured : undefined
}
