import appmockup from '../assets/appmockup.webp'
import { useInView } from '../hooks/useInView'

/* Minor supporting details. Copy is placeholder — replace with final wording. */
const details = [
  {
    title: 'Pair and play',
    body: 'The app finds the paddle on wake and connects without a setup flow. [Template description — replace with final copy]',
  },
  {
    title: 'Live zone hits',
    body: 'Contact zones light up on the paddle map as you play. [Template description — replace with final copy]',
  },
  {
    title: 'Session breakdown',
    body: 'Shot count, average power and per-zone totals for every session. [Template description — replace with final copy]',
  },
  {
    title: 'Full history',
    body: 'Every session is kept, so progress is visible across weeks. [Template description — replace with final copy]',
  },
]

export default function AppSection() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id="app"
      ref={ref}
      className="app-wash relative isolate overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10">
        {/* --- header ---------------------------------------------------- */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-12">
          <h2
            className="reveal font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.08] font-medium tracking-[-0.04em] text-balance text-ink text-center lg:col-span-8 lg:col-start-3" data-visible={inView}
            style={{ transitionDelay: '80ms' }}
          >
            The whole session,
            <br className="hidden sm:block" /> waiting when you walk off.
          </h2>
        </div>

        {/* --- mockup ---------------------------------------------------- */}
        <div
          className="reveal -mx-6 mt-16 overflow-x-auto px-6 sm:mx-auto sm:w-full sm:max-w-[1120px] sm:overflow-visible sm:px-0 lg:mt-20"
          data-visible={inView}
          style={{ transitionDelay: '240ms' }}
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
              style={{ transitionDelay: `${320 + i * 70}ms` }}
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
