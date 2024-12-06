type EventType = 'page_view' | 'button_click' | 'form_submit' | 'error'

interface AnalyticsEvent {
  type: EventType
  name: string
  properties?: Record<string, any>
}

export function trackEvent({ type, name, properties = {} }: AnalyticsEvent) {
  // Implementation would depend on your analytics provider
  console.log('Analytics event:', { type, name, properties })
}

export function trackPageView(path: string) {
  trackEvent({
    type: 'page_view',
    name: path,
  })
}

export function trackError(error: Error, context?: Record<string, any>) {
  trackEvent({
    type: 'error',
    name: error.name,
    properties: {
      message: error.message,
      stack: error.stack,
      ...context,
    },
  })
}