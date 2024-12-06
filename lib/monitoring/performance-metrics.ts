import { WebVitalsMetrics } from '@/types/analytics'

export class PerformanceMonitoring {
  private static metrics: WebVitalsMetrics = {
    cls: [],
    fid: [],
    lcp: [],
    fcp: [],
    ttfb: []
  }

  static recordMetric(name: keyof WebVitalsMetrics, value: number) {
    this.metrics[name].push({
      value,
      timestamp: Date.now()
    })
  }

  static getMetrics(): WebVitalsMetrics {
    return this.metrics
  }

  static clearMetrics() {
    Object.keys(this.metrics).forEach(key => {
      this.metrics[key as keyof WebVitalsMetrics] = []
    })
  }
}