import Reveal from './Reveal'

function SectionHeading({ title, description, eyebrow, center = false, as: HeadingTag = 'h2', id: headingId }) {
  const alignment = center ? 'text-center mx-auto' : 'text-left'

  return (
    <Reveal className={`mb-10 max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      )}
      <HeadingTag
        {...(headingId ? { id: headingId } : {})}
        className="type-section-title"
      >
        {title}
      </HeadingTag>
      {description && <p className="mt-4 text-lg leading-relaxed text-slate-700">{description}</p>}
    </Reveal>
  )
}

export default SectionHeading
