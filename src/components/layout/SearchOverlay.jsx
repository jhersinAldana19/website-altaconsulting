import { useEffect, useRef, useState } from 'react'
import { Button } from 'primereact/button'

function SearchOverlay({ isOpen, onClose, onSearch }) {
  const [term, setTerm] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      setTerm('')
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    inputRef.current?.focus()

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(term)
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center bg-black/80 px-4 pt-20 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Buscar recursos"
    >
      <Button
        type="button"
        icon="pi pi-times"
        text
        rounded
        severity="contrast"
        className="!absolute right-5 top-5 !text-white/80 hover:!text-white"
        onClick={onClose}
        aria-label="Cerrar buscador"
      />

      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        <p className="mb-3 text-center text-sm text-white/85">
          Busca por tema, expositor o categoria.
        </p>
        <label className="relative block">
          <input
            ref={inputRef}
            type="search"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder="Ej.: planeamiento estrategico, Gneomar Natzmar, Outsourcing Financiero"
            className="w-full rounded-xl border border-accent/70 bg-slate-900/85 py-3 pl-4 pr-12 text-base text-white outline-none transition placeholder:text-white/60 focus:border-accent"
          />
          <Button
            type="submit"
            icon="pi pi-search"
            text
            rounded
            severity="contrast"
            className="!absolute right-1 top-1/2 -translate-y-1/2 !text-white/80 hover:!text-white"
            aria-label="Buscar"
          />
        </label>
        <p className="mt-2 text-center text-xs text-white/70">Pulse ESC para cerrar</p>
      </form>
    </div>
  )
}

export default SearchOverlay
