import { ReactComponent as YoutubeIcon } from "./youtube.svg";
import { ReactComponent as LinkedinIcon } from "./linkedin.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento
      <strong> Semana DevSuperior</strong>
      <div className="footer-icons">
        <Link to="#youtube" target="_blank">
          <YoutubeIcon />
        </Link>
        <Link to="#likedin" target="_blank">
          <LinkedinIcon />
        </Link>
        <Link to="#instagram" target="_blank">
          <InstagramIcon />
        </Link>
      </div>
    </footer>
  );
}
