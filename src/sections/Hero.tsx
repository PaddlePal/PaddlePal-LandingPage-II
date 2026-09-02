import paddle from '../assets/paddle-cutout.webp'
import Navbar from '../components/Navbar'

const specs = [
  ['BLE', 'Connect'],
  ['iOS', 'Mobile App'],
  ['Database', 'Session History'],
]

export default function Hero() {
  return (
    <section
      id="home"
      className="stage-sweep relative isolate flex min-h-svh flex-col overflow-hidden"
    >
      {/* --- backdrop ---------------------------------------------------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="stage-lines absolute inset-0" />
        <div className="stage-beam absolute inset-0" />
        <div className="stage-glow absolute inset-0" />
      </div>

      {/* --- the wordmark, part of the backdrop -------------------------- */}
      <div className="pointer-events-none absolute inset-x-0 top-[28%] z-10 md:top-[48%] -translate-y-1/2 select-none">
        <h1
          className="rise text-center font-display text-[min(19vw,16.5rem)] leading-[0.82] font-semibold tracking-[-0.055em] text-ghost"
          style={{ animationDelay: '92ms' }}
        >
          PaddlePal
        </h1>
      </div>

      <Navbar />

      <div className="relative z-20 flex min-h-0 flex-1 flex-col items-center px-6 pt-[max(5.5rem,12svh)] text-center sm:px-10">
        {/* --- copy ------------------------------------------------------ */}
        <p
          className="rise font-display text-[clamp(1.05rem,2.4vw,1.75rem)] leading-tight font-medium tracking-[-0.03em] text-ink-soft"
          style={{ animationDelay: '230ms' }}
        >
          Smart Pickleball Analytics
        </p>

        <p
          className="rise mt-3 max-w-[40ch] text-[13px] leading-relaxed text-ink-faint"
          style={{ animationDelay: '345ms' }}
        >
          Every swing, shot and impact measured
        </p>


        {/* --- the paddle, taking whatever height is left ---------------- */}
        <div className="relative mt-6 min-h-[200px] w-full flex-1">
          <figure
            className="rise-paddle absolute bottom-[-13svh] left-1/2 aspect-[682/1432] h-[calc(100%+13svh)] max-h-[820px] -translate-x-1/2"
            style={{ animationDelay: '210ms' }}
          >
            <img
              src={paddle}
              alt="The PaddlePal smart pickleball paddle, with its sensor module mounted at the throat"
              width={682}
              height={1432}
              className="h-full w-full object-contain drop-shadow-[0_34px_55px_rgba(11,18,16,0.17)]"
            />

            {/* Callouts anchored to the real hardware in the photo */}
            <figcaption
              className="rise absolute top-[69%] left-[-21.5%] hidden items-center gap-3 whitespace-nowrap md:flex"
              style={{ animationDelay: '1035ms' }}
            >
              <span className="text-right">
                <span className="block font-display text-[13px] font-bold tracking-[-0.01em] text-ink">
                  Movement sensor
                </span>
                <span className="block text-[11px] text-ink-faint">
                  6-axis IMU
                </span>
              </span>
              <span className="flex items-center">
                <span className="h-px w-[88px] bg-ink/20 lg:w-[104px]" />
                <span className="size-2 shrink-0 rounded-full bg-paddle ring-[1.5px] ring-white shadow-xs" />
              </span>
            </figcaption>

            <figcaption
              className="rise absolute top-[25%] left-1/2 hidden items-center gap-3 whitespace-nowrap md:flex"
              style={{ animationDelay: '1150ms' }}
            >
              <span className="flex items-center">
                <span className="size-2 shrink-0 rounded-full bg-paddle ring-[1.5px] ring-white shadow-xs" />
                <span className="h-px w-44 bg-ink/20 lg:w-52" />
              </span>
              <span>
                <span className="block font-display text-[13px] font-bold tracking-[-0.01em] text-ink">
                  Shot sensor
                </span>
                <span className="block text-[11px] text-ink-faint">
                  FSR matrix
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* --- bottom rail ------------------------------------------------- */}
      <div className="pointer-events-none relative z-30 mx-auto flex w-full max-w-[1440px] items-end justify-between px-6 pb-6 sm:px-10">
        <dl
          className="rise hidden items-center gap-6 sm:flex"
          style={{ animationDelay: '750ms' }}
        >
          {specs.map(([value, label]) => (
            <div key={label} className="text-right leading-tight">
              <dt className="font-display text-sm font-bold tracking-[-0.02em] text-ink">
                {value}
              </dt>
              <dd className="text-[11px] tracking-[0.08em] text-ink-faint uppercase">
                {label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
