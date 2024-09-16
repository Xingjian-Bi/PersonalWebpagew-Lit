import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

interface Testimonial {
  name: string;
  company: string;
  avatar: string;
  description: string;
}

class TestimonialsPage extends LitElement {
  static styles = css`
    .testimonials {
      background-color: azure;
      margin: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: left;
      padding: 2rem;
    }

    .testimonials-sections {
      display: flex;
      gap: 2rem;
    }

    .testimonials-section {
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      text-align: left;
    }

    .testimonials-section img {
      width: 100px;
      height: 100px;
    }

    .testimonials-info {
      display: flex;
      gap: 2rem;
    }

    @media (max-width: 932px) {
      .testimonials {
        width: 100%;
        margin: 0;
      }
      .testimonials-sections {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  `;

  @property({ type: Array })
  testimonials: Testimonial[] = [];

  constructor() {
    super();

    this.testimonials = [
      {
        name: "Dianne Russel",
        company: "Starbucks",
        avatar: "/assets/img/avatar-image-1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "John Doe",
        company: "Google",
        avatar: "/assets/img/avatar-image-2.png",
        description: "Suspendisse varius enim in eros elementum tristique.",
      },
      {
        name: "Jane Smith",
        company: "Amazon",
        avatar: "/assets/img/avatar-image-3.png",
        description: "Ut pharetra sit amet aliquam id diam maecenas ultricies.",
      },
    ];
  }

  render() {
    return html`
      <div class="testimonials" id="testimonials">
        <div class="testimonials-title">
          <h1>Testimonials</h1>
        </div>
        <div class="testimonials-sections">
          ${this.testimonials.map(
            (testimonial) => html`
              <section class="testimonials-section">
                <div class="testimonials-des">
                  <p>${testimonial.description}</p>
                </div>
                <div class="testimonials-info">
                  <div class="testimonials-avatar">
                    <img
                      src="${testimonial.avatar}"
                      alt="${testimonial.name} Avatar"
                    />
                  </div>
                  <div class="testimonials-people">
                    <h3>${testimonial.name}</h3>
                    <p>${testimonial.company}</p>
                  </div>
                </div>
              </section>
            `
          )}
        </div>
      </div>
    `;
  }
}

customElements.define("testimonials-page", TestimonialsPage);

// <div class="testimonials" id="testimonials">
// <div class="testimonials-title">
//   <h1>Testimonials</h1>
// </div>
// <div class="testimonials-sections">
//   <section class="testimonials-section">
//     <div class="testimonials-des">
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Suspenmdisse varius eim in eros elementum tristique.
//       </p>
//     </div>
//     <div class="testimonials-info">
//       <div class="testimonials-avatar">
//         <img
//           src="/assets/img/avatar-image-1.png"
//           alt="Dianne Russel Avatar"
//         />
//       </div>
//       <div class="testimonials-people">
//         <h3>Dianne Russel</h3>
//         <p>Starbucks</p>
//       </div>
//     </div>
//   </section>
//   <section class="testimonials-section">
//     <div class="testimonials-des">
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Suspenmdisse varius eim in eros elementum tristique.
//       </p>
//     </div>
//     <div class="testimonials-info">
//       <div class="testimonials-avatar">
//         <img
//           src="/assets/img/avatar-image-2.png"
//           alt="Dianne Russel Avatar"
//         />
//       </div>
//       <div class="testimonials-people">
//         <h3>Dianne Russel</h3>
//         <p>Starbucks</p>
//       </div>
//     </div>
//   </section>
//   <section class="testimonials-section">
//     <div class="testimonials-des">
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Suspenmdisse varius eim in eros elementum tristique.
//       </p>
//     </div>
//     <div class="testimonials-info">
//       <div class="testimonials-avatar">
//         <img
//           src="/assets/img/avatar-image.png"
//           alt="Dianne Russel Avatar"
//         />
//       </div>
//       <div class="testimonials-people">
//         <h3>Dianne Russel</h3>
//         <p>Starbucks</p>
//       </div>
//     </div>
//   </section>
// </div>
// </div>
