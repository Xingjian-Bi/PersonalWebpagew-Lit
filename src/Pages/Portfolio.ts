import { LitElement, html, css } from "lit";

class PortfolioPage extends LitElement {
  static styles = css`
    .portfolio {
      display: flex;
      flex-direction: column;
      font-family: Arial, Helvetica, sans-serif;
      margin-top: 3rem;
    }
    .portfolio-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 2rem;
      margin-right: 2rem;
    }

    .portfolio-sections {
      display: flex;
      gap: 2rem;
      margin: 2rem;
    }

    .portfolio-section img {
      width: 200px;
    }

    .portfolio-section {
      display: flex;
      flex-direction: column;
      background-color: azure;
      padding: 1rem;
      text-align: left;
      gap: 2rem;
    }

    .portfolio-link button {
      width: 140px;
      height: 50px;
      background-color: azure;
      border-radius: 6px;
      cursor: pointer;
    }

    @media (max-width: 932px) {
      .portfolio {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
      }
      .portfolio-sections {
        display: flex;
        flex-direction: column;
        margin-left: 0;
        margin-right: 0;
      }
      .portfolio-sections img {
        width: 100%;
      }

      .portfolio-link button {
        width: 90px;
        height: 50px;
        background-color: azure;
        border-radius: 6px;
        cursor: pointer;
      }

      .portfolio-title {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
  `;

  render() {
    return html`
      <div class="portfolio" id="portfolio">
        <div class="portfolio-title">
          <h1>My Portfolio</h1>
          <div class="portfolio-link">
            <button class="btn-github">Visit My Github</button>
          </div>
        </div>
        <div class="portfolio-sections">
          <section class="portfolio-section">
            <div class="portfolio-img">
              <img
                src="/assets/img/placeholder-image.png"
                alt="Ahuse Project"
              />
            </div>
            <div class="portfolio-text">
              <h2>Ahuse</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspenmdisse varius eim in eros elementum tristique.
              </p>
            </div>
            <div class="portfolio-link">
              <button>View In Github</button>
            </div>
          </section>
          <section class="portfolio-section">
            <div class="portfolio-img">
              <img
                src="/assets/img/placeholder-image-1.png"
                alt="App Dashboard"
              />
            </div>
            <div class="portfolio-text">
              <h2>App Dashboard</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspenmdisse varius eim in eros elementum tristique.
              </p>
            </div>
            <div class="portfolio-link">
              <button>View In Github</button>
            </div>
          </section>
          <section class="portfolio-section">
            <div class="portfolio-img">
              <img
                src="/assets/img/placeholder-image-2.png"
                alt="Easy Rentn Project"
              />
            </div>
            <div class="portfolio-text">
              <h2>Easy Rentn</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspenmdisse varius eim in eros elementum tristique.
              </p>
            </div>
            <div class="portfolio-link">
              <button>View In Github</button>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

customElements.define("portfolio-page", PortfolioPage);
