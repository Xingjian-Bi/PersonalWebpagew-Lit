// import NavBar from "./NavBar";
// import "./Footer.css";

// export default function Footer() {
//   return (
//     <div className="footer">
//       <p>copy @ myPortfolio</p>
//     </div>
//   );
// }

import { LitElement, html, css } from "lit";

class FooterPage extends LitElement {
  static styles = css`
    .footer {
      margin: 2rem;
      display: flex;
      justify-content: center;
    }
  `;

  render() {
    return html`
      <div class="footer">
        <p>copy @ myPortfolio</p>
      </div>
    `;
  }
}

customElements.define("footer-page", FooterPage);
