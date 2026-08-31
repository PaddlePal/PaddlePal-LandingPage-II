import paddle from '../assets/technology-cutout-v2.webp'
import { useInView } from '../hooks/useInView'

/**
 * Anchor coordinates are percentages of the cut-out image, measured against
 * the render itself (by sampling for each material's pixels) so the dots stay
 * on the right component at every size.
 *
 * `callout` is the vertical position of the text block, also in image
 * percentages — it runs past 0–100 because the image is a 3.2:1 letterbox and
 * three stacked labels are taller than it is.
 */
type Part = {
  side: 'left' | 'right' | 'bottom'
  title: string
  body: string
  anchor: { x: number; y: number }
  /** Vertical position of the label's title line, in image percentages. */
  callout: number
  /** Bottom callouts only: place the label at this x instead of the anchor's. */
  labelX?: number
}

const parts: Part[] = [
  {
    side: 'left',
    title: 'Blue vinyl face',
    body: 'An outer skin sealed over the face to protect the force sensors and adding the paddle weather resistance.',
    anchor: { x: 16.0, y: 17.0 },
    callout: -14,
  },
  {
    side: 'left',
    title: 'FSR sensor matrix',
    body: 'A matrix of force sensing resistors (FSR). FSRs laid across the face, measuring the location and force of each ball contact.',
    anchor: { x: 19.9, y: 56.4 },
    callout: 50,
  },
  {
    side: 'left',
    title: 'Honeycomb core',
    body: 'The core. A classic polymer honeycomb that keeps the paddle light and stiff while absorbing the energy of each impact.',
    anchor: { x: 16.3, y: 82.3 },
    callout: 114,
  },
  {
    side: 'right',
    title: 'Sensor PCB',
    body: 'The custom sensor circuit board sits at the throat, taking in all the FSR leads. This PCB connects groups of FSRs in parallel, creating zones. Each zone is routed through a voltage divider passes analog signals down into the handle.',
    anchor: { x: 53, y: 47.0 },
    callout: -14,
  },
  {
    side: 'bottom',
    title: 'Vibration Motor',
    body: 'Integrated vibration motor provides immediate real-time feedback to the player everytime the sweetspot (zone1) is hit during play.',
    anchor: { x: 67.4, y: 49.0 },
    callout: 108,
    // label pulled left of the anchor; leader runs as a single straight
    // diagonal, matching the honeycomb callout
    labelX: 43,
  },
  {
    side: 'right',
    title: 'Microcontroller',
    body: 'The microcontroller dev kit utilizes a Raspberry Pi (RP2040) SoC (system on chip). The RP2040 includes two 32-bit Arm Cortex-M0+ CPU cores, clocked up to 133 MHz. The dev kit also houses an inertial measurement unit (IMU) and a NINA module for WIFI & Bluetooth communication. Data is streamed to a phone over BLE (Bluetooth low energy).',
    anchor: { x: 85.0, y: 44.5 },
    callout: 70,
  },
  {
    side: 'bottom',
    title: 'Handle housing',
    body: 'This custom handle was modled and 3D printed out of polypropylene. It is designed to carry the electronics without shifting the paddle’s balance point.',
    // centre of the handle housing; label sits straight below it
    anchor: { x: 77.6, y: 58.0 },
    callout: 108,
  },
]


/* The leader-line overlay spans 31% past each edge of the image, so the SVG
   viewBox is 162 wide with the image occupying 31→131. */
const PAD = 31
const LEFT_END = 26
const RIGHT_END = 136

