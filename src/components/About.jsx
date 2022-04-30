import React from "react";
import Logo from "../img/linkedin.png";
import Git from "../img/Github.png";
import MiLogo from "../img/AppClima.jpg";
export default function about() {
  return (
    <div className="Ab">
      <h1>Andrés Estuardo Mandrox López</h1>
      <h2>Desarrollador Web</h2>
      <p>
        {" "}
        Este es uno de mis primeros proyectos usando react, espero sea de su
        agrado
      </p>
      <p>Más acerca de mi trabajo en: </p>
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
