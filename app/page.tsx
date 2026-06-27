import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Background from "./components/Background";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Background />

<Navbar />

  <Hero />

  <section id="about">
    <About />
  </section>

  <section id="projects">
    <Projects />
  </section>

  <section id="experience">
    <Experience />
  </section>

  <section id="skills">
    <Skills />
  </section>


  <section id="contact">
  <Contact />
</section>

<Footer />

</main>
  );
}