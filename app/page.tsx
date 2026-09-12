'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, ChevronDown, Menu, X } from 'lucide-react'

const services = [
  { number: '01', title: 'Websites', description: 'Professional, modern websites that make it easy for customers to find and reach you.', tag: 'Digital presence' },
  { number: '02', title: 'Booking & Appointments', description: 'Online booking for clinics and service businesses — patients can book without a phone call.', tag: 'Frictionless' },
  { number: '03', title: 'School Systems', description: 'Online admission forms and result portals that make administration simpler and records easier to access.', tag: 'Built for growth' },
  { number: '04', title: 'WhatsApp Automation', description: 'Automated replies, reminders, and order updates sent straight to your customers’ WhatsApp.', tag: 'Always on' },
  { number: '05', title: 'Membership Systems', description: 'Track gym or club memberships, renewals, and payments in one simple dashboard.', tag: 'One source of truth' },
  { number: '06', title: 'Business Automation', description: 'We automate repetitive parts of your workflow — reports, reminders, and data entry.', tag: 'Less busywork' },
]

const process = [
  ['01', 'We understand', 'your business'],
  ['02', 'We design &', 'build it'],
  ['03', 'You review &', 'we refine'],
  ['04', 'Launch &', 'ongoing support'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="Cosmox Technologies home">
            <img src="/cosmox-icon.svg" alt="" className="size-10 rounded-xl" />
            <span className="hidden text-sm font-bold tracking-[0.24em] text-white sm:block">COSMOX <span className="text-lime">TECHNOLOGIES</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            <a className="transition hover:text-lime" href="#services">Services</a>
            <a className="transition hover:text-lime" href="#process">How we work</a>
            <a className="transition hover:text-lime" href="#contact">Contact</a>
            <a href="#contact" className="rounded-full bg-lime px-5 py-2.5 font-semibold text-ink transition hover:bg-lime-soft">Start a project <ArrowUpRight className="ml-1 inline size-4" /></a>
          </div>
          <button className="text-white md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="flex flex-col gap-5 border-t border-white/10 px-6 py-6 text-white/75 md:hidden"><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#process" onClick={() => setMenuOpen(false)}>How we work</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div>}
      </nav>

      <section id="top" className="relative flex min-h-[88vh] items-end bg-ink px-6 pb-20 pt-36 lg:min-h-[760px] lg:px-10 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_18%_20%,rgba(174,234,32,.12),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,.05),transparent_28%)]" />
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="mb-16 flex items-center gap-4 sm:mb-24"><img src="/cosmox-mark.svg" alt="Cosmox Technologies" className="h-16 w-auto sm:h-20" /></div>
          <div className="max-w-5xl"><p className="mb-6 font-mono text-xs uppercase tracking-[0.28em] text-lime">Software studio · Mangaldai, Assam</p><h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[6.7rem]">We build the <span className="text-lime">digital side</span> of your business.</h1><div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"><p className="max-w-xl text-pretty text-lg leading-8 text-white/60">Modern websites, smart systems, and practical automation for businesses ready to work better.</p><a href="#contact" className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white">Let&apos;s talk <span className="flex size-10 items-center justify-center rounded-full border border-lime text-lime transition group-hover:bg-lime group-hover:text-ink"><ArrowUpRight className="size-4" /></span></a></div></div>
        </div>
        <div className="absolute bottom-8 right-8 hidden font-mono text-[10px] uppercase tracking-[0.22em] text-white/35 lg:block">Scroll to explore ↓</div>
      </section>

      <section id="services" className="bg-paper px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mb-12 flex items-end justify-between gap-8"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-olive">Capabilities</p><h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl">Everything your business needs to move forward.</h2></div><span className="hidden font-mono text-xs text-ink/40 sm:block">(06 services)</span></div><div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-2">{services.map((service) => <article key={service.number} className="group bg-paper p-7 transition hover:bg-white sm:p-10"><div className="mb-14 flex items-start justify-between"><span className="font-mono text-sm text-olive">{service.number}</span><span className="rounded-full border border-ink/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/45">{service.tag}</span></div><h3 className="mb-4 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{service.title}</h3><p className="max-w-md text-base leading-7 text-ink/60">{service.description}</p><div className="mt-8 flex size-9 items-center justify-center rounded-full border border-ink/15 text-olive transition group-hover:bg-lime group-hover:text-ink"><ArrowUpRight className="size-4" /></div></article>)}</div></div></section>

      <section className="bg-lime px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-ink/60">Why Cosmox</p><h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-6xl">Technology that solves real problems.</h2></div><div className="grid gap-8 sm:grid-cols-3">{[['Quality','Professional solutions built with attention to detail.'],['Reliable','Built to work consistently, with support when you need it.'],['Practical','Technology focused on solving real business problems.']].map(([title, body]) => <div key={title} className="border-t border-ink/20 pt-4"><h3 className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-ink/70">{title}</h3><p className="text-lg leading-7 text-ink/80">{body}</p></div>)}</div></div></section>

      <section id="process" className="bg-paper px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="mb-14 flex items-end justify-between border-b border-ink/10 pb-5"><div><p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-olive">The process</p><h2 className="text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl">Simple by design.</h2></div><ChevronDown className="size-7 text-olive" /></div><div className="grid gap-10 md:grid-cols-4 md:gap-5">{process.map(([number, line1, line2], index) => <div key={number} className="relative"><div className="mb-6 flex items-center gap-4"><span className="flex size-14 items-center justify-center rounded-full bg-ink font-mono text-lg text-lime">{number}</span>{index < 3 && <div className="hidden h-px flex-1 bg-ink/15 md:block" />}</div><p className="text-xl font-semibold leading-tight text-ink">{line1}<br />{line2}</p></div>)}</div></div></section>

      <section id="contact" className="bg-ink px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_.8fr]"><div><p className="mb-5 font-mono text-xs uppercase tracking-[0.24em] text-lime">Start a conversation</p><h2 className="max-w-xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-7xl">Let&apos;s put your business <span className="text-lime">online.</span></h2><p className="mt-8 max-w-md text-lg leading-8 text-white/55">Tell us a little about what you&apos;re building. We&apos;ll get back to you with a practical next step.</p></div><div>{submitted ? <div className="flex min-h-80 flex-col justify-center border-t border-white/15"><Check className="mb-6 size-10 text-lime" /><h3 className="text-3xl font-semibold text-white">Message received.</h3><p className="mt-3 text-white/55">We&apos;ll be in touch soon.</p></div> : <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="flex flex-col gap-5 border-t border-white/15 pt-6"><input required placeholder="Your name" className="border-b border-white/20 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/35 focus:border-lime" /><input required type="email" placeholder="Email address" className="border-b border-white/20 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/35 focus:border-lime" /><textarea required placeholder="What can we build together?" rows={4} className="resize-none border-b border-white/20 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/35 focus:border-lime" /><button className="mt-4 flex items-center justify-between rounded-full bg-lime px-6 py-4 text-left font-semibold text-ink transition hover:bg-lime-soft">Send enquiry <ArrowUpRight className="size-5" /></button></form>}</div></div></section>

      <footer className="bg-ink px-6 pb-10 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Cosmox Technologies</p><div className="flex flex-wrap gap-6"><a href="mailto:hello@cosmox.dev" className="transition hover:text-lime">hello@cosmox.dev</a><span>Based in Mangaldai, Assam</span></div></div></footer>
    </main>
  )
}
