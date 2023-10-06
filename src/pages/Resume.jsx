import FileResume from "../assets/Resume.pdf";

export default function Resume() {
  return (
    <div>

      <div className="container">
        <div className="row">
        <h1>Resume</h1>
        <h2>Proficiencies in:</h2>
        <a href={FileResume}>Download my Resume</a>
        <ul className="list-group col-6">
          <li className="list-group-item">JavaScript ES6</li>
          <li className="list-group-item">C</li>
          <li className="list-group-item">CSS3</li>
          <li className="list-group-item">HTML5</li>
          <li className="list-group-item">Github</li>
          <li className="list-group-item">Express</li>
          <li className="list-group-item">Node.js</li>
          <li className="list-group-item">JQuery</li>
          <li className="list-group-item">Bootstrap</li>
          <li className="list-group-item">Bulma</li>
          <li className="list-group-item">Git</li>
          <li className="list-group-item">NPM</li>
          <li className="list-group-item">SQL</li>
        </ul>
        </div>
      </div>
    </div>
  );
}
