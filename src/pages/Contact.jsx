import './Contact.css'

export default function Contact() {
  return (
    <>
      <section className="page-intro">
        <div className="conteneur">
          <h1>Contact</h1>
          <p className="chapeau">
            Programmateurs, salles, festivals ou simples curieux :
            écrivez-nous, nous serons heureux d'échanger avec vous.
          </p>
        </div>
      </section>

      <section className="bande section-claire">
        <div className="conteneur bande-contenu">
          <p className="bande-surtitre">Nous écrire</p>
          <h2>Une question, une envie ?</h2>
          <a className="contact-email" href="mailto:aztaprojet@gmail.com">
            aztaprojet@gmail.com
          </a>
          <div className="contact-action">
            <a className="bouton" href="mailto:aztaprojet@gmail.com">
              Écrire un e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="bande">
        <div className="conteneur bande-contenu">
          <p className="bande-surtitre">Nous suivre</p>
          <h2>AZTA en ligne</h2>

          

          {/* Les liens, en dessous */}
          <ul className="reseaux">
            <li>
              <a href="https://www.youtube.com/@Aztaprojet" target="_blank" rel="noopener noreferrer">
                YouTube AZTA
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@aniel6054" target="_blank" rel="noopener noreferrer">
                YouTube Aniel
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=pU2vYzcZTUg" target="_blank" rel="noopener noreferrer">
                Vidéo de résidence
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61589478367770" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="bande section-claire">
        <div className="conteneur bande-contenu">
          <h2>Fiche technique</h2>
          <p>
            AZTA est un spectacle musical mêlant musique, théâtre et danse,
            porté par neuf artistes sur scène. Toutes les informations
            utiles à l'accueil du spectacle sont réunies dans la fiche
            technique.
          </p>

          <ul className="documents">
            <li className="document">
              <span className="document-type">PDF · 7 pages</span>
              <span className="document-detail">
                Matériel, plan de scène, patch-list
              </span>
              <a
                className="bouton bouton-secondaire"
                href={`${import.meta.env.BASE_URL}documents/fiche-technique-azta.pdf`}
                download
              >
                Télécharger
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}