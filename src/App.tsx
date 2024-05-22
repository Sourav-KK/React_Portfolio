import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Real_Skills from "./Components/Real_Skills";
import About from "./Components/About";
// import Contact from "./Components/Contact";
import Collapse from "./Components/Collapse";
import Cards from "./Components/Cards";

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
      {/* <Contact /> */}
      <Collapse/>
      <Testimonial />
      <Cards/>
      <Footer />
    </div>
  );
}

export default App;
