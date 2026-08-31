import { useState } from 'react'
import logo from '../assets/paddlepal-mark.png'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Technology', href: '#technology' },
  { label: 'App', href: '#app' },
  { label: 'Features', href: '#features' },
  { label: 'Team', href: '#team' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 py-5 sm:px-10"
      >
        {/* Wordmark */}
        <a href="#home" className="flex shrink-0 items-center gap-2.5 justify-self-start col-start-1">
          <img
            src={logo}
            alt=""
            className="size-8 rounded-full sm:size-9"
            width={36}
            height={36}
          />
          <span className="font-display text-[17px] tracking-[-0.02em] whitespace-nowrap sm:text-lg">
            <span className="font-light text-ink-soft">PaddlePal</span>
          </span>
        </a>

        {/* Centre pill */}
        <ul className="hidden items-center gap-1 justify-self-center col-start-2 rounded-full border border-hairline bg-white/80 p-1 shadow-[0_1px_2px_rgba(11,18,16,0.05),0_8px_24px_-12px_rgba(11,18,16,0.18)] backdrop-blur-md lg:flex">
          {links.map(({ label, href }, i) => (
            <li key={label}>
              <a
                href={href}
                aria-current={i === 0 ? 'page' : undefined}
                className="group relative block rounded-full px-4 py-1.5 text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {label}
                <span
                  className={`absolute inset-x-4 -bottom-px h-px origin-center bg-ink transition-transform duration-300 ${i === 0 ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Status + contact */}
        <div className="flex shrink-0 items-center gap-2 justify-self-end col-start-3 sm:gap-3">
          <a
            href="#demo"
            className="hidden items-center rounded-full border border-hairline bg-white/80 px-4 py-2 text-[13px] font-medium text-ink shadow-[0_1px_2px_rgba(11,18,16,0.05)] backdrop-blur-md transition-[transform,border-color] duration-200 hover:-translate-y-px hover:border-ink/25 sm:inline-flex"
          >
            View demo
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-white transition-[transform,background-color] duration-200 hover:-translate-y-px hover:bg-brand sm:px-5 sm:py-2.5"
          >
            Contact
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="size-3.5"
            >
              <path
                d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-9 items-center justify-center rounded-full border border-hairline bg-white/80 text-ink backdrop-blur-md lg:hidden"
          >
            <svg viewBox="0 0 20 20" fill="none" className="size-4">
              {open ? (
                <path
                  d="m5 5 10 10M15 5 5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6.5h14M3 13.5h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="mx-6 rounded-2xl border border-hairline bg-white/95 p-2 shadow-[0_18px_40px_-18px_rgba(11,18,16,0.3)] backdrop-blur-md sm:mx-10 lg:hidden"
        >
          <ul>
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-black/[0.04] hover:text-ink"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
