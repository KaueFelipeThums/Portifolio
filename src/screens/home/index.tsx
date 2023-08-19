import "./styles.css";
import React, { ReactElement } from "react";
import { NavigationBar } from "../../components/navigationBar";
import { InstagramLogo, LinkedinLogo, GithubLogo, Layout, Terminal, DeviceMobileCamera } from "@phosphor-icons/react";

export const Home = (): ReactElement => {
  return (
    <div>
      <section className="section background-1 full-size">
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
              <img src={require("../../assets/images/perfil.jpeg")} />
            </div>
          </div>
        </div>
      </section>

      <section className="section background-2" id="about">
        <div className="section-content">
          <div className="grid grid-cols-12 gap-4 resume-grid">
            <div className="col-span-12 md:col-span-6 lg:col-span-6 about-description-container">
              <div className="about-description-content">
                <span className="font-small white-text subtitle">Sobre Mim</span>
              </div>
              <div className="about-description-content">
                <span className="font-h3 white-text">Desenvolvo sistemas web e mobile desde 2019</span>
              </div>
              <div className="about-description-content">
                <span className="font-body5 white-text">
                  Sou um desenvolvedor web e mobile fullstack, apaixonado pelo frontend e design de interfaces.
                  Experiente em modelagem de bancos de dados para criar aplicações eficientes e escaláveis. Sempre em
                  busca de aprimoramento e desafios tecnológicos. Aberto a colaborar em projetos inovadores.
                </span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6 about-description-container">
              <div className="about-description-content">
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

          <div className="grid grid-cols-12 gap-8 resume-grid cards-container">
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
    </div>
  );
};
