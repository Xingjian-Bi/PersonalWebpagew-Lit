import { LitElement, html, css } from "lit";

export default class Contact extends LitElement {
  static styles = css`
    .contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
      padding: 1rem;
      box-sizing: border-box;
    }

    .rows {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      border: 2px solid rgb(133, 133, 244);
      border-radius: 6px;
      padding: 2rem;
      max-width: 600px;
      width: 100%;
      background-color: #f9f9f9;
    }

    .row {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .row input,
    .row select {
      border-color: azure;
      border-radius: 8px;
      width: 100%;
      height: 30px;
      padding: 0.5rem;
      box-sizing: border-box;
    }

    .submitBtn {
      display: flex;
      justify-content: center;
    }

    .btn-submit {
      width: 150px;
      height: 50px;
      background-color: azure;
      border-radius: 6px;
      margin-top: 2rem;
      cursor: pointer;
    }

    @media (max-width: 932px) {
      .contact {
        width: 100%;
      }

      .rows {
        padding: 1rem;
        width: 100%;
      }

      .row {
        font-size: 12px;
      }
    }
  `;

  render() {
    return html`
      <div className="contact" id="contact">
        <div className="title">
          <h1>Contact Me</h1>
        </div>
        <div className="form">
          <form>
            <div className="rows">
              <div className="row">
                <div className="firstName">
                  <label htmlFor="firstName">Fist Name</label>
                  <input type="text" id="firstName" required />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" required />
                </div>
              </div>
              <div className="row">
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required />
                </div>
                <div>
                  <label htmlFor="phoneNum">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNum"
                    pattern="[7-9]{1}[0-9]{9}"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <label htmlFor="topics">Choose a Topic</label>
                <select name="topics" id="topics" required>
                  <option value="">Select</option>
                  <option value="item1">Item 1</option>
                  <option value="item2">Item 2</option>
                  <option value="item3">Item 3</option>
                </select>
              </div>
              <div className="row">
                <label id="message">Message</label>
                <input type="text" id="message" required />
              </div>
            </div>
            <div className="submitBtn">
              <button className="btn-submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    `;
  }
}

customElements.define("contact-page", Contact);
