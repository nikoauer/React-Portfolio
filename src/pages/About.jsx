import "../styles/About.css";
import SelfPortrait from "../assets/selfPortrait.jpeg";

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <img className="img-fluid rounded-5" src={SelfPortrait} alt="" />
        </div>
        <div className="col-md-7">
          <h1>I AM NIKO, A FULL STACK DEVELOPER WITH A KEEN INTEREST IN PROBLEM SOLVING AND LEARNING NEW SKILLS</h1>
          <p>
          Front-end developer leveraging a diverse background in television broadcast and photography to provide unique problem-solving solutions for users and clients with websites and software. I have earned a Full Stack Web Development certificate from the University of Sydney Coding Bootcamp. With a keen interest in problem-solving and aesthetic design around building visually stimulating projects. Strengths include but are not limited to organisation, teamwork and task management.
          </p>
        </div>
      </div>
    </div>
  );
}
