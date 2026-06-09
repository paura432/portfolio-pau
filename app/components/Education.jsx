'use client'

import { SectionHeading } from './SectionHeading'
import { Timeline } from './magic/Timeline'

export function Education({ items, title, presentLabel }) {
  return (
    <section id="education" className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>{title}</SectionHeading>

        <Timeline items={items} presentLabel={presentLabel} />
      </div>
    </section>
  )
}
