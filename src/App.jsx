import { Routes, Route } from 'react-router'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Accueil from './pages/Accueil.jsx'
import LeSpectacle from './pages/LeSpectacle.jsx'
import LesAssos from './pages/LesAssos.jsx'
import Artistes from './pages/Artistes.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/le-spectacle" element={<LeSpectacle />} />
          <Route path="/les-assos" element={<LesAssos />} />
          <Route path="/artistes" element={<Artistes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App