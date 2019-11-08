import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

import 'bootstrap/dist/css/bootstrap.min.css'
import SectionHeading from '../components/sectionHeading'

const Home = () => {
  return (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
      {/* <link href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" rel="stylesheet" /> */}
    </Head>

    <Nav />
    <div className="container-fluid" style={{ height: `80vh` }}>
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
                <img className="hero-logo" width="100%" src="/images/eunoia-logo.svg" alt="Eunoia - A favor de la infancia Logo"/>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-10 text-center mt-5">
                <h1 className="hero-tagline">Hacer de la infancia su etapa más feliz es nuestra prioridad</h1>
              </div>
            </div>
          </div>
        </div>
      <div className="row position-relative" style={{ top: -200 }}>
        <svg width="100%" height="200px" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 193V200H1440V0.772766C1196.23 89.6243 968.189 102.428 705.578 117.172C499.707 128.731 272.592 141.482 0 193Z" fill="#fff" />
        </svg>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col">
          <SectionHeading />
        </div>
      </div>
    </div>

    <style jsx>{`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');

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
    `}</style>
  </div>

  )
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