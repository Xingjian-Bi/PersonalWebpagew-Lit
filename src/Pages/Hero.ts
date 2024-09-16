import { LitElement, html, css } from "lit";

class Hero extends LitElement {
  static styles = css`
    .hero {
      display: flex;
      background-color: azure;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      font-family: Arial, Helvetica, sans-serif;
      margin-top: 2rem;
    }

    .hero h1 {
      font-size: 4rem;
    }

    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem, 1rem;
      margin: 2rem;
    }

    .hero-text {
      text-align: left;
    }

    .btn-getInTouch button {
      background-color: azure;
      width: 120px;
      height: 40px;
      border-radius: 5px;
      color: black;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1rem;
      margin-top: 1rem;
    }

    @media (max-width: 932px) {
      .hero {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      .hero img {
        width: 80%;
      }
      .hero h1 {
        font-size: 3rem;
      }
    }
  `;

  render() {
    return html`
      <div class="hero" id="hero">
        <div class="hero-content">
          <div class="hero-text">
            <h1>Hey, I'm Harry</h1>
            <h2>Full Stack Developer</h2>
            <p>I'm a programmer, runner, and gamer.</p>
          </div>
          <div class="btn-getInTouch">
            <button>Get In Touch</button>
          </div>
        </div>
        <div class="hero-pic">
          <img src="/assets/img/hero_img.png" alt="Hero Image" />
        </div>
      </div>
    `;
  }
}

customElements.define("hero-page", Hero);
