import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <address className="col-3">
            <p>
              <span className="strong">Dirección</span>
              <br />
              <br />
              C/ Tabarca, 30
              <br />
              Alfaz del Pi - 03580
              <br />
              Alicante
            </p>
          </address>
          <div className="col-4">
            <p>
              <br />
              <br />
              Eunoia está inscrita en el Registro Nacional de Asociaciones con
              Numero: CV-01-060595-A
            </p>
          </div>
          <div className="col-3">
            <p>
              <span className="strong">Otros enlaces</span>
              <br />
              <br />
              - Estatutos
              <br />
              - Press Kit
              <br />- Politica de privacidad
            </p>
          </div>
          <div className="col-2 align-self-center">
            <p>
              <a href="https://fb.me/eunoiaong" target="_blank">
                <img
                  src="/images/siguenos-fb.svg"
                  alt="Sígue a Eunoia en Facebook (botón)"
                />
              </a>
            </p>
          </div>
          <div className="col-12 text-center text-uppercase">
            <p>
              todos los derechos reservados ® EUNOIA - a favor de la infancia · 2019
            </p>
          </div>
          <div className="col-12 text-center">
            <p className="dev">
              Desarrollado con 💜 por{" "}
              <a href="https://impr.es" target="_blank">
                Impress Marketing
              </a>
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        footer {
          background-color: #373a36;
          padding-top: 45px;
          padding-bottom: 30px;
        }
        footer p {
          font-family: "Montserrat", sans-serif;
          font-weight: 300;
          font-size: 17px;
          line-height: 1.7rem;
          color: var(--eunoia-white);
        }
        .strong {
          font-weight: 400;
          font-size: 18px;
        }
        .dev {
          font-size: 0.8rem !important;
        }
        .dev a {
          color: #ff5607;
        }
      `}</style>
    </footer>
  );
}

export default Footer