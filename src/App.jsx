import { BrowserRouter } from "react-router-dom"

import { About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas,Education, Interests, Achievements,Coursework,Projects,Skills } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        {/* <Experience /> */}
        <Projects/>
        <Skills />
        <Tech />
        <Coursework/>
        <Achievements/>
        {/* <Works /> */}
        {/* <Feedbacks /> */}
        <Interests/>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
