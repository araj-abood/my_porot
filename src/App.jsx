import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./layout/Section";

function App() {
  return (
    <>
      <Section>
        <Navbar />
        <Hero />
      </Section>
    </>
  );
}

export default App;
