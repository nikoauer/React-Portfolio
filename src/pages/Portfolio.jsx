import BookAPI from '../assets/BookAPI.png'
import NoteTaker from '../assets/NoteTaker.png'
import PasswordGenerator from '../assets/PasswordGenerator.png'
import Quiz from '../assets/Quiz.png'
import TechBlog from '../assets/TechBlog.png'
import WeatherApp from '../assets/BookAPI.png'

import '../styles/Portfolio.css'

export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio</h1>
        <div className='row'>
          <div className>
          <a href="https://github.com/Raymond-XishengChen/Books-Review"><img src={BookAPI} alt="" className='col-3 rounded'/></a>
          <a href="https://github.com/nikoauer/Note-Taker"><img src={NoteTaker} alt="" className='col-3 rounded'/></a>
          <a href="https://github.com/nikoauer/Randomized-Password-Generator"><img src={PasswordGenerator} alt="" className='col-3 rounded'/></a>
          </div>
        </div>
        <div className='row'>
          <div className>
          <a href="https://github.com/nikoauer/Coding-Quiz"><img src={Quiz} alt="" className='col-3 rounded'/></a>
          <a href="https://github.com/nikoauer/Tech-Blog"><img src={TechBlog} alt="" className='col-3 rounded'/></a>
          <a href="https://github.com/nikoauer/Weather-Forecast-Dashboard"><img src={WeatherApp} alt="" className='col-3 rounded'/></a>
          </div>
        </div>
      </div>
    );
  }