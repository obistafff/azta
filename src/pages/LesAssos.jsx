import { Link } from 'react-router'
import './LesAssos.css'

export default function LesAssos() {
  return (
    <>
      <section className="page-intro">
        <div className="conteneur">
          <h1>Les Associations</h1>
          <p className="chapeau">
            Deux associations, deux rives, une même envie : faire vivre la
            culture et tisser des liens entre le Maroc et la France.
          </p>
        </div>
      </section>

      <section className="bande section-claire">
        <div className="conteneur bande-contenu">
          <p className="bande-surtitre">Agadir · Maroc</p>
          <h2>AMZarts</h2>
          <p>
            Créée en 2018 à Agadir, l'association AMZarts se consacre aux
            affaires culturelles et artistiques, en particulier au théâtre et
            à l'organisation de spectacles. Elle œuvre au développement
            culturel et artistique aux niveaux régional, national et
            international, au service de l'intérêt général.
          </p>
          <p>
            Ses projets visent à enraciner l'identité marocaine, à préserver
            et à faire revivre le patrimoine immatériel du pays.
          </p>
          <ul className="equipe">
            <li>
              <span className="equipe-nom">Mohamed Abaragh</span>
              <span className="equipe-role">Mise en scène, composition, chant</span>
            </li>
            <li>
              <span className="equipe-nom">Loubna Menane</span>
              <span className="equipe-role">Écriture, narration</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bande">
        <div className="conteneur bande-contenu">
          <p className="bande-surtitre">Limoges · France</p>
          <h2>MUMO</h2>
          <p>
            L'association MUMO fait vivre la culture dans sa région, avec une
            attention particulière à l'ouverture aux musiques du monde. Elle
            soutient le groupe Aniel, qui mêle la chanson française aux
            musiques du monde, à la musique classique et au jazz.
          </p>
          <p>
            Implanté à Limoges, le groupe a notamment participé au festival
            de jazz Éclats d'Émail en 2023.
          </p>
          <ul className="equipe">
            <li>
              <span className="equipe-nom">Anyel Curren</span>
              <span className="equipe-role">Voix, kora, composition</span>
            </li>
            <li>
              <span className="equipe-nom">Sophie Curren</span>
              <span className="equipe-role">Basse · présidente de MUMO</span>
            </li>
            <li>
              <span className="equipe-nom">Maëlle Bousquet</span>
              <span className="equipe-role">Clarinette</span>
            </li>
            <li>
              <span className="equipe-nom">Abdellah Qazdar</span>
              <span className="equipe-role">Batterie, arrangements</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bande bande-citation">
        <blockquote className="conteneur">
          <p>
            « Un mélange de savoir-faire, de talents, de sensibilités et de
            vécus. »
          </p>
        </blockquote>
      </section>

      <section className="bande section-claire">
        <div className="conteneur bande-contenu">
          <p className="bande-surtitre">Ensemble</p>
          <h2>Une création commune</h2>
          <p>
            AZTA est une production entièrement partagée entre AMZarts et
            MUMO : écriture, composition musicale, chant, musique et mise en
            scène. Une création née dans la bienveillance, la douceur et le
            respect des différences de chacun.
          </p>
          <div className="assos-action">
            <Link to="/le-spectacle" className="bouton">Découvrir le spectacle</Link>
          </div>
        </div>
      </section>
    </>
  )
}