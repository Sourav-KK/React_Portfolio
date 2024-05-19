import Hero from "./Components/Hero";
// import Main from "./Components/Main";
import Nav from "./Components/Nav";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Real_Skills from "./Components/Real_Skills";

function App() {
  return (
    <div className="bg-indigo-600 ">
      <Nav />
      <Hero />
      {/* <Main /> */}
      <Skills />

      <Real_Skills />
      <Projects />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
