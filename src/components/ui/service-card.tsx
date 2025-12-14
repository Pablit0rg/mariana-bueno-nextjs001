import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export default function ServiceCard({ icon: Icon, title, description, className }: ServiceCardProps) {
  return (
    <div className={cn('bg-secondary-dark p-8 rounded-lg border border-primary-gold/20 hover:border-primary-gold transition-colors', className)}>
      <div className="flex flex-col items-center text-center">
        <div className="p-4 bg-primary-gold/10 rounded-full mb-6">
          <Icon className="h-10 w-10 text-primary-gold" />
        </div>
        <h3 className="font-serif text-2xl text-primary-light mb-4">{title}</h3>
        <p className="font-sans text-secondary-light">{description}</p>
      </div>
    </div>
  )
}
