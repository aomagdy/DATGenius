import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DATGenius | AI-Powered DAT Prep Platform',
  description: 'Transform your DAT preparation with personalized AI learning, adaptive study plans, and comprehensive practice materials.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className={`relative flex min-h-screen flex-col ${inter.className}`}>
            <Navbar />
            {children}
            <Footer />
          </div>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}