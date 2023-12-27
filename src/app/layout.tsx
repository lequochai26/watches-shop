import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NVTM Watches Center',
  description: "NVTM Watches Shop's website for selling limitted and fabulous Watches."
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
