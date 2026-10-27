import { Link } from 'react-router'
import './Accueil.css'

function Accueil() {
  return (
    <section className="accueil-hero">
      <div className="conteneur">
        <h1>AZTA</h1>
        <p className="accueil-sous-titre">Tissage de rêves</p>
        <p className="accueil-accroche">
          Un spectacle franco-marocain entre chant, musique et danse.
        </p>
        <div className="accueil-boutons">
          <Link to="/le-spectacle" className="bouton">Découvrir le spectacle</Link>
          <Link to="/contact" className="bouton bouton-secondaire">Programmer le spectacle</Link>
        </div>
      </div>
    </section>
  )
}

export default Accueil