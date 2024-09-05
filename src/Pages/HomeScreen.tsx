// import AboutMe from "./AboutMe";
import "./AboutMe.tsx"
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import MySkills from "./MySkills";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";

export default function HomeScreen() {
  return renderHome();
}

function renderHome() {
  return (
    <div className="home">
      <div>
        <NavBar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <MySkills />
      </div>
      <div id="aboutMe">
        <about-me />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
