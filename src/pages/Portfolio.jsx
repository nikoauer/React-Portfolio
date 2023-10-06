import BookAPI from "../assets/BookAPI.png";
import NoteTaker from "../assets/NoteTaker.png";
import PasswordGenerator from "../assets/PasswordGenerator.png";
import Quiz from "../assets/Quiz.png";
import TechBlog from "../assets/TechBlog.png";
import WeatherApp from "../assets/WeatherApp.png";

import "../styles/Portfolio.css";

export default function Portfolio() {
  return (
<div className="container">
  <h1 className="col-12 text-center">Portfolio</h1>
  <div className="row">
    <div className="col-md-4">
      <a href="https://github.com/Raymond-XishengChen/Books-Review">
        <img src={BookAPI} alt="" className="img-fluid rounded" />
      </a>
    </div>
    <div className="col-md-4">
      <a href="https://github.com/nikoauer/Note-Taker">
        <img src={NoteTaker} alt="" className="img-fluid rounded" />
      </a>
    </div>
    <div className="col-md-4">
      <a href="https://github.com/nikoauer/Randomized-Password-Generator">
        <img src={PasswordGenerator} alt="" className="img-fluid rounded" />
      </a>
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-md-4">
      <a href="https://github.com/nikoauer/Coding-Quiz">
        <img src={Quiz} alt="" className="img-fluid rounded" />
      </a>
    </div>
    <div className="col-md-4">
      <a href="https://github.com/nikoauer/Tech-Blog">
        <img src={TechBlog} alt="" className="img-fluid rounded" />
      </a>
    </div>
    <div className="col-md-4">
      <a href="https://github.com/nikoauer/Weather-Forecast-Dashboard">
        <img src={WeatherApp} alt="" className="img-fluid rounded" />
      </a>
    </div>
  </div>
</div>

  );
}
