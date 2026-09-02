import iconEmail from '../assets/icon-email.webp'
import iconGithub from '../assets/icon-github.webp'
import iconLinkedin from '../assets/icon-linkedin.webp'
import iconWebsite from '../assets/icon-website.webp'
import profile1 from '../assets/profile-1.webp'
import profile2 from '../assets/profile-pic-2.jpeg'
import profile5 from '../assets/profile-pic-5.jpeg'
import { useInView } from '../hooks/useInView'

type Member = {
  name: string
  /** Drop a photo import here and it replaces the placeholder avatar. */
  photo?: string
  linkedin?: string
  github?: string
  email?: string
  website?: string
}

type Role = {
  title: string
  body: string
  members: Member[]
}

const roles: Role[] = [
  {
    title: 'Software & Firmware Lead',
    body: 'Developed and delivered the PaddlePals iOS app and this landing page [TypeScript, React, React Native, Expo, Firebase, Xcode]. Designed and developed the firmware architecture and code [C++]. ',
    members: [{ name: 'Ali Shamsi', photo: profile1, github: 'https://github.com/Ali-Aryo', linkedin: 'www.linkedin.com/in/aoa25', email: 'aliaryo2004@gmail.com', website: 'https://ali-shamsi-dev.netlify.app/' }],
  },
  {
    // 5 people across 4 roles: this one is shared.
    title: 'Electronics Lead',
    body: 'Delivered four custom printable circuit boards (PCB). From an idea, to breadboard development, to design in Kicad, ordering, and testing.',
    members: [{ name: 'Peter Phuc', photo: profile2 }, { name: 'Salem Alsaiari' }],
  },
  {
    title: 'Mechanical Lead',
    body: 'Designed and delivered custom 3D printed electronic housing. Designed in [software], the custom pickleball handle that could house electronics, and the custom housing unit at the throat of the paddle to protect the sensor PCB ',
    members: [{ name: 'Robert Truong' }],
  },
  {
    title: 'System Integration Lead',
    body: 'Soldered and assembled all custom electronics. Performed mechanical alterations to a pickleball paddle using various workshop tools [list of tools]. Researched materials',
    members: [{ name: 'Allen Shapiro', photo: profile5 }],
  },
]

const icons = {
  linkedin: iconLinkedin,
  github: iconGithub,
  email: iconEmail,
  website: iconWebsite,
}

/**
 * A bare host such as "www.linkedin.com/in/aoa25" is a *relative* URL, so the
 * browser resolves it against the site and the link goes nowhere. Give
 * anything without a scheme an https:// prefix.
 */
function externalUrl(value?: string) {
  if (!value) return undefined
  return /^[a-z][a-z0-9+.-]*:/i.test(value) ? value : `https://${value}`
}

function SocialLinks({ member }: { member: Member }) {
  const links = [
    { key: 'linkedin' as const, href: externalUrl(member.linkedin), label: 'LinkedIn' },
    { key: 'github' as const, href: externalUrl(member.github), label: 'GitHub' },
    { key: 'email' as const, href: member.email && `mailto:${member.email}`, label: 'Email' },
    { key: 'website' as const, href: externalUrl(member.website), lable: 'Website' }
  ]

  return (
    <ul className="mt-3 flex items-center justify-center gap-2">
      {links.map(({ key, href, label }) =>
        href ? (
          <li key={key}>
            <a
              href={href}
              target={key === 'email' ? undefined : '_blank'}
              rel={key === 'email' ? undefined : 'noreferrer'}
              aria-label={`${member.name} on ${label}`}
              className="block transition-[transform,opacity] duration-200 hover:-translate-y-0.5 hover:opacity-75"
            >
              <img src={icons[key]} alt="" className="size-8" />
            </a>
          </li>
        ) : (
          // not filled in yet — show it, but do not pretend it is a link
          <li key={key} aria-hidden="true">
            <img src={icons[key]} alt="" className="size-8 opacity-25" />
          </li>
        ),
      )}
    </ul>
  )
}

function Avatar({ member, size }: { member: Member; size: string }) {
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className={`${size} shrink-0 rounded-full object-cover`}
      />
    )
  }
  // Placeholder until real headshots are dropped in.
  return (
    <div
      aria-hidden="true"
      className={`${size} flex shrink-0 items-center justify-center rounded-full bg-white/70 ring-1 ring-hairline`}
    >
      <svg viewBox="0 0 24 24" className="size-1/2 fill-ink/15">
        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.42 0-8 2.46-8 5.5V22h16v-2.5c0-3.04-3.58-5.5-8-5.5z" />
      </svg>
    </div>
  )
}

export default function Team() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id="team"
      ref={ref}
      className="team-wash relative isolate overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-10">
        <h2
          className="reveal text-center font-display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-ink"
          data-visible={inView}
        >
          Meet our team
        </h2>
        <div
          className="reveal mx-auto mt-6 h-[3px] w-16 rounded-full bg-ink/25"
          data-visible={inView}
          style={{ transitionDelay: '70ms' }}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-5">
          {roles.map((role, i) => {
            const pair = role.members.length > 1
            return (
              <article
                key={role.title}
                className={`reveal mx-auto flex w-full flex-col items-center rounded-[999px] bg-[#ecefee] px-9 pt-12 pb-24 text-center ring-1 ring-ink/[0.04] lg:max-w-none ${pair
                  ? 'max-w-[560px] lg:col-span-2 lg:rounded-[124px]'
                  : 'max-w-[380px]'
                  }`}
                data-visible={inView}
                style={{ transitionDelay: `${160 + i * 105}ms` }}
              >
                {/* people: photo, name and that person's own links */}
                <div
                  className={`flex w-full justify-center ${pair ? 'gap-4 lg:gap-8' : ''}`}
                >
                  {role.members.map((member, m) => (
                    <div
                      key={m}
                      className={pair ? 'min-w-0 flex-1' : 'flex flex-col items-center'}
                    >
                      <div className="flex justify-center">
                        <Avatar member={member} size="size-[116px]" />
                      </div>
                      <p className="mt-4 font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
                        {member.name}
                      </p>
                      <SocialLinks member={member} />
                    </div>
                  ))}
                </div>

                <p className="mt-8 font-display text-[17px] font-semibold tracking-[-0.025em] text-ink">
                  {role.title}
                </p>
                <p className="mt-2.5 text-[12.5px] leading-[1.65] text-ink-faint">
                  {role.body}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
