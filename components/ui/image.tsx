"use client"

import NextImage, { ImageProps as NextImageProps } from "next/image"
import { useState } from "react"

interface ImageProps extends NextImageProps {
  fallback?: string
}

export function Image({ alt, fallback, ...props }: ImageProps) {
  const [error, setError] = useState(false)

  return (
    <NextImage
      {...props}
      alt={alt}
      src={error && fallback ? fallback : props.src}
      onError={() => setError(true)}
    />
  )
}