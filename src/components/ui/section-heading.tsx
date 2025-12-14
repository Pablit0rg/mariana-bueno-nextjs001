import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle: string
  className?: string
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('text-center mb-12', className)}>
      <h2 className="font-serif text-4xl md:text-5xl text-primary-light mb-4">{title}</h2>
      <p className="font-sans text-xl text-secondary-light max-w-2xl mx-auto">{subtitle}</p>
    </div>
  )
}
