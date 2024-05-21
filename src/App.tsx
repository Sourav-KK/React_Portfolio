import Hero from "./Components/Hero";
// import Main from "./Components/Main";
import Nav from "./Components/Nav";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
// import Skills from "./Components/Skills";
import Real_Skills from "./Components/Real_Skills";
import Skill_Scroll from "./Components/Skill_Scroll";
import About from "./Components/About";

function App() {
  return (
    <div>
      <div className="bg-indigo-600 scrollbar-none">
        <Nav />
        <Hero />
      </div>
      <About />
      {/* <Main /> */}
      {/* <Skills /> */}

      <Real_Skills />
      <Projects />
      <Skill_Scroll />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
