import "./styles.css";
import { ReactComponent as YoutubeIcon } from "./youtube.svg";
import { ReactComponent as LinkedinIcon } from "./linkedin.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";

export default function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="#youtube" target="_blank">
          <YoutubeIcon />
        </a>
        <a href="#likedin" target="_blank">
          <LinkedinIcon />
        </a>
        <a href="#instagram" target="_blank">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}
