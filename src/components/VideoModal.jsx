import { useEffect } from "react"
import { motion } from "framer-motion"

export function toEmbedUrl(url) {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{6,})/)
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1`
  return null
}

// Shared cinematic video player — used by the hero intro and testimonials.
export default function VideoModal({ title, subtitle, videoUrl, onClose }) {
  const embed = videoUrl ? toEmbedUrl(videoUrl) : null

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-surface"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <p className="font-display text-sm font-medium">
            {title} {subtitle && <span className="text-muted">— {subtitle}</span>}
          </p>
          <button onClick={onClose} className="text-2xl leading-none text-muted hover:text-cream" aria-label="Close">
            ×
          </button>
        </div>
        <div className="aspect-video bg-ink">
          {embed ? (
            <iframe
              src={embed}
              title={title}
              className="h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : videoUrl ? (
            <video src={videoUrl} controls autoPlay className="h-full w-full" />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-8 text-center">
              <span className="text-4xl">🎬</span>
              <p className="text-muted">
                Video coming soon — add the video URL in{" "}
                <code className="rounded bg-ink px-2 py-0.5 text-accent">src/data/testimonials.js</code>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
