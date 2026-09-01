import macbook from '../assets/macbook-mockup.webp'
import { useInView } from '../hooks/useInView'

// Accepts a bare ID or a full youtube.com/youtu.be URL (watch, share, or
// embed form) so pasting a link here instead of just the ID still works.
function toYoutubeId(value: string) {
  const match = value.match(
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/,
  )
  return match ? match[1] : value
}

const YOUTUBE_ID = toYoutubeId('https://www.youtube.com/watch?v=qh77E1rmkzI')

export default function Demo() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id="demo"
      ref={ref}
      className="demo-wash relative isolate overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-10">
        <h2
          className="reveal text-center font-display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-ink"
          data-visible={inView}
        >
          See PaddlePal in action
        </h2>
        {/* --- mockup ------------------------------------------------------ */}
        <div
          className="reveal relative mx-auto mt-14 w-full max-w-[860px] lg:mt-16"
          data-visible={inView}
          style={{ transitionDelay: '140ms' }}
        >
          {/* percentages below are measured against macbook-mockup.webp's own
              cut-out screen, so this stays aligned at any width */}
          <div className="relative w-full aspect-[3220/1956]">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}`}
              title="PaddlePal demo video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute rounded-[2px]"
              style={{
                left: '10.31%',
                top: '3.89%',
                width: '79.26%',
                height: '84.66%',
              }}
            />
            <img
              src={macbook}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full select-none"
            />
          </div>
        </div>

        <a
          href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}`}
          target="_blank"
          rel="noreferrer"
          className="reveal group mx-auto mt-8 flex w-fit items-center gap-1.5 text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
          data-visible={inView}
          style={{ transitionDelay: '200ms' }}
        >
          Watch on YouTube
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
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
      </div>
    </section>
  )
}
