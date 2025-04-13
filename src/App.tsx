import { ContractSection } from "./components/ContractSection"
import { IntroSection } from "./components/IntroSection"
import { Navbar } from "./components/Navbar"
import { ProjectSection } from "./components/ProjectSection"

function App() {
  return (
    <main className="min-h-screen font-sans font-body"> 
      <Navbar />
      <IntroSection />
      <ProjectSection />
      <ContractSection />
    </main>
  )
}

export default App

