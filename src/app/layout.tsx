import type { Metadata } from 'next'
import { Cinzel, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Mariana Bueno Advocacia',
  description: 'Escritório de advocacia especializado em diversas áreas do direito.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${montserrat.variable}`}>
      <body className="font-sans bg-primary-dark text-primary-light">
        <Header />
        <main>{children}</main>
        <footer className="bg-secondary-dark text-center py-8">
          <p className="text-sm text-primary-gold">© {new Date().getFullYear()} Mariana Bueno Advocacia. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  )
}
