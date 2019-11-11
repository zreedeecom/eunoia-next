import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container-fluid" style={{ height: `70vh` }}>
        <div
          className="row"
          style={{
            background: `linear-gradient(0deg, rgba(100, 204, 201, 0.7), rgba(100, 204, 201, 0.7)), url('/images/allen-taylor-486829-unsplash.jpg')`,
            height: `100%`
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-5 text-center">
                <img
                  className="hero-logo"
                  width="100%"
                  src="/images/eunoia-logo.svg"
                  alt="Eunoia - A favor de la infancia Logo"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-10 text-center mt-5">
                <h1 className="hero-tagline">
                  Hacer de la infancia su etapa más feliz es nuestra prioridad
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="row position-relative hero-wave">
          <svg
            width="100%"
            height="200px"
            viewBox="0 0 1440 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 193V200H1440V0.772766C1196.23 89.6243 968.189 102.428 705.578 117.172C499.707 128.731 272.592 141.482 0 193Z"
              fill="#fff" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        /* @import url("https://fonts.googleapis.com/css?family=Playfair+Display&display=swap"); */

        .hero-logo {
          margin-top: 8rem;
        }
        .hero-tagline {
          font-family: Playfair Display;
          font-weight: normal;
          font-size: 3rem;
          line-height: 67px;
          text-align: center;
          color: #fff;
        }
        .hero-wave {
          top: -200px;
        }
      `}</style>
    </>
  );
};

export default Hero;
