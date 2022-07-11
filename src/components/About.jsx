import React from "react";
import Logo from "../img/linkedin.png";
import Git from "../img/Github.png";
import MiLogo from "../img/AppClima.jpg";
export default function about() {
  return (
    <div className="Ab">
      <h1>Andrés Estuardo Mandrox López</h1>
      <h2>Web Developer</h2>
      <p> This is one of my first projects using react, I hope you like it</p>
      <p>More of my work on: </p>
      <div>
        Linkedin:
        <a href="https://www.linkedin.com/in/andres-mandrox-508b9a234/">
          <img src={Logo} alt="linkedin" />
        </a>
      </div>
      <div>
        Github:
        <a href=" https://github.com/AndresMandrox1">
          <img src={Git} alt="Github" />
        </a>
      </div>
      <img src={MiLogo} alt="Logo" />
    </div>
  );
}
