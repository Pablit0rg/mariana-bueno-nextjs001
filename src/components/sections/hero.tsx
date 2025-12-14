import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-dark via-secondary-dark to-primary-dark">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl md:text-7xl text-primary-light mb-6">
          Excelência Jurídica com
          <span className="block text-primary-gold">Compromisso e Dedicação</span>
        </h1>
        <p className="font-sans text-xl text-secondary-light max-w-3xl mx-auto mb-10">
          Oferecemos soluções jurídicas personalizadas e eficazes para proteger seus interesses e garantir seus direitos.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/contato"
            className="bg-primary-gold text-primary-dark font-sans font-semibold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors inline-flex items-center justify-center gap-2"
          >
            Agendar Consulta
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/areas-de-atuacao"
            className="border-2 border-primary-gold text-primary-gold font-sans font-semibold px-8 py-4 rounded-lg hover:bg-primary-gold hover:text-primary-dark transition-colors"
          >
            Nossos Serviços
          </Link>
        </div>
      </div>
    </section>
  )
}
