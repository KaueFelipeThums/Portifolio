import "./styles.css";
import React, { ReactElement } from "react";
import { NavigationBar } from "../../components/navigationBar";
import {
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  Layout,
  Terminal,
  DeviceMobileCamera,
  GraduationCap,
} from "@phosphor-icons/react";
import { ReactComponent as JavaScript } from "../../assets/images/javascript.svg";
import { ReactComponent as TypeScript } from "../../assets/images/typescript.svg";
import { ReactComponent as ReactLogo } from "../../assets/images/react.svg";
import { ReactComponent as PHP } from "../../assets/images/php.svg";
import { ReactComponent as Laravel } from "../../assets/images/laravel.svg";
import { ReactComponent as Git } from "../../assets/images/git.svg";
import { ReactComponent as Html } from "../../assets/images/html5.svg";
import { ReactComponent as Css } from "../../assets/images/css.svg";
import { ReactComponent as Ubuntu } from "../../assets/images/ubuntu.svg";
import { ReactComponent as MySql } from "../../assets/images/mysql.svg";
import { ReactComponent as SqLite } from "../../assets/images/sqlite.svg";
import { ReactComponent as Figma } from "../../assets/images/figma.svg";
import { ReactComponent as VScode } from "../../assets/images/vscode.svg";

export const Home = (): ReactElement => {
  const formation = [
    {
      description: "Curso Técnico em Desenvolvimento de Sistemas",
      date: "Jan 2021",
    },
    {
      description: "Engenharia de Software",
      date: "Dez 2025",
    },
  ];

  const experience = [
    {
      description: "Java Script",
      value: "90%",
    },
    {
      description: "React JS",
      value: "80%",
    },
    {
      description: "React Native",
      value: "75%",
    },
    {
      description: "Type Script",
      value: "65%",
    },
    {
      description: "PHP",
      value: "85%",
    },
  ];

  const stacks = [
    {
      title: "Java Script",
      src: <JavaScript />,
    },
    {
      title: "Type Script",
      src: <TypeScript />,
    },
    {
      title: "React",
      src: <ReactLogo />,
    },
    {
      title: "PHP",
      src: <PHP />,
    },
    {
      title: "Laravel",
      src: <Laravel />,
    },
    {
      title: "HTML",
      src: <Html />,
    },
    {
      title: "CSS",
      src: <Css />,
    },
    {
      title: "Git",
      src: <Git />,
    },
    {
      title: "MySQL",
      src: <MySql />,
    },
    {
      title: "SqLite",
      src: <SqLite />,
    },
    {
      title: "Ubuntu",
      src: <Ubuntu />,
    },
    {
      title: "Figma",
      src: <Figma />,
    },
    {
      title: "VS Code",
      src: <VScode />,
    },
  ];

  return (
    <div>
      <section className="section background-1 screen-height">
        <div className="section-content">
          <NavigationBar />
          <div className="grid grid-cols-12 gap-4 resume-grid">
            <div className="col-span-12 md:col-span-6 lg:col-span-6 resume-description-container">
              <div className="resume-description-content">
                <span className="font-h1 white-text">Kaue Thums</span>
                <div className="description-name-line" />
              </div>
              <div className="resume-description-content">
                <span className="font-h4 white-text">Fullstack Developer</span>
                <br />
                <span className="font-body5 white-text">
                  Atualmente sou desenvolvedor fullstack e designer de aplicativos e sistemas web.
                </span>
              </div>
              <div className="resume-description-content">
                <div className="resume-description-social-container">
                  <span className="font-body3 resume-description-social">
                    <InstagramLogo />
                  </span>
                  <span className="font-body3 resume-description-social">
                    <LinkedinLogo />
                  </span>
                  <span className="font-body3 resume-description-social">
                    <GithubLogo />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6 resume-description-container">
              <img alt="Perfil" src={require("../../assets/images/perfil.jpeg")} />
            </div>
          </div>
        </div>
      </section>
      <section className="section background-2" id="about">
        <div className="section-content">
          <div className="grid grid-cols-12 gap-4 resume-grid">
            <div className="col-span-12 md:col-span-6 lg:col-span-6 about-description-container">
              <div className="description-content">
                <span className="title-small white-text subtitle">Sobre Mim</span>
              </div>
              <div className="description-content">
                <span className="font-h3 white-text">Desenvolvo sistemas web e mobile desde 2019</span>
              </div>
              <div className="description-content">
                <span className="font-body5 white-text">
                  Sou um desenvolvedor web e mobile fullstack, apaixonado pelo frontend e design de interfaces.
                  Experiente em modelagem de bancos de dados para criar aplicações eficientes e escaláveis. Sempre em
                  busca de aprimoramento e desafios tecnológicos. Aberto a colaborar em projetos inovadores.
                </span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6 about-description-container">
              <div className="description-content">
                <div className="grid grid-cols-6 gap-4 resume-grid">
                  <div className="col-span-3 md:col-span-3 lg:col-start-2 lg:col-end-3">
                    <p className="font-h1 primary-text">2+</p>
                    <p className="font-body5 white-text">
                      Anos de <br /> Experiência
                    </p>
                  </div>
                  <div className="col-span-3 md:col-span-3 lg:col-start-4 lg:col-end-5">
                    <p className="font-h1 primary-text">15+</p>
                    <p className="font-body5 white-text">
                      Projetos <br /> Concluídos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section background-2 cards-container" id="about">
        <div className="section-content">
          <div className="grid grid-cols-12 gap-8 resume-grid">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="card-item background-yellow">
                <span className="font-body2 gray-text">
                  <Layout />
                </span>
                <span className="font-h2 gray-text">
                  UI /UX <br />
                  Designer.
                </span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="card-item background-gray">
                <span className="font-body2 gray-text">
                  <Terminal />
                </span>
                <span className="font-h2 gray-text">
                  Web <br />
                  Developer.
                </span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="card-item background-gray">
                <span className="font-body2 gray-text">
                  <DeviceMobileCamera />
                </span>
                <span className="font-h2 gray-text">
                  Mobile <br />
                  Developer.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section background-1 screen-height" id="formation">
        <div className="section-content">
          <div className="grid grid-cols-12 gap-4 resume-grid">
            <div className="col-span-12 md:col-span-6 lg:col-span-6 formation-description-container">
              <div className="description-content">
                <span className="title-small white-text subtitle">Formação</span>
              </div>
              <div className="description-content">
                <span className="font-body5 white-text">
                  Desde 2019, mergulhei no mundo da programação e, desde então, sigo em constante aprendizado, com o
                  firme propósito de ampliar meus conhecimentos e habilidades nessa área em contínua evolução.
                </span>
              </div>

              <div className="container-table">
                {formation?.map((e) => {
                  return (
                    <div className="flex-table-row">
                      <div className="flex-table-icon font-body4 primary-text">
                        <GraduationCap />
                      </div>
                      <div className="flex-table-description font-h5 white-text">{e?.description}</div>
                      <div className="flex-table-date text-small white-text">{e?.date}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-6 formation-image-container">
              <img alt="Book" className="image-formation" src={require("../../assets/images/book.png")} />
            </div>
          </div>
        </div>
      </section>
      <section className="section background-2 screen-height" id="experience">
        <div className="section-content">
          <div className="grid grid-cols-12 gap-4 resume-grid">
            <div className="col-span-12 md:col-span-6 lg:col-span-6 experience-description-container">
              <div className="description-content">
                <span className="title-small white-text subtitle">Experiência</span>
              </div>
              <div className="description-content">
                <span className="font-body5 white-text">
                  Minha jornada no mercado de trabalho começou no suporte de TI da empresa em que atuo, e, após alguns
                  meses, tive a gratificante oportunidade de transitar para a área de desenvolvimento, onde permaneço
                  até hoje. Com dois anos de experiência como desenvolvedor, atuo de forma fullstack, trabalhando tanto
                  em projetos web quanto mobile. Essa trajetória tem sido uma fonte constante de aprendizado e
                  crescimento profissional, alimentando ainda mais minha paixão pela programação.
                </span>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-6 formation-description-container">
              <div className="stack-container">
                {experience?.map((e) => {
                  return (
                    <div className="stack-item">
                      <div className="stack-item-description">
                        <span className="font-h5 white-text">{e?.description}</span>
                        <span className="font-body5 white-text">{e?.value}</span>
                      </div>
                      <div className="stack-item-percent">
                        <div className="stack-item-percent-value" style={{ width: e?.value }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-span-12 experience-description-container">
              <div className="stacks-list-container">
                {stacks?.map((e) => {
                  return (
                    <div className="stacks-list-item">
                      <svg className="stacks-list-item-icon">{e?.src}</svg>
                      <p className="stacks-list-item-title text-small">{e?.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
