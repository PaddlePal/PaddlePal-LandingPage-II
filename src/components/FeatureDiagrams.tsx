/**
 * Line-art diagrams for the feature cards. Each one is drawn on a 200x96
 * viewBox (the classifier fan-out gets 300x96 for its labels) so the cards
 * can size them purely with `w-full`.
 */

type DiagramProps = { className?: string }

/* --- Impact zone detection ------------------------------------------------
 * The real sensor layout: two square pads stacked down the centre of the
 * face, flanked by a full-length strip on each shoulder. Upper-centre is
 * shown taking a hit.
 */
export function ZoneMap({ className }: DiagramProps) {
  return (
    <svg
      viewBox="0 0 200 96"
      fill="none"
      preserveAspectRatio="xMinYMid meet"
      aria-hidden="true"
      className={className}
    >
      {/* contact sightline */}
      <path
        d="M0 22h64M136 22h64"
        className="stroke-ink/15"
        strokeWidth="1"
        strokeDasharray="2 5"
      />

      {/* face, throat, grip */}
      <rect
        x="70"
        y="3"
        width="60"
        height="77"
        rx="12"
        className="stroke-ink/25"
        strokeWidth="1.25"
      />
      <path
        d="M93 80h14l-3 9h-8z"
        className="stroke-ink/25"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path d="M100 89v5" className="stroke-ink/25" strokeWidth="4" strokeLinecap="round" />

      {/* full-length strip on each shoulder */}
      <rect x="77" y="10" width="7" height="63" rx="2.5" className="stroke-ink/20" strokeWidth="1" />
      <rect x="116" y="10" width="7" height="63" rx="2.5" className="stroke-ink/20" strokeWidth="1" />

      {/* two square pads down the centre — the upper one is taking a hit */}
      <rect
        x="88"
        y="10"
        width="24"
        height="30"
        rx="3"
        className="fill-paddle/10 stroke-paddle"
        strokeWidth="1.25"
      />
      <rect x="88" y="43" width="24" height="30" rx="3" className="stroke-ink/20" strokeWidth="1" />

      {/* contact ripple, off-centre so it reads as a hit rather than a lens */}
      <circle cx="96" cy="22" r="6" className="stroke-paddle/35" strokeWidth="1" />
      <circle cx="96" cy="22" r="1.9" className="fill-paddle" />
    </svg>
  )
}

/* --- Shot classification --------------------------------------------------
 * An impact signature resolving into one of five classes.
 */
