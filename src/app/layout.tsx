import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Presentación Ejecutiva - Reglamento Interno de Negocios',
  description: 'Propuesta para la aprobación del Reglamento Interno de Negocios - Sociedad de Beneficencia de Puno',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}