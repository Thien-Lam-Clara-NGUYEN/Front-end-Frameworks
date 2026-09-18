const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500'
const FALLBACK_POSTER = '/no-poster.png'

export function getPosterUrl(posterPath: string | null): string {
  if (!posterPath) {
    return FALLBACK_POSTER
  }
  return `${TMDB_IMAGE_BASE}${posterPath}`
}