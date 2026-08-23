import { site } from "../data/site"

export function Footer() {
  return (
    <footer className="bg-cream px-5 pt-20 pb-10 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 border-b border-ink/10 pb-14 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <h2 className="max-w-xl text-4xl font-bold tracking-tight md:text-6xl">
            Let&apos;s make something amazing together.
          </h2>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex items-center gap-2 text-lg text-coral"
          >
            Start by saying hi
            <span aria-hidden>↘</span>
          </a>
        </div>
        <div className="grid gap-8 text-sm sm:grid-cols-2">
          <div>
            <p className="font-bold">Information</p>
            <a href={`mailto:${site.email}`} className="mt-3 block text-muted hover:text-ink">
              {site.email}
            </a>
            <p className="mt-2 text-muted">{site.location}</p>
          </div>
          <div>
            <p className="font-bold">Socials</p>
            <a href={site.github} className="mt-3 block text-muted hover:text-ink">
              GitHub
            </a>
            {/* <a href={site.linkedin} className="mt-2 block text-muted hover:text-ink">
              LinkedIn
            </a> */}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between pt-8 text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a href="#top" className="text-ink hover:text-teal">
          Back to top
        </a>
      </div>
    </footer>
  )
}