export default function Technology() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id="technology"
      ref={ref}
      className="tech-wash relative isolate overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10">
        {/* --- header ---------------------------------------------------- */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="reveal font-display text-[clamp(2rem,3.5vw,3rem)] leading-[1.08] font-medium tracking-[-0.04em] text-balance text-ink"
            data-visible={inView}
            style={{ transitionDelay: '80ms' }}
          >
            Built into the paddle,
            <br className="hidden sm:block" /> not bolted onto it.
          </h2>
        </div>

        {/* --- annotated cutaway (lg and up) ----------------------------- */}
        <div
          className="reveal relative mx-auto mt-28 mb-36 hidden w-[62%] xl:block"
          data-visible={inView}
          style={{ transitionDelay: '240ms' }}
        >
          <img
            src={paddle}
            alt="Cutaway of the PaddlePal paddle showing the vinyl face, FSR sensor grid, honeycomb core, sensor PCB, vibration motor, handle housing and onboard microcontroller"
            width={2445}
            height={764}
            className="w-full"
          />

          {/* leader lines */}
          <svg
            viewBox="0 0 162 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="pointer-events-none absolute top-0 -left-[31%] h-full w-[162%] overflow-visible"
          >
            {parts.map((part) => {
              const { side, anchor, callout, title } = part
              const labelX = part.labelX ?? anchor.x
              const d =
                side === 'left'
                  ? `M${PAD + anchor.x} ${anchor.y} L${LEFT_END} ${callout}`
                  : side === 'right'
                    ? `M${PAD + anchor.x} ${anchor.y} L${RIGHT_END} ${callout}`
                    : `M${PAD + anchor.x} ${anchor.y} L${PAD + labelX} ${callout}`

              return (
                <path
                  key={title}
                  d={d}
                  fill="none"
                  className="stroke-ink/25"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
              )
            })}
          </svg>

          {/* anchor dots */}
          {parts.map(({ title, anchor }) => (
            <span
              key={title}
              aria-hidden="true"
              className="absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paddle ring-2 ring-white"
              style={{ left: `${anchor.x}%`, top: `${anchor.y}%` }}
            />
          ))}

          {/* callouts */}
          {parts.map((part) => {
            const { side, title, body, callout, anchor } = part
            if (side === 'bottom') {
              const labelX = part.labelX ?? anchor.x
              return (
                <div
                  key={title}
                  className="absolute w-[26%] -translate-x-1/2 text-center"
                  style={{ left: `${labelX}%`, top: `${callout + 4}%` }}
                >
                  <p className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
                    {title}
                  </p>
                  <p className="mt-1.5 text-[12px] leading-[1.6] text-ink-faint">
                    {body}
                  </p>
                </div>
              )
            }

            return (
              <div
                key={title}
                className={`absolute w-[26%] -translate-y-[11px] ${side === 'left'
                  ? 'right-full mr-[3%] text-right'
                  : 'left-full ml-[3%]'
                  }`}
                style={{ top: `${callout}%` }}
              >
                <p className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
                  {title}
                </p>
                <p className="mt-1.5 text-[12px] leading-[1.6] text-ink-faint">
                  {body}
                </p>
              </div>
            )
          })}
        </div>

        {/* --- stacked fallback (below lg) ------------------------------- */}
        <div className="xl:hidden">
          <div
            className="reveal -mx-6 mt-12 overflow-x-auto px-6 sm:-mx-10 sm:px-10"
            data-visible={inView}
            style={{ transitionDelay: '240ms' }}
          >
            <div className="relative w-[560px] max-w-none sm:w-full">
              <img
                src={paddle}
                alt="Cutaway of the PaddlePal paddle showing its internal layers"
                width={2445}
                height={764}
                className="w-full"
              />
              {parts.map(({ title, anchor }) => (
                <span
                  key={title}
                  aria-hidden="true"
                  className="absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paddle ring-2 ring-white"
                  style={{ left: `${anchor.x}%`, top: `${anchor.y}%` }}
                />
              ))}
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {parts.map(({ title, body }, i) => (
              <div
                key={title}
                className="reveal"
                data-visible={inView}
                style={{ transitionDelay: `${300 + i * 50}ms` }}
              >
                <dt className="font-display text-[15px] font-semibold tracking-[-0.02em] text-ink">
                  {title}
                </dt>
                <dd className="mt-1.5 text-[12.5px] leading-[1.65] text-ink-faint">
                  {body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}


