import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div
      className="portfolio"
      id="portfolio"
    >
      <div className="portfolio-title">
        <h1>My Portfolio</h1>
        <div className="portfolio-link">
          <button className="btn-github">Visit My Github</button>
        </div>
      </div>
      <div className="portfolio-sections">
        <section className="portfolio-section">
          <div className="portfolio-img">
            <img src="/assets/img/placeholder-image.png" />
          </div>
          <div className="portfolio-text">
            <h2>Ahuse</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspenmdisse varius eim in eros elementum tristique
            </p>
          </div>
          <div className="portfolio-link">
            <button>View In Github</button>
          </div>
        </section>
        <section className="portfolio-section">
          <div className="portfolio-img">
            <img src="/assets/img/placeholder-image-1.png" />
          </div>
          <div className="portfolio-text">
            <h2>App Dashboard</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspenmdisse varius eim in eros elementum tristique
            </p>
          </div>
          <div className="portfolio-link">
            <button>View In Github</button>
          </div>
        </section>
        <section className="portfolio-section">
          <div className="portfolio-img">
            <img src="/assets/img/placeholder-image-2.png" />
          </div>
          <div className="portfolio-text">
            <h2>Easy Rentn</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspenmdisse varius eim in eros elementum tristique
            </p>
          </div>
          <div className="portfolio-link">
            <button className="githubBtn">View In Github</button>
          </div>
        </section>
      </div>
    </div>
  );
}
