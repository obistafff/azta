import { Link } from 'react-router'
import heroImage from '../assets/images/azta-concert-jean-gagnant.jpg'
import './Accueil.css'

export default function Accueil() {
  return (
    <section className="hero">
      <img
        className="hero-image"
        src={heroImage}
        alt="Les artistes d'AZTA en concert au centre culturel Jean Gagnant à Limoges"
      />
      <div className="hero-voile"></div>

      <div className="hero-contenu">
        <h1 className="hero-titre">AZTA</h1>
        <p className="hero-sous-titre">« Tissage de Rêves »</p>
        <p className="hero-accroche">
          Des histoires et des chansons dédiées à la femme, qui se tissent
          de ses petits rêves et de ses grandes pensées.
        </p>
        <div className="hero-boutons">
          <Link to="/le-spectacle" className="bouton">Découvrir le spectacle</Link>
          <Link to="/contact" className="bouton bouton-secondaire">Programmer AZTA</Link>
        </div>
      </div>
    </section>
  )
}