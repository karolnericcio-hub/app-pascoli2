
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

import ritratti from "./assets/pascoli_ritratti.png";
import poeticaImg from "./assets/pascoli_poetica.png";
import gelsominoImg from "./assets/gelsomino_notturno.png";
import schemaImg from "./assets/schema_pascoli.jpg";

export default function App() {
  const [page, setPage] = useState("home");

  const NavButton = ({ label, value }) => (
    <button className="nav-btn" onClick={() => setPage(value)}>
      {label}
    </button>
  );

  return (
    <div className="container">
      <header className="hero">
        <h1>Giovanni Pascoli</h1>
        <p>Il poeta del fanciullino, del mistero e della notte simbolica</p>
      </header>

      <nav className="nav">
        <NavButton label="Home" value="home" />
        <NavButton label="Poetica" value="poetica" />
        <NavButton label="Gelsomino Notturno" value="gelsomino" />
        <NavButton label="Filosofia Base" value="filosofia" />
        <NavButton label="Immagine del Mondo" value="mondo" />
      </nav>

      {page === "home" && (
        <section className="section">
          <img src={ritratti} className="image" />
          <img src={schemaImg} className="image" />
        </section>
      )}

      {page === "poetica" && (
        <section className="section">
          <img src={poeticaImg} className="image-large" />
          <h2>La Poetica del Fanciullino</h2>
          <p>
            Dentro ogni uomo vive un fanciullino capace di meravigliarsi.
            La poesia nasce dalla capacità di cogliere il mistero nelle
            piccole cose quotidiane.
          </p>
          <p>
            La natura è simbolica, carica di segni nascosti. Il dolore
            personale (perdita dei familiari) influenza profondamente
            la sua visione intimista.
          </p>
        </section>
      )}

      {page === "gelsomino" && (
        <section className="section">
          <img src={gelsominoImg} className="image-large" />
          <h2>Il Gelsomino Notturno</h2>
          <p>
            Poesia simbolica dedicata a un matrimonio. Il gelsomino
            che si apre nella notte rappresenta la nascita della vita.
          </p>
          <p>
            Atmosfera notturna, luna, silenzio e casa illuminata:
            simboli dell'unione coniugale e del mistero della generazione.
          </p>
        </section>
      )}

      {page === "filosofia" && (
        <section className="section">
          <h2>Filosofia Base</h2>
          <ul>
            <li>Rifiuto del positivismo e della fiducia cieca nella scienza</li>
            <li>"Maledetta tu scienza..."</li>
            <li>Influenze tra nazionalismo e socialismo</li>
          </ul>
        </section>
      )}

      {page === "mondo" && (
        <section className="section">
          <h2>Immagine del Mondo</h2>
          <p>
            "Il mondo nasce per ognun che nasce al mondo":
            ogni individuo crea un proprio universo interiore.
          </p>
          <p>Filosofia e vita sono inseparabili.</p>
        </section>
      )}
    </div>
  );
}
