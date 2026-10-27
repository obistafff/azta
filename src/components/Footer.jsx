import './Footer.css'

function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>© {annee} AZTA, tissage de rêves</p>
      <p>Un projet des associations AM et AMZarts</p>
    </footer>
  )
}

export default Footer