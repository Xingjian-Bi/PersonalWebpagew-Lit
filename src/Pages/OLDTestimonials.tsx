import "./Testimonials.css";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <div className="testimonials-title">
        <h1>Testimonials</h1>
      </div>
      <div className="testimonials-sections">
        <section className="testimonials-section">
          <div className="testimonials-des">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspenmdisse varius eim in eros elementum tristique
            </p>
          </div>
          <div className="testimonials-info">
            <div className="testimonials-avatar">
              <img src="/assets/img/avatar-image-1.png" />
            </div>
            <div className="testimonials-people">
              <h3>Dianne Russel</h3>
              <p>Starbucks</p>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="testimonials-des">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspenmdisse varius eim in eros elementum tristique
            </p>
          </div>
          <div className="testimonials-info">
            <div className="testimonials-avatar">
              <img src="/assets/img/avatar-image-2.png" />
            </div>
            <div className="testimonials-people">
              <h3>Dianne Russel</h3>
              <p>Starbucks</p>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="testimonials-des">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspenmdisse varius eim in eros elementum tristique
            </p>
          </div>
          <div className="testimonials-info">
            <div className="testimonials-avatar">
              <img src="/assets/img/avatar-image.png" />
            </div>
            <div className="testimonials-people">
              <h3>Dianne Russel</h3>
              <p>Starbucks</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
