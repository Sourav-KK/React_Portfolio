import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Real_Skills from "./Components/Real_Skills";
import About from "./Components/About";

function App() {
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 scrollbar-none">
        <Nav />
        <Hero />
      </div>
      <About />
      {/* <Skills /> */}

      <Real_Skills />
      <Projects />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
