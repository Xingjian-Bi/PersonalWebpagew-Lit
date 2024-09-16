import "./MySkills.css";

export default function MySkills() {
  return (
    <div
      className="my-skills"
      id="mySkills"
    >
      <div className="title">
        <h1>My Skills</h1>
      </div>
      <div className="skills-sections">
        <section className="skill-section">
          <div className="skill-item">
            <img
              src="/assets/img/product-chain-1.png"
              alt="front-end pic"
            />
          </div>
          <div className="skill-item">
            <h2>Front-End</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspenmdisse varius eim in eros elementum tristique
            </p>
          </div>
        </section>
        <section className="skill-section">
          <div className="skill-item">
            <img
              src="/assets/img/tag-1.png"
              alt="back-end pic"
            />
          </div>
          <div className="skill-item">
            <h2>Back-End</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspenmdisse varius eim in eros elementum tristique
            </p>
          </div>
        </section>
        <section className="skill-section">
          <div className="skill-item">
            <img
              src="/assets/img/feather-pen-2.png"
              alt="ux-ui design pic"
            />
          </div>
          <div className="skill-item">
            <h2>UI & UX Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspenmdisse varius eim in eros elementum tristique
            </p>
          </div>
        </section>
        <section className="skill-section">
          <div className="skill-item">
            <img
              src="/assets/img/feather-pen-1.png"
              alt="webflow pic"
            />
          </div>
          <div className="skill-item">
            <h2>Webflow Development</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspenmdisse varius eim in eros elementum tristique
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
