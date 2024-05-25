import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Testimonial from "./Components/Testimonials/Testimonial";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Real_Skills from "./Components/Real_Skills";
import About from "./Components/About";
// import Contact from "./Components/Contact";
import Accordion from "./Components/Accordion";

function App() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-cyan-600 via-teal-400 to-indigo-700 scrollbar-none">
        <Nav />
        <Hero />
      </div>
      <About />
      {/* <Skills /> */}

      <Real_Skills />
      <Projects />
      <Testimonial />
      <Accordion />

      <Footer />
    </div>
  );
}

export default App;
