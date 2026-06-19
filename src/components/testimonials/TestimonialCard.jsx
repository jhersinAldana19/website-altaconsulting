function TestimonialCard({ testimonial }) {
  const { name, role, quote, image, videoUrl } = testimonial

  return (
    <article className="group flex h-full min-h-0 flex-col overflow-hidden bg-white shadow-soft transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
      <div className="flex min-h-0 flex-[16] flex-col bg-white px-6 pb-7 pt-8 sm:px-7 sm:pb-8 sm:pt-9">
        <span
          className="font-heading text-[3.25rem] leading-none text-accent sm:text-6xl"
          aria-hidden
        >
          &ldquo;
        </span>
        <blockquote className="mt-3 flex-1">
          <p className="text-[1rem] leading-7 text-slate-700 sm:text-[1.02rem] max-w-[40ch]">{quote}</p>
        </blockquote>
        {/* video link moved to footer (see below) */}
      </div>

      <footer className="flex flex-[5] flex-shrink-0 items-center gap-3.5 bg-white px-6 py-4 sm:gap-4 sm:px-7 sm:py-5">
        <img
          src={image}
          alt={name}
          width={48}
          height={48}
          loading="lazy"
          className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white shadow-sm"
        />
        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-heading">{name}</p>
          <p className="mt-0.5 text-sm font-medium leading-snug text-slate-500">{role}</p>
        </div>
        {videoUrl ? (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full text-accent hover:bg-accent/10 focus:outline-none"
            aria-label={`Ver testimonio de ${name}`}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </a>
        ) : null}
      </footer>
    </article>
  )
}

export default TestimonialCard
