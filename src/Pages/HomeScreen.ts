import { LitElement, html, css } from "lit";
import "./NavBar";
import "./AboutMe";
import "./Hero";
import "./MySkills";
import "./Portfolio";
import "./Testimonials";
import "./Contact";
import "./Footer";

class HomeScreen extends LitElement {
  static styles = css`
    * {
      margin: 10;
      width: 100%;
    }
  `;

  render() {
    return html`
      <div class="home">
        <nav-bar></nav-bar>
        <hero-page></hero-page>
        <my-skills></my-skills>
        <about-me></about-me>
        <portfolio-page></portfolio-page>
        <testimonials-page></testimonials-page>
        <contact-page></contact-page>
        <footer-page></footer-page>
      </div>
    `;
  }
}

customElements.define("home-screen", HomeScreen);
