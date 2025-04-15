
import { AboutMe } from "./components/AboutMe"
import { ContactSection } from "./components/ContactSection"
import { Footer } from "./components/Footer"
import { IntroSection } from "./components/IntroSection"
import { Navbar } from "./components/Navbar"
import { ProjectSection } from "./components/ProjectSection"

function App() {
  return (
    <main className="min-h-screen font-sans font-body"> 
      <Navbar />
      <IntroSection />
      <AboutMe />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App

