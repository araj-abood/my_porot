import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./layout/Section";
import "./App.css";
import Wave from "react-wavify";
import Skills from "./components/skills/components";
import ProjectsSection from "./components/projects-section";

function App() {
  return (
    <main>
      <Section>
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <ProjectsSection />
      </Section>
      <Wave
        fill="rgba(12, 7, 171, 0.5)"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 10,
          amplitude: 10,
          speed: 1,
          points: 3,
        }}
      />
    </main>
  );
}

export default App;