export function ShotFanout({ className }: DiagramProps) {
  const branches = [
    { y: 10, label: 'Drive', active: true },
    { y: 29, label: 'Drop', active: false },
    { y: 48, label: 'Dink', active: false },
    { y: 67, label: 'Overhead', active: false },
    { y: 86, label: 'Rally', active: false },
  ]

  return (
    <svg viewBox="0 0 300 96" fill="none" preserveAspectRatio="xMinYMid meet" aria-hidden="true" className={className}>
      {/* impact signature */}
      <path
        d="M6 48h20l3-4 3 8 4-26 4 34 4-20 3 8h14"
        className="stroke-ink/35"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* classifier node */}
      <circle cx="68" cy="48" r="6.5" className="fill-white stroke-paddle" strokeWidth="1.25" />
      <circle cx="68" cy="48" r="1.8" className="fill-paddle" />

      {branches.map(({ y, label, active }) => (
        <g key={label}>
          <path
            d={`M75 48C110 48 128 ${y} 172 ${y}`}
            className={active ? 'stroke-paddle' : 'stroke-ink/18'}
            strokeWidth={active ? 1.4 : 1}
          />
          <circle
            cx="176"
            cy={y}
            r="2.6"
            className={active ? 'fill-paddle' : 'fill-white stroke-ink/30'}
            strokeWidth="1"
          />
          <text
            x="187"
            y={y + 3.2}
            fontSize="9"
            className={`font-sans ${active ? 'fill-ink font-semibold' : 'fill-ink-faint'}`}
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  )
}

/* --- Live play view ------------------------------------------------------- */
export function LiveStream({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 200 96" fill="none" preserveAspectRatio="xMinYMid meet" aria-hidden="true" className={className}>
      {/* paddle */}
      <rect
        x="12"
        y="14"
        width="30"
        height="38"
        rx="8"
        className="stroke-ink/25"
        strokeWidth="1.25"
      />
      <path
        d="M27 52v22"
        className="stroke-ink/25"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* it is transmitting */}
      <path d="M52 28a13 13 0 0 1 0 24" className="stroke-paddle/70" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M60 21a20 20 0 0 1 0 38" className="stroke-paddle/40" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M68 14a27 27 0 0 1 0 52" className="stroke-paddle/20" strokeWidth="1.25" strokeLinecap="round" />

      {/* phone */}
      <rect
        x="124"
        y="6"
        width="56"
        height="84"
        rx="10"
        className="stroke-ink/25"
        strokeWidth="1.25"
      />
      <path d="M144 16h16" className="stroke-ink/25" strokeWidth="2" strokeLinecap="round" />

      {/* live trace */}
      <path
        d="M132 62h8l5-12 5 22 6-30 5 20 4-8h9"
        className="stroke-paddle"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="174" cy="54" r="2.4" className="fill-paddle" />
    </svg>
  )
}

/* --- Session analytics ---------------------------------------------------- */
export function TrendChart({ className }: DiagramProps) {
  const bars = [
    { x: 22, h: 24 },
    { x: 50, h: 36 },
    { x: 78, h: 30 },
    { x: 106, h: 48 },
    { x: 134, h: 42 },
    { x: 162, h: 60 },
  ]

  return (
    <svg viewBox="0 0 200 96" fill="none" preserveAspectRatio="xMinYMid meet" aria-hidden="true" className={className}>
      <path d="M10 84h180" className="stroke-ink/15" strokeWidth="1" />

      {bars.map(({ x, h }, i) => {
        const last = i === bars.length - 1
        return (
          <rect
            key={x}
            x={x}
            y={84 - h}
            width="16"
            height={h}
            rx="2.5"
            className={last ? 'fill-paddle/10 stroke-paddle' : 'stroke-ink/20'}
            strokeWidth={last ? 1.25 : 1}
          />
        )
      })}

      {/* trend across sessions */}
      <path
        d="M26 56C64 50 108 34 166 16"
        className="stroke-paddle/45"
        strokeWidth="1.25"
        strokeDasharray="3 4"
        strokeLinecap="round"
      />
      <path
        d="M160 12h9v9"
        className="stroke-paddle"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(28 169 12)"
      />
    </svg>
  )
}

/* --- Reliable connection --------------------------------------------------
 * Link drops on one side, the paddle rebuilds it on its own, link is solid
 * again on the other.
 */
export function LinkLoop({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 200 96" fill="none" preserveAspectRatio="xMinYMid meet" aria-hidden="true" className={className}>
      {/* paddle */}
      <rect x="12" y="30" width="26" height="32" rx="7" className="stroke-ink/25" strokeWidth="1.25" />
      <path d="M25 62v12" className="stroke-ink/25" strokeWidth="2.5" strokeLinecap="round" />

      {/* phone */}
      <rect x="162" y="26" width="26" height="44" rx="7" className="stroke-ink/25" strokeWidth="1.25" />

      {/* dropped, then recovered */}
      <path
        d="M42 46h39"
        className="stroke-ink/25"
        strokeWidth="1.25"
        strokeDasharray="3 5"
        strokeLinecap="round"
      />
      <path d="M119 46h39" className="stroke-paddle" strokeWidth="1.4" strokeLinecap="round" />

      {/* self-healing loop */}
      <path
        d="M107.5 33a15 15 0 1 1-15 0"
        className="stroke-paddle"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M92.5 33l-3.4 6-3.6-6.1z" className="fill-paddle" />
    </svg>
  )
}
