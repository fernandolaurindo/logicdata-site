import Header from './components/Header'
import Hero from './components/Hero'
import Challenges from './components/Challenges'
import Services from './components/Services'
import Methodology from './components/Methodology'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Challenges />
        <Services />
        <Methodology />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App
