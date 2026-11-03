import './Footer.css'

function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {annee} AZTA, tissage de rêves</p>
      <p>Un projet des associations MUMO et AMZarts</p>
      <p>Photos : Didier Radiguet</p>
    </footer>
  )
}

export default Footer