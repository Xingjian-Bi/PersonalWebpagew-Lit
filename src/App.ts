import { LitElement, html, css } from "lit";
import { Router } from "@lit-labs/router";
import "./Pages/HomeScreen";
import "./Pages/AboutMe";
import "./Pages/Contact";
import "./Pages/MySkills";
import "./Pages/Portfolio";

import "./App.css";
class MyApp extends LitElement {
  private myRouter: Router;

  static styles = css`
    * {
      margin: 0;
    }
  `;

  constructor() {
    super();

    // Use Router class for navigation
    this.myRouter = new Router(this, [
      { path: "/", render: () => html`<home-screen></home-screen>` },
      { path: "/aboutMe", render: () => html`<about-me></about-me>` },
      { path: "/contact", render: () => html`<contact-page></contact-page>` },
      { path: "/myskills", render: () => html`<my-skills></my-skills>` },
      {
        path: "/portfolio",
        render: () => html`<portfolio-page></portfolio-page>`,
      },
    ]);
  }

  render() {
    return html`${this.myRouter.outlet()}`;
  }
}

customElements.define("my-app", MyApp);
