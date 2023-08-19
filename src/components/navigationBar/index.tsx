import "./styles.css";
import { useState } from "react";
import { ReactElement } from "react";
import { Code } from "@phosphor-icons/react";
import { List, X } from "@phosphor-icons/react";

export const NavigationBar = (): ReactElement => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive((prevState) => !prevState);
  };

  return (
    <div>
      <div className="header">
        <div className="logo">
          <Code />
        </div>
        <ul className="navigation-container">
          <li className="navigation-item font-h5">
            <a href="#about">Sobre</a>
          </li>
          <li className="navigation-item font-h5">
            <a href="#formation">Formação</a>
          </li>
          <li className="navigation-item font-h5">
            <a href="#experience">Experiência</a>
          </li>
          <li className="navigation-item font-h5">
            <a href="#contact">Contato</a>
          </li>
        </ul>

        <div className="font-h5 button-menu">
          <span onClick={toggleNav}>
            <List />
          </span>
        </div>
      </div>

      <div className={`overlay ${isNavActive ? "active" : ""}`}>
        <section className="section full-size">
          <div className="section-content">
            <div className="overlay-header">
              <div className="font-h5 button-menu">
                <span onClick={toggleNav}>
                  <X />
                </span>
              </div>
            </div>

            <div className="overlay-body">
              <ul className="navigation-container-overlay">
                <li className="navigation-item font-h5">
                  <a onClick={toggleNav} href="#about">
                    Sobre
                  </a>
                </li>
                <li className="navigation-item font-h5">
                  <a onClick={toggleNav} href="#formation">
                    Formação
                  </a>
                </li>
                <li className="navigation-item font-h5">
                  <a onClick={toggleNav} href="#experience">
                    Experiência
                  </a>
                </li>
                <li className="navigation-item font-h5">
                  <a onClick={toggleNav} href="#contact">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
