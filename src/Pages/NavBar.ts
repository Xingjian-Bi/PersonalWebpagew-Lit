import { LitElement, html, css } from "lit";

class NavBar extends LitElement {
  static styles = css`
    .nav {
      display: flex;
      padding: 1rem;
      align-items: center;
      justify-content: space-around;
      position: fixed;
      top: 0;
      width: 100%;
      background-color: rgb(152, 193, 233);
    }

    .navItems {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      gap: 1rem;
    }

    li {
      cursor: pointer;
    }

    .nav li:hover {
      text-decoration: underline;
      text-decoration-color: rgb(154, 154, 238);
      text-underline-offset: 5px;
      text-decoration-thickness: 2px;
    }

    .nav-item .active {
      text-decoration: underline;
      text-decoration-color: rgb(111, 111, 238);
      text-underline-offset: 5px;
      text-decoration-thickness: 2px;
    }

    .contact-btn {
      width: 110px;
      height: 50px;
      border-radius: 6px;
      background-color: azure;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
    }

    .logo {
      cursor: pointer;
    }

    @media (max-width: 932px) {
      .nav {
        display: flex;
        flex-direction: column;
        padding: 0.3rem;
        align-items: center;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        top: 0;
        width: 100%;
        background-color: rgb(152, 193, 233);
        font-size: 0.8rem;
      }

      .contact-btn {
        display: none;
      }

      .logo {
        width: 80px;
      }
    }
  `;

  render() {
    return html`
      <nav class="nav">
        <div>
          <a href="#hero">
            <img class="logo" src="/assets/img/logo.svg" alt="Logo" />
          </a>
        </div>
        <ul class="navItems">
          <li class="nav-item">
            <a href="hero">Home</a>
          </li>
          <li class="nav-item">
            <a href="portfolio"}">Portfolio</a>
          </li>
          <li class="nav-item">
            <a href="aboutMe" }">About Me</a>
          </li>
          <li class="nav-item">
            <a href="testimonials""
              >Testimonials</a
            >
          </li>
        </ul>
        <div class="contactMe">
          <button class="contact-btn">
            <a href="#contact" ">Contact Me</a>
          </button>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);
