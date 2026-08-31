import database from '../assets/database.webp'
import dualcore from '../assets/dualcore.webp'
import shotalgo from '../assets/shotalgo.webp'
import { useInView } from '../hooks/useInView'

/* Three stages, following the data from the paddle to the app. The
   illustrations are line art on white, so they are composited with multiply
   and need no cut-out. */
const stages = [
  {
    img: dualcore,
    alt: 'Isometric illustration of two linked circuit boards',
    title: 'Dual-Core System & Firmware',
    body: 'The RP2040\u2019s two cores split the workload so sensing never stalls: one core polls the force sensors constantly and hands off each hit through a hardware FIFO while the other reads motion data, processes all data, and streams it over Bluetooth. Every hit is timestamped and captured with no dropped samples, even mid-rally.',    /* tuned per illustration so the three read at a similar visual weight */
    h: 'h-[168px] lg:h-[190px]',
  },
  {
    img: shotalgo,
    alt: 'Isometric illustration of noisy signals resolving into a checkmark',
    title: 'Shot Classification Algorithm',
    body: 'Motion sensor data is continuously stored in a circular queue. Once a hit is read by the force sensors, the last second of motion data is taken from the queue and bundled with the hit data into a single package. This data is then compiled to a handful of features (i.e. peak swing speed, impact force) and run through a shot classification algorithm. Each hit is classified as an Overhead, Drive, Dink, Drop, or Rally shot.', h: 'h-[186px] lg:h-[208px]',
  },
  {
    img: database,
    alt: 'Isometric illustration of a stacked database',
    title: 'Database',
    body: 'Each game is logged as its own datestamped sessions, filled with data about that game, stored in the cloud. Each session contains data from that game including: total shots, average power, shots per zone, and number of each type of shot. Every classified shot is written to a session record the moment your game ends, computed on-device in a single write. This data is read from the database and displayed in the history tab of your app.', h: 'h-[188px] lg:h-[212px]',
  },
]

export default function Software() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id="software"
      ref={ref}
      className="software-wash relative isolate overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10">
        <h2
          className="reveal mx-auto max-w-[20ch] text-center font-display text-[clamp(1.6rem,3.2vw,2.75rem)] leading-[1.08] font-medium tracking-[-0.04em] text-balance text-ink"
          data-visible={inView}
          style={{ transitionDelay: '60ms' }}
        >
          From swing to insight in three stages.
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3">
          {stages.map((stage, i) => (
            <div
              key={stage.title}
              className={`reveal px-5 py-2 text-center lg:px-8 ${i > 0 ? 'border-t border-hairline pt-12 sm:border-t-0 sm:border-l sm:pt-2' : ''
                }`}
              data-visible={inView}
              style={{ transitionDelay: `${140 + i * 90}ms` }}
            >
              <div className="flex h-[212px] items-end justify-center lg:h-[236px]">
                <img
                  src={stage.img}
                  alt={stage.alt}
                  loading="lazy"
                  className={`w-auto max-w-full mix-blend-multiply ${stage.h}`}
                />
              </div>
              <p className="mt-6 font-display text-[19px] font-semibold tracking-[-0.025em] text-ink">
                {stage.title}
              </p>
              <p className="mx-auto mt-3 max-w-[38ch] text-[13px] leading-[1.7] text-ink-faint">
                {stage.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
