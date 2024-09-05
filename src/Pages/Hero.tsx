import "./Hero.css";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <div
      className="hero"
      id="hero"
    >
      <div className="hero-content">
        <div className="hero-text">
          <p>
            <h1>Hey, I'm Harry</h1>
          </p>
          <h2>
            Full Stack Developer
          </h2>
          <p>
            I'm a programmer, runner, and gamer.
          </p>
        </div>
        <div className="btn-getInTouch">
          <button>
            <Link
              type="button"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={500}
            >
              Get In Touch
            </Link>
          </button>
        </div>
      </div>
      <div className="hero-pic">
        <img src="/assets/img/hero_img.png" />
      </div>
    </div>
  );
}
