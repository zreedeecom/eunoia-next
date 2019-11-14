import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Hero from '../components/hero'
import SectionHeading from '../components/sectionHeading'
import Footer from '../components/footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import ProfilePic from '../components/profilePic'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400|Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Nav />
      <Hero />

      <section className="section01">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionHeading title="Qué hacemos" blob="pink" />
            </div>
            <div className="col-8 offset-2 mt-5">
              <p className="body-text">
                Eunoia es una organización sin animo de lucro cuya misión es
                ayudar a los niños a que tengan una infancia mejor. Lo que nos
                diferencia sobre otras ONG principalmente es que a finales de
                cada año estudiamos las diferentes opciones a la hora de elegir
                a que fin dedicaremos la recaudación del año siguiente.
                Valoramos la urgencia, el nivel de necesidad, la cobertura
                actual y qué asociaciones están implicadas en las causas
                propuestas, con toda esta información escojemos el fin y la
                asociación con la que colaboraremos durante el año entrante.
                Primero nos aseguramos de que la trayectoria de dicha asociación
                es sólida y está comprometida al 100% con la causa para así
                garantizar que los aportes de nuestros asociados y
                patrocinadores no se perderán en el camino y que realmente sepan
                que están ayudando.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section02">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <SectionHeading title="Transparencia" />
            </div>
            <div className="col-8 offset-2 mt-5">
              <p className="body-text text-center">
                En Eunoia pensamos que es de vital importancia que personas y
                empresas que colaboran con nosotros, sepan en cada momento dónde
                y como se destinan los fondos recaudados por eso hemos creado el
                "compromiso de transparencia". Mediante este compromiso de
                transparencia se garantiza al colaborador una visual semestral
                de las cuentas de Eunoia. De esta forma cualquier socio o
                colaborador podrá hacer un seguimiento del balance económico de
                Eunoia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section03">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionHeading title="Quiénes somos" blob="green" />
            </div>
            <div className="col-8 offset-2 mt-5">
              <p className="body-text">
                Eunoia lo compone un pequeño equipo de cinco personas muy
                comprometidas.
                <br />
                <br />
                Cada uno de los miembros combina su trabajo con este proyecto
                invirtiendo tiempo y fondos de forma desinteresada para estar
                cada vez más cerca del objetivo común, proporcionar una infacia
                mejor al máximo número de niños posible.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-8 offset-2 mt-3">

                <div className="row">
                  <ProfilePic
                    name="David Carranza"
                    role="Presidente"
                    src="/images/pic-david.jpg"
                  />
                  <ProfilePic
                    name="David Carranza"
                    role="Presidente"
                    src="/images/pic-david.jpg"
                  />
                  <ProfilePic
                    name="David Carranza"
                    role="Presidente"
                    src="/images/pic-david.jpg"
                  />
                </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .body-text {
          font-family: "Montserrat", sans-serif;
          font-weight: 300;
          font-size: 18px;
          line-height: 2.3rem;
        }
        .section01 {
          background: url(/images/blobs01.svg) right top no-repeat;
          padding-bottom: 100px;
          padding-top: 50px;
        }
        .section02 {
          background: linear-gradient(
              to right,
              rgba(55, 58, 54, 0.8),
              rgba(55, 58, 54, 0.8)
            ),
            url(/images/section2bg-365364941.jpg) center center;
          background-size: cover;
          color: var(--eunoia-white);
          padding-bottom: 70px;
          padding-top: 20px;
        }
        .section03 {
          /* background: url(/images/blobs01.svg) right top no-repeat; */
          padding-bottom: 100px;
          padding-top: 100px;
        }
      `}</style>
      <style jsx global>{`
        :root {
          --eunoia-green: #64ccc9;
          --eunoia-blue: #009cde;
          --eunoia-pink: #e2acd7;
          --eunoia-white: #f2ebe7;
          --eunoia-black: #373a36;
        }
      `}</style>
      <Footer />
    </div>
  );
}

export default Home

/*
    <div className='hero'>
      <h1 className='title'>Welcome to Next.js!</h1>
      <p className='description'>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className='row'>
        <a href='https://nextjs.org/docs' className='card'>
          <h3>Documentation &rarr;</h3>
          <p>Learn more about Next.js in the documentation.</p>
        </a>
        <a href='https://nextjs.org/learn' className='card'>
          <h3>Next.js Learn &rarr;</h3>
          <p>Learn about Next.js by following an interactive tutorial!</p>
        </a>
        <a
          href='https://github.com/zeit/next.js/tree/master/examples'
          className='card'
        >
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on the Next.js GitHub.</p>
        </a>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
  */