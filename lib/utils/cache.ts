// Simple caching configuration
export const CACHE_CONTROL = {
  public: {
    default: 'public, max-age=3600'
  },
  private: {
    default: 'private, no-cache'
  }
}

export function getCacheControl(isPublic = true) {
  return isPublic ? CACHE_CONTROL.public.default : CACHE_CONTROL.private.default
}

export function setResponseCacheControl(res: Response, isPublic = true) {
  res.headers.set('Cache-Control', getCacheControl(isPublic))
  return res
}