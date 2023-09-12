import { Link } from "react-router-dom"
import Kijufi from '../images/Kijufi.png'
import Instagram from "../images/Instagram.png"
import Facebook from "../images/Facebook.png"
import Youtube from "../images/Youtube.png"
import M from "../images/M.png"
 
const Navbar: React.FC = () => {
  return (
      <div className="navbar">
        <div className="left-section">
            <img src={Kijufi} alt="Kijufi Logo" className="kijufi-image"></img>
          <div className="social-media">
            <img src={Instagram} alt="Instagram logo" className="social-icon"></img>
            <img src={Facebook} alt="Facebook" className="social-icon"></img>
            <img src={Youtube} alt="Youtube" className="social-icon"></img>
            <img src={M} alt="M Logo" className="social-icon"></img>
          </div>
        </div>
        <div className="header-container">
        <ul className="header-menu">
          <li>
            <Link to="/" className="header-menu-li">
              Home
            </Link>
          </li>
          <li>
            <Link to="/programme" className="header-menu-li">
              Programme
            </Link>
          </li>
          <li>
            <Link to="/practical-info" className="header-menu-li">
              Practical Info
            </Link>
          </li>
          <li>
            <Link to="/contact-press" className="header-menu-li">
              Contact & Press
            </Link>
          </li>
          <li>
            <Link to="/faq" className="header-menu-li">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
        <div className="right-section">
          <button type="button" className="header-button">Tickets</button>
        </div>
      </div>
    );
}

export default Navbar