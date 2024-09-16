// import "./AboutMe.css";
import { LitElement, html, css } from "lit";

export default class AboutMe extends LitElement {
  static styles = css`
    .aboutMe {
      display: flex;
      padding: 2rem;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      background-color: azure;
      margin-top: 3rem;
    }

    .aboutMe-item {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
    .aboutMe-item h1 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 3rem;
    }

    .aboutMe-item p {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 1.5rem;
    }

    @media (max-width: 932px) {
      .aboutMe {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .aboutMe img {
        width: 80%;
      }
    }
  `;

  render() {
    return html`
      <div class="aboutMe">
        <div class="aboutMe-item">
          <img src="/assets/img/about-me.png" alt="About Me" />
        </div>
        <div class="aboutMe-item">
          <h1 class="title">About Me</h1>
          <p class="aboutMeContent">
            Hi! My name is Xingjian Bi and I’m starting my master degree in
            Computer Science at Northeastern University. I just graduated from
            Penn State with bachelor’s degree in computer science and minoring
            mathematics and Japanese. In the future, I’ll continue build my web
            development skills and strengthen my algorithms design and solving
            abilities.
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define("about-me", AboutMe);
