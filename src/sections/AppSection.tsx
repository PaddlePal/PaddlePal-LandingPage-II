import appmockup from '../assets/appmockup.webp'
import { useInView } from '../hooks/useInView'

/* Minor supporting details. Copy is placeholder — replace with final wording. */
const details = [
  {
    title: 'Pair and play',
    body: 'The app finds the paddle on wake, connects and reconnects automatically.',
  },
  {
    title: 'Live zone hits',
    body: 'Contact zones light up on the paddle map in the Live tab in real time as you play.',
  },
  {
    title: 'Session breakdown',
    body: 'Shot count, average power, per-zone and shot type totals for every session.',
  },
  {
    title: 'Full history',
    body: 'Every session is timestamped and stored, so progress is visible across weeks.',
  },
]

export default function AppSection() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id="app"
      ref={ref}
      className="app-wash relative isolate overflow-hidden pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-36"
    >
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10">
        {/* --- header ---------------------------------------------------- */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-12">
          <h2
            className="reveal font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.08] font-medium tracking-[-0.04em] text-balance text-ink text-center lg:col-span-8 lg:col-start-3" data-visible={inView}
            style={{ transitionDelay: '92ms' }}
          >
            The whole session,
            <br className="hidden sm:block" /> waiting when you walk off.
          </h2>
        </div>

        {/* --- mockup ---------------------------------------------------- */}
        <div
          className="reveal -mx-6 mt-16 overflow-x-auto px-6 sm:mx-auto sm:w-full sm:max-w-[1120px] sm:overflow-visible sm:px-0 lg:mt-20"
          data-visible={inView}
          style={{ transitionDelay: '275ms' }}
        >
          <img
            src={appmockup}
            alt="Five screens of the PaddlePal companion app: settings, paddle pairing, a session breakdown with shot counts and per-zone totals, live zone hits, and sign in"
            width={1600}
            height={1031}
            loading="lazy"
            /* the render is cropped mid-phone, so dissolve the cut into the page */
            className="app-mockup-fade w-[620px] max-w-none sm:w-full"
          />
        </div>

        {/* --- minor details --------------------------------------------- */}
        <div className="mt-2 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4">
          {details.map(({ title, body }, i) => (
            <div
              key={title}
              className="reveal"
              data-visible={inView}
              style={{ transitionDelay: `${370 + i * 80}ms` }}
            >
              <p className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
                {title}
              </p>
              <p className="mt-2 text-[12.5px] leading-[1.65] text-ink-faint">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
