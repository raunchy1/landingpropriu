import ScrollReveal from './ScrollReveal'

const projects = [
  {
    name: 'cannigione experience',
    location: 'cannigione, sardegna',
    desc: 'sito trilingue per noleggio barca con calendario prenotazioni integrato.',
    tag: 'charter & esperienze',
    url: 'https://cannigionexperience.com',
    img: '/img/projects/screenshot-cannigione.webp',
  },
  {
    name: 'la suite n4',
    location: 'alghero, sardegna',
    desc: 'sito elegante per b&b di lusso con prenotazione diretta e galleria immersiva.',
    tag: 'b&b di lusso',
    url: 'https://bb-alghero.vercel.app',
    img: '/img/projects/screenshot-sanpaolo.webp',
  },
  {
    name: 'san paolo hideout',
    location: 'roma',
    desc: 'sito completo per casa vacanze con design pulito e contatti diretti.',
    tag: 'casa vacanze',
    url: 'https://sanpaolohideout.it',
    img: '/img/projects/screenshot-villa-almare.webp',
  },
]

export default function Projects() {
  return (
    <section
      id="progetti"
      className="py-[100px] md:py-[160px]"
      style={{ background: 'var(--bg)' }}
    >
      <div className="mx-auto max-w-[720px] px-6 md:px-8">
        <ScrollReveal>
          {/* eyebrow */}
          <p
            className="reveal-child mb-5 text-[11px]"
            style={{
              color: 'var(--muted)',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
            }}
          >
            // progetti reali, già online
          </p>

          {/* headline */}
          <h2
            className="reveal-child mb-14 font-bold leading-[1.15]"
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              letterSpacing: '-0.03em',
            }}
          >
            <span style={{ color: 'var(--fg)' }}>siti che funzionano.</span>
            <br />
            <span style={{ color: 'var(--muted)' }}>non demo.</span>
          </h2>
        </ScrollReveal>

        {/* project cards */}
        <div className="flex flex-col" style={{ gap: '16px' }}>
          {projects.map((project, i) => (
            <ScrollReveal key={i}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener"
                className="project-card reveal-child block overflow-hidden"
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: '12px',
                }}
              >
                {/* screenshot */}
                <img
                  src={project.img}
                  alt={project.name}
                  className="project-img w-full"
                  style={{
                    aspectRatio: '16 / 10',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                {/* content */}
                <div style={{ padding: '24px' }}>
                  {/* name + location */}
                  <div className="mb-2 flex flex-wrap items-baseline gap-3">
                    <h3
                      style={{
                        fontWeight: 600,
                        fontSize: '17px',
                        color: 'var(--fg)',
                        lineHeight: 1.4,
                      }}
                    >
                      {project.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--muted)',
                      }}
                    >
                      {project.location}
                    </span>
                  </div>

                  {/* description */}
                  <p
                    className="mb-4"
                    style={{
                      fontWeight: 400,
                      fontSize: '15px',
                      color: 'var(--muted)',
                      lineHeight: 1.7,
                    }}
                  >
                    {project.desc}
                  </p>

                  {/* bottom row: tag + link */}
                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'var(--dim)',
                      }}
                    >
                      {project.tag}
                    </span>
                    <span
                      className="transition-colors duration-300"
                      style={{
                        fontSize: '14px',
                        color: 'var(--muted)',
                      }}
                    >
                      visita il sito →
                    </span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
