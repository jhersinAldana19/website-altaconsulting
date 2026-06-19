import { Button } from 'primereact/button'

function TestimonialCard({ testimonial }) {
  const { name, role, quote, image, videoUrl } = testimonial

  return (
    <article className="group flex flex-col overflow-hidden bg-white shadow-soft transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
      <div className="px-6 pb-5 pt-6 sm:px-7 sm:pt-7">
        <span
          className="font-heading text-4xl leading-none text-accent sm:text-[2.75rem]"
          aria-hidden
        >
          &ldquo;
        </span>
        <blockquote className="mt-2">
          <p className="text-[0.98rem] leading-7 text-slate-700 sm:text-base">{quote}</p>
        </blockquote>
      </div>

      <footer className="mt-auto flex items-center gap-3.5 border-t border-slate-100 px-6 py-4 sm:gap-4 sm:px-7 sm:py-4">
        <img
          src={image}
          alt={name}
          width={48}
          height={48}
          loading="lazy"
          className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-white shadow-sm"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-semibold text-heading">{name}</p>
          <p className="mt-0.5 text-sm font-medium leading-snug text-slate-500">{role}</p>
        </div>
        {videoUrl ? (
          <Button
            icon="pi pi-play"
            rounded
            text
            severity="info"
            aria-label={`Ver testimonio de ${name}`}
            onClick={() => window.open(videoUrl, '_blank', 'noopener,noreferrer')}
            className="ml-auto shrink-0"
          />
        ) : null}
      </footer>
    </article>
  )
}

export default TestimonialCard
