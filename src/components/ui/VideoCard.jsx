function VideoCard({ title, description, youtubeId, tag }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="space-y-2 p-5">
        {tag && (
          <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-primary">
            {tag}
          </span>
        )}
        <h3 className="text-lg font-normal text-heading">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </article>
  )
}

export default VideoCard
