import { SITE_ORIGIN } from './config'
import { resolveThisSiteProjectId } from './this-site'

export type RankedSiteTarget = {
  projectId: string
  name: string
  origin: string
}

export function isLocalOrigin(origin: string): boolean {
  try {
    return new URL(origin).host.replace(/^www\./, '') === new URL(SITE_ORIGIN).host.replace(/^www\./, '')
  } catch {
    return origin.replace(/\/$/, '') === SITE_ORIGIN
  }
}

function sitesFromEnv(): RankedSiteTarget[] {
  const raw = process.env.RANKED_SITE_MAP
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw) as RankedSiteTarget[]
    if (!Array.isArray(parsed)) return []
    return parsed.filter((row) => row?.projectId && row?.origin && isLocalOrigin(row.origin))
  } catch {
    console.error('[ranked] RANKED_SITE_MAP is not valid JSON')
    return []
  }
}

export async function getRankedSiteTargets(): Promise<RankedSiteTarget[]> {
  const projectId = await resolveThisSiteProjectId()
  const merged = new Map<string, RankedSiteTarget>()
  if (projectId) {
    merged.set(projectId, {
      projectId,
      name: 'Aligned Health',
      origin: SITE_ORIGIN,
    })
  }
  for (const site of sitesFromEnv()) {
    if (site.projectId === projectId) merged.set(site.projectId, site)
  }
  return [...merged.values()]
}
