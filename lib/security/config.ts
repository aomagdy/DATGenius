export const securityConfig = {
  rateLimit: {
    window: 60 * 1000, // 1 minute
    max: 100 // requests per window
  },
  csrf: {
    cookieName: 'csrf-token',
    headerName: 'X-CSRF-Token'
  },
  session: {
    maxAge: 7 * 24 * 60 * 60, // 1 week
    updateAge: 24 * 60 * 60 // 24 hours
  },
  auth: {
    maxLoginAttempts: 5,
    lockoutDuration: 15 * 60 * 1000 // 15 minutes
  }
}