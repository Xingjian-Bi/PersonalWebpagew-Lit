import { LitElement, html, css } from "lit";

class MySkills extends LitElement {
  static styles = css`
    .my-skills {
      display: flex;
      flex-direction: column;
      justify-content: left;
      font-family: Arial, Helvetica, sans-serif;
      margin-top: 3rem;
      margin-left: 2rem;
      margin-right: 2rem;
    }
    .title h1 {
      font-size: 3rem;
    }
    .title {
      text-align: left;
    }
    .skills-sections {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }

    .skill-section {
      display: flex;
      flex-direction: column;
      background-color: azure;
      border-radius: 5px;
      gap: 2rem;
      padding: 1rem;
    }
    .skill-item {
      float: left;
      text-align: left;
    }
    .skill-item h2 {
      font-size: 2rem;
    }

    .skill-item p {
      font-size: 1rem;
      text-overflow: wrap;
    }

    @media (max-width: 932px) {
      .my-skills {
        width: 100%;
        align-items: center;
        justify-content: center;
        margin-left: 0;
        margin-right: 0;
      }
      .skills-sections {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .skill-item img {
        width: 60px;
      }
      .skill-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: azure;
        border-radius: 5px;
        gap: 2rem;
        padding: 1rem;
      }
      .title h1 {
        font-size: 2rem;
      }
      .skill-item h2 {
        font-size: 1.5rem;
      }
    }
  `;

  render() {
    return html`
      <div class="my-skills" id="mySkills">
        <div class="title">
          <h1>My Skills</h1>
        </div>
        <div class="skills-sections">
          <section class="skill-section">
            <div class="skill-item">
              <img src="/assets/img/product-chain-1.png" alt="Front-End pic" />
            </div>
            <div class="skill-item">
              <h2>Front-End</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspenmdisse varius eim in eros elementum tristique.
              </p>
            </div>
          </section>
          <section class="skill-section">
            <div class="skill-item">
              <img src="/assets/img/tag-1.png" alt="Back-End pic" />
            </div>
            <div class="skill-item">
              <h2>Back-End</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspenmdisse varius eim in eros elementum tristique.
              </p>
            </div>
          </section>
          <section class="skill-section">
            <div class="skill-item">
              <img
                src="/assets/img/feather-pen-2.png"
                alt="UI & UX Design pic"
              />
            </div>
            <div class="skill-item">
              <h2>UI & UX Design</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspenmdisse varius eim in eros elementum tristique.
              </p>
            </div>
          </section>
          <section class="skill-section">
            <div class="skill-item">
              <img
                src="/assets/img/feather-pen-1.png"
                alt="Webflow Development pic"
              />
            </div>
            <div class="skill-item">
              <h2>Webflow Development</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspenmdisse varius eim in eros elementum tristique.
              </p>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

customElements.define("my-skills", MySkills);
