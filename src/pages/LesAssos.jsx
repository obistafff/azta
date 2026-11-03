import { Link } from 'react-router'
import logoMumo from '../assets/images/logos/logo-mumo.jpg'
import logoAmzarts from '../assets/images/logos/logo-amzarts.png'
import photoLoubnaMohamed from '../assets/images/spectacle/azta-noriac-loubnamohamed.jpg'
import photoAniel from '../assets/images/assos/aniel-groupe.jpeg'
import photoLoubnaSophie from '../assets/images/spectacle/azta-noriac-loubnasophie.jpg'
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
          <img className="asso-logo" src={logoAmzarts} alt="Logo de l'association AMZarts" />
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
          <figure className="photo-legende">
            <img
              className="photo-bande"
              src={photoLoubnaMohamed}
              alt="Loubna Menane et Mohamed Abaragh sur scène"
            />
            <figcaption>Loubna Menane et Mohamed Abaragh</figcaption>
          </figure>
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
          <img className="asso-logo" src={logoMumo} alt="Logo de l'association MUMO" />
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
          <figure className="photo-legende">
            <img
              className="photo-bande"
              src={photoAniel}
              alt="Le groupe Aniel avec ses instruments : kora, basse, clarinette et caisse claire"
            />
            <figcaption>Le groupe Aniel : Anyel, Sophie, Maëlle et Abdellah</figcaption>
          </figure>
          <ul className="equipe">
            <li>
              <span className="equipe-nom">Anyel Curren</span>
              <span className="equipe-role">Voix, kora, composition</span>
            </li>
            <li>
              <span className="equipe-nom">Sophie Curren</span>
              <span className="equipe-role">Basse</span>
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
          <figure className="photo-legende">
            <img
              className="photo-bande"
              src={photoLoubnaSophie}
              alt="Loubna Menane et Sophie Curren sur scène"
            />
            <figcaption>Loubna Menane et Sophie Curren</figcaption>
          </figure>
          <div className="assos-action">
            <Link to="/le-spectacle" className="bouton">Découvrir le spectacle</Link>
          </div>
        </div>
      </section>
    </>
  )
}