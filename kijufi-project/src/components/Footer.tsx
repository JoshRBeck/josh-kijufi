import Instagram from "../images/Instagram.png"
import Facebook from "../images/Facebook.png"
import Youtube from "../images/Youtube.png"
import M from "../images/M.png"
import ZukunftsPaket from "../images/zukunftspaket.png"
import byKijufi from "../images/by-kijufi.png"
import { Link } from "react-router-dom";
 
const Footer: React.FC = () => {
  return (
    <div>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={ZukunftsPaket} alt="Zukunfts Paket Image" className="zukunft-image"></img>
          <img src={byKijufi} alt="Image of by Kijufi" className="by-kijufi-image"></img>
        </div>
        <div className="footer-top-right">
          <p className="footer-text">Gemeinsam Grenzenlos - das Kinderrechte-Filmfestival 2023 is a project of 
          the Landesverband Kinder- und Jugendfilm Berlin e.V. (Kijufi). The implementation is funded within the 
          framework of the programme Das Zukunftspaket. Future Package. The Future Package for Movement, Culture 
          and Health is a programme of the Federal Ministry for Family Affairs, Senior Citizens, Women and Youth
           (BMFSFJ). It is implemented by the Gesellschaft für soziale Unternehmensberatung (gsub) and the SPI 
           Foundation. The programme part "Child and Youth Participation in the Future Package" is the 
           responsibility of the German Children and Youth Foundation (DKJS).</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <ul className="footer-links-list">
            <li >
              <Link to="/contact" className="footer-link">Kontakt</Link>
            </li>
            <li >
              <Link to="/impressum" className="footer-link">Impressum</Link>
            </li>
            <li >
              <Link to="/dataprotection" className="footer-link">Datenschutz</Link>
            </li>
          </ul>
        </div>
        <div className="footer-bottom-socials">
            <img src={Instagram} alt="Instagram logo" className="social-icon"></img>
            <img src={Facebook} alt="Facebook" className="social-icon"></img>
            <img src={Youtube} alt="Youtube" className="social-icon"></img>
            <img src={M} alt="M Logo" className="social-icon"></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
