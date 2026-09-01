import iconGithub from '../assets/icon-github.webp'
import logo from '../assets/paddlepal-mark.png'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Technology', href: '#technology' },
  { label: 'App', href: '#app' },
  { label: 'Features', href: '#features' },
  { label: 'Team', href: '#team' },
  { label: 'Demo', href: '#demo' },
]

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-10 sm:py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* wordmark */}
          <a href="#home" className="flex shrink-0 items-center gap-2.5">
            <img
              src={logo}
              alt=""
              width={32}
              height={32}
              className="size-8 rounded-full"
            />
            <span className="font-display text-[16px] tracking-[-0.02em] text-ink-soft">
              PaddlePal
            </span>
          </a>

          {/* section links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-medium text-ink-soft">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-ink">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* social */}
          <a
            href="https://github.com/PaddlePal?view_as=public"
            target="_blank"
            rel="noreferrer"
            aria-label="PaddlePal on GitHub"
            className="flex size-9 shrink-0 items-center justify-center transition-transform duration-200 hover:-translate-y-px"
          >
            <img src={iconGithub} alt="" className="size-full" />
          </a>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-4 border-t border-hairline pt-6 text-center sm:mt-8 sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[12px] text-ink-faint">
            © {new Date().getFullYear()} PaddlePal. All rights reserved.
          </p>
          <p className="text-[12px] text-ink-faint">
            Smart Pickleball Analytics
          </p>
        </div>
      </div>
    </footer>
  )
}
