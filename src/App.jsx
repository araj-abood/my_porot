import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./layout/Section";
import "./App.css";

function App() {
  return (
    <>
      {" "}
      <Section>
        <Navbar />
        <Hero />
        <AboutMe />
      </Section>
    </>
  );
}

export default App;
