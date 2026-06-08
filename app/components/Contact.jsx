'use client'

import { motion } from 'motion/react'
import { Github, Linkedin, Mail, Copy } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { SpotlightCard } from './magic/SpotlightCard'

export function Contact({ shared, ui, copyright }) {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(shared.email)
      toast.success(ui.emailCopied, { description: shared.email })
    } catch {
      toast.error('Could not copy email')
    }
  }

  const socialLinks = [
    {
      href: shared.github,
      icon: Github,
      label: 'GitHub',
      external: true,
    },
    {
      href: shared.linkedin,
      icon: Linkedin,
      label: 'LinkedIn',
      external: true,
    },
    {
      href: `mailto:${shared.email}`,
      icon: Mail,
      label: 'Email',
      external: false,
    },
  ]

  return (
    <>
      <section id="contact" className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
        <SpotlightCard
          tiltStrength={5}
          className="rounded-2xl border border-[var(--brand-border)] bg-[var(--surface)] p-6 text-center shadow-[var(--shadow)] sm:p-8"
        >
          <h2 className="mb-4 text-3xl font-bold text-gradient sm:text-4xl">{ui.contactTitle}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-[var(--text-muted)]">{ui.contactText}</p>

          {/* Copy email button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Button
              onClick={copyEmail}
              variant="outline"
              className="gap-2 rounded-full border-[var(--brand-border)] bg-[var(--surface-soft)] px-5 py-2.5 text-sm text-[var(--text)] transition-all hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
            >
              <Copy size={14} aria-hidden="true" />
              {shared.email}
            </Button>
          </motion.div>

          {/* Social links */}
          <div className="flex justify-center gap-4 sm:gap-6">
            {socialLinks.map(({ href, icon: Icon, label, external }) => (
              <motion.a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--text)] transition-all hover:bg-[var(--brand-accent)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)] sm:h-14 sm:w-14"
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={22} aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </SpotlightCard>
        </motion.div>
      </section>

      <footer className="border-t border-[var(--brand-border)] px-4 py-6 sm:px-6 sm:py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-[var(--subtle)] sm:text-base">
          <p>{copyright}</p>
        </div>
      </footer>
    </>
  )
}
