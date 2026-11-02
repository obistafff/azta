import './LeSpectacle.css'

export default function LeSpectacle() {
  return (
    <>
            <section className="page-intro">
        <div className="conteneur">
          <h1>Le Spectacle</h1>
          <p className="chapeau">
            AZTA « tissage de rêves » est un spectacle musical qui entrelace
            le chant, la musique, la narration et la danse. Une création
            franco-marocaine qui porte des récits de femmes, de leurs petits
            rêves à leurs grandes pensées.
          </p>
        </div>
      </section>

      {/* Diaporama : prochaine étape */}

      <section className="bande section-claire">
        <div className="conteneur bande-contenu">
          <p className="bande-surtitre">Genèse</p>
          <h2>Une rencontre entre Agadir et Limoges</h2>
          <p>
            Tout commence en 2025. Mohamed Abaragh, comédien, metteur en scène
            et professeur de théâtre à Agadir, découvre le groupe Aniel grâce à
            son batteur, Abdellah Qazdar. Il y retrouve des thèmes et une
            sensibilité proches de son propre travail et de celui de l'autrice
            Loubna Menane.
          </p>
          <p>
            De là naît une collaboration entre le collectif AMZarts, basé à
            Agadir, et le groupe Aniel, soutenu par l'association MUMO à
            Limoges. AZTA est entièrement porté par ces deux associations :
            écriture, composition, chant, musique et mise en scène.
          </p>
        </div>
      </section>

      <section className="bande">
        <div className="conteneur bande-contenu">
          <p className="bande-surtitre">Sur scène</p>
          <h2>Un spectacle, plusieurs langages</h2>
          <p>
            La voix de Loubna Menane raconte, inspirée de l'art de la halqa,
            ce cercle de conteurs qui anime les places du Maroc. Les chants,
            en arabe, en amazigh et en français, se mêlent à une musique qui
            puise dans la chanson française, les traditions marocaines et
            amazighes, le jazz, la musique classique, le flamenco et la
            musique mandingue.
          </p>
          <p>
            Une alliance rare réunit la kora, harpe d'Afrique de l'Ouest, et
            la clarinette. Puis la danse vient couronner le spectacle : à son
            tour, le corps raconte.
          </p>
        </div>
      </section>

      <section className="bande bande-citation">
        <blockquote className="conteneur">
          <p>
            « Des cultures, des langues et des langages artistiques se mêlent
            au service de la beauté. »
          </p>
        </blockquote>
      </section>

      <section className="bande section-claire">
        <div className="conteneur bande-contenu">
          <p className="bande-surtitre">Le propos</p>
          <h2>Des récits de femmes</h2>
          <p>
            AZTA porte un message d'amour envers la féminité sacrée. Ses
            récits, intimes et uniques, parlent de rêves et d'espoir, de
            souffrance et de mort, de foi et de lumière. Ils interrogent le
            lien entre tradition et modernité, à travers la spiritualité et
            la morale.
          </p>
          <p>
            Voix chantées, voix parlées, à l'unisson ou en contrepoint, elles
            s'élèvent sur la pulsation de la section rythmique et emmènent le
            public de l'intimité de la souffrance existentielle vers la joie
            et la lumière.
          </p>
        </div>
      </section>

      <section className="bande">
        <div className="conteneur bande-contenu">
          <p className="bande-surtitre">Le parcours</p>
          <h2>De la résidence à la scène</h2>
          <ol className="parcours">
            <li className="parcours-etape">
              <span className="parcours-date">Automne 2025</span>
              <span className="parcours-lieu">Institut français d'Agadir</span>
              <span className="parcours-detail">Première résidence de création</span>
            </li>
            <li className="parcours-etape">
              <span className="parcours-date">Mai 2026</span>
              <span className="parcours-lieu">Centre culturel Jean Gagnant, Limoges</span>
              <span className="parcours-detail">Résidence et sortie de résidence</span>
            </li>
            <li className="parcours-etape">
              <span className="parcours-date">Octobre 2026</span>
              <span className="parcours-lieu">Espace Noriac, Limoges</span>
              <span className="parcours-detail">Résidence et deux représentations</span>
            </li>
          </ol>
        </div>
      </section>
    </>
  )
}