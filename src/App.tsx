import { ContractSection } from "./components/ContractSection"
import { IntroSection } from "./components/IntroSection"
import { Navbar } from "./components/Navbar"
import { ProjectSection } from "./components/ProjectSection"

function App() {
  return (
    <main className="min-h-screen font-sans bg-white text-gray-800">
      <Navbar />
      <IntroSection />
      <ProjectSection />
      <ContractSection />
    </main>
  )
}

export default App

