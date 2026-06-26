import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Challenges from './components/Challenges'
import Services from './components/Services'
import LogicBiPromo from './components/LogicBiPromo'
import Methodology from './components/Methodology'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import LogicBiPopup from './components/LogicBiPopup'
import LogicBiPage from './pages/LogicBiPage'
import ScrollToTop from './components/ScrollToTop'

function MainSite() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Challenges />
        <Services />
        <LogicBiPromo />
        <Methodology />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <LogicBiPopup />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/logicbi" element={<LogicBiPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
