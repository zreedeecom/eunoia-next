import React from 'react'
import Link from 'next/link'


const Nav = () => {
  return (
    <nav>
      <div className="container">
        <ul className="nav nav-fill justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" href="#"><a>Qué hacemos</a></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#"><a>Transparencia</a></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#"><a>Quiénes somos</a></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#"><a>Ayudanos</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

/*
const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)
*/

export default Nav
