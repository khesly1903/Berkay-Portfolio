import React from "react";
import BgVideo from "../components/BgVideo";
import InformationCard from "../components/InformationCard";

export default function HomePage() {
  return (
    <>
      

      <BgVideo />

      <div className="homepage-parent">
        <div className="homepage-information-card">
          <InformationCard />
        </div>
        <div className="homepage-greeting">
          <h1>Hi, I'm Berkay</h1>

          <p className="information-greeting">
            I'm a full-stack (MERN-stack) developer with a strong interest in mathematics, cryptography and linux.
          </p>
          <br />
          <div className="information-school">
            <p>Istinye University: Mathematics & Software Engineering (mr)</p>
            <br />
            <p>Istanbul University: Computer Programming</p>
          </div>
        </div>
        <div className="skill-cards">
        <div className="home-div3 homepage-skill">
          <h2>Backend & DB</h2>
          <ul>
            <li>C# & .Net</li>
            <li>Python</li>
            <li>FastAPI</li>
            <li>SQL Server</li>
            <li>Mongo DB</li>
            <li>Entity Framework</li>
            <li>N-tier architecture</li>
          </ul>
        </div>
        <div className="home-div4 homepage-skill">
          <h2>Frontend</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Resonsive Design</li>
          </ul>
        </div>
        <div className="home-div5 homepage-skill">
          <h2>Cryptography</h2>
          <ul>
            <li>Mathematical Background</li>
            <li>Elliptic Curve Cryptography</li>
            <li>ElGamal Cryptosystem</li>
            <li>19th and 20th-century cryptographic ciphers</li>
          </ul>
        </div>
        </div>
        
      </div>
    </>
  );
}
