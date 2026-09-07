import { listRankedContent } from './client'
import { getRankedCoverImage } from './cover'
import { isBlogContentType, isRankedPostLive, slugFromTitle } from './html-to-post'
import { isThisSiteBlog, resolveThisSiteProjectId } from './this-site'

export async function generateLiveRankedCovers(projectId: string): Promise<string[]> {
  const thisId = await resolveThisSiteProjectId()
  if (!thisId || thisId !== projectId) return []

  const items = await listRankedContent(projectId)
  const slugs: string[] = []
  const reservedUrls = new Set<string>()

  for (const item of items) {
    if (!isBlogContentType(item.content_type) || !isRankedPostLive(item.status, item.scheduled_date)) {
      continue
    }
    if (!isThisSiteBlog(item.title, item.description)) continue
    const slug = slugFromTitle(item.title)
    await getRankedCoverImage({
      contentId: item.id,
      title: item.title,
      slug,
      generate: true,
      reservedUrls,
    })
    slugs.push(slug)
  }

  return slugs
}
