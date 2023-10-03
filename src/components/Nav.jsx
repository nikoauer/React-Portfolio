export default function Nav() {
  return (
    <>
      <ul className="nav nav-underline">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-disabled="true">
            Resume
          </a>
        </li>
      </ul>
    </>
  );
}
