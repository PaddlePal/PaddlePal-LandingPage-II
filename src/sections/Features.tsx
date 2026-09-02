import type { ReactNode } from 'react'
import paddle from '../assets/paddle-cutout.webp'
import {
  LinkLoop,
  LiveStream,
  ShotFanout,
  TrendChart,
  ZoneMap,
} from '../components/FeatureDiagrams'
import { useInView } from '../hooks/useInView'

type CardProps = {
  title: string
  lead: string
  body: string
  diagram: ReactNode
  /** Grid placement + any per-card treatment. */
  className?: string
  diagramClassName?: string
  badge?: string
  featured?: boolean
  delay: number
  visible: boolean
}

function Card({
  title,
  lead,
  body,
  diagram,
  className = '',
  diagramClassName = 'h-[104px] sm:h-[118px]',
  badge,
  featured = false,
  delay,
  visible,
}: CardProps) {
  return (
    <article
      className={`reveal flex flex-col rounded-2xl border border-hairline p-6 shadow-[0_1px_2px_rgba(11,18,16,0.04),0_18px_40px_-30px_rgba(11,18,16,0.35)] sm:p-7 ${featured
        ? 'bg-gradient-to-b from-paddle/[0.045] to-white'
        : 'bg-white'
        } ${className}`}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {badge && (
        <span className="mb-6 inline-flex self-start rounded-full border border-paddle/25 bg-paddle/[0.06] px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-paddle uppercase">
          {badge}
        </span>
      )}

      <div className={`w-full ${diagramClassName}`}>
        {diagram}
      </div>

      <div className="mt-auto pt-9">
        <h3 className="font-display text-[19px] font-medium tracking-[-0.025em] text-ink sm:text-[20px]">
          {title}
        </h3>
        <p className="mt-5 text-[11.5px] font-medium text-paddle">{lead}</p>
        <p className="mt-2.5 text-[13px] leading-[1.65] text-ink-faint">{body}</p>
      </div>
    </article>
  )
}

export default function Features() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id="features"
      ref={ref}
      className="features-wash relative isolate overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      {/* --- backdrop: the paddle, receded ------------------------------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="stage-lines absolute inset-0" />
        <img
          src={paddle}
          alt=""
          className="absolute top-1/2 left-1/2 h-auto w-[68%] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rotate-[9deg] opacity-[0.10] blur-[7px] select-none sm:w-[48%] lg:w-[42%]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10">
        {/* --- header ---------------------------------------------------- */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-12">
          <h2
            className="reveal font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.08] font-medium tracking-[-0.04em] text-balance text-ink lg:col-span-9 lg:col-start-4"
            data-visible={inView}
            style={{ transitionDelay: '92ms' }}
          >
            Sense, classify, improve:
            <br className="hidden sm:block" /> real coaching from the paddle in
            your hand.
          </h2>
        </div>

        {/* --- copy column + cards --------------------------------------- */}
        <div className="mt-14 grid grid-cols-1 items-stretch gap-4 sm:gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-12">
          <div
            className="reveal self-start md:col-span-2 lg:col-span-3 lg:row-start-1 lg:pr-6"
            data-visible={inView}
            style={{ transitionDelay: '160ms' }}
          >
            <p className="text-[13px] leading-[1.7] text-ink-soft">
              Ready to stop guessing at your game?
            </p>
            <p className="mt-5 text-[13px] leading-[1.7] text-ink-faint">
              Four distinct contact zones on the face of the paddle and
              a 6-axis IMU read every contact
            </p>
            <p className="mt-5 text-[13px] leading-[1.7] text-ink-faint">
              Shots can be viewed in real-time from the mobile app.
              All shot analytics can be viewed in the session history post game.
            </p>
            <p className="mt-5 text-[13px] leading-[1.7] font-semibold text-ink">
              No wearables. No cameras. No manual tagging.
            </p>
          </div>

          <Card
            visible={inView}
            delay={230}
            featured
            title="Shot Classification"
            lead="The paddle knows a drive from a dink."
            body="Force, zone and motion signatures are read together, so every contact lands in one of five shot classes on its own. No wearable, no camera, no tagging shots by hand — this is the part nothing else on the court does."
            diagram={<ShotFanout className="h-full w-full" />}
            diagramClassName="h-[112px] sm:h-[132px]"
            className="md:col-span-2 lg:col-span-5 lg:col-start-4 lg:row-start-1"
          />

          <Card
            visible={inView}
            delay={300}
            title="Impact Zone Detection"
            lead="Know if you hit the 'sweet spot'."
            body="Force sensor matrix resolve every hit to a region (zone1-4). Real-time tactile feedback for every zone1 (sweetspot) hit"
            diagram={<ZoneMap className="h-full w-full" />}
            className="lg:col-span-4 lg:col-start-9 lg:row-start-1"
          />

          <Card
            visible={inView}
            delay={370}
            title="Live Play View"
            lead="Third party viewing while you play."
            body="Shots appear on your phone as they happen. A coach or teammate can provide feedback about your play, while you play."
            diagram={<LiveStream className="h-full w-full" />}
            className="lg:col-span-4 lg:col-start-1 lg:row-start-2"
          />

          <Card
            visible={inView}
            delay={440}
            title="Session Analytics"
            lead="A coach in your pocket."
            body="Power trends, shots per zone and shot-type breakdowns stored and displayed for each session, turning a pile of individual hits into a picture of what is actually happening."
            diagram={<TrendChart className="h-full w-full" />}
            className="lg:col-span-4 lg:col-start-5 lg:row-start-2"
          />

          <Card
            visible={inView}
            delay={510}
            title="Reliable Connection"
            lead="Pick it up and play."
            body="The paddle pairs on wake and rebuilds the link by itself if it drops mid-session. No settings menu, no re-pairing ritual before you can start."
            diagram={<LinkLoop className="h-full w-full" />}
            className="lg:col-span-4 lg:col-start-9 lg:row-start-2"
          />
        </div>
      </div>
    </section>
  )
}
