import { useEffect, useState } from 'react'
import './Diaporama.css'

export default function Diaporama({ photos, intervalle = 5000 }) {
  const [index, setIndex] = useState(0)
  const [enPause, setEnPause] = useState(false)
  const total = photos.length

  const suivante = () => setIndex((i) => (i + 1) % total)
  const precedente = () => setIndex((i) => (i - 1 + total) % total)

  useEffect(() => {
    const mouvementReduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (enPause || mouvementReduit) return

    const minuteur = setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, intervalle)

    return () => clearInterval(minuteur)
  }, [enPause, intervalle, index, total])

  return (
    <div
      className="diaporama"
      onMouseEnter={() => setEnPause(true)}
      onMouseLeave={() => setEnPause(false)}
      onFocus={() => setEnPause(true)}
      onBlur={() => setEnPause(false)}
      aria-roledescription="carrousel"
      aria-label="Photos du spectacle"
    >
      <div className="diaporama-cadre">
        {photos.map((photo, i) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className={i === index ? 'diaporama-image active' : 'diaporama-image'}
            aria-hidden={i !== index}
          />
        ))}

        <button
          className="diaporama-fleche diaporama-precedente"
          onClick={precedente}
          aria-label="Photo précédente"
        >
          ‹
        </button>
        <button
          className="diaporama-fleche diaporama-suivante"
          onClick={suivante}
          aria-label="Photo suivante"
        >
          ›
        </button>
      </div>

      <div className="diaporama-points">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            className={i === index ? 'diaporama-point active' : 'diaporama-point'}
            onClick={() => setIndex(i)}
            aria-label={`Photo ${i + 1} sur ${total}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  )
}