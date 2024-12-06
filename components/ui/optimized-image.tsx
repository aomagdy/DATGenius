"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}: OptimizedImageProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Reset states when src changes
    setLoading(true)
    setError(false)
  }, [src])

  return (
    <div className={cn(
      'relative overflow-hidden bg-muted',
      loading && 'animate-pulse',
      className
    )}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'transition-opacity duration-300',
          loading ? 'opacity-0' : 'opacity-100'
        )}
        sizes={sizes}
        priority={priority}
        quality={85}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false)
          setError(true)
        }}
      />
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <span className="text-sm text-muted-foreground">
            Failed to load image
          </span>
        </div>
      )}
    </div>
  )
}