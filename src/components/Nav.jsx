import '../styles/Nav.css'

export default function Nav() {
  return (
    <>
      <ul className="nav nav-underline container">
        <li className="nav-item row">
          <a className="nav-link text-white" aria-current="page" href="/">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/Portfolio">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/Contact">
            Contact Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/Resume">
            Resume
          </a>
        </li>
      </ul>
    </>
  );
}
