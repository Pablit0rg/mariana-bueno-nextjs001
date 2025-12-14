import Link from 'next/link'
import { Scale } from 'lucide-react'

export default function Header() {
  const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Sobre a Advogada', href: '/sobre' },
    { label: 'Nossos Serviços', href: '/areas-de-atuacao' },
    { label: 'Fale Conosco', href: '/contato' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-primary-dark/90 backdrop-blur-sm border-b border-primary-gold">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Scale className="h-8 w-8 text-primary-gold" />
          <span className="font-serif text-2xl text-primary-gold">Mariana Bueno</span>
          <span className="font-serif text-2xl text-primary-light">Advocacia</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-primary-light hover:text-primary-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contato"
          className="bg-primary-gold text-primary-dark font-sans font-semibold px-6 py-3 rounded hover:bg-opacity-90 transition-colors"
        >
          Agendar Consulta
        </Link>
      </div>
    </header>
  )
}
