import './styles.css';
import { ReactComponent as YouTubeIcon } from '../Images/youtube.svg';
import { ReactComponent as InstagramIcon } from '../Images/instagram.svg';
import { ReactComponent as LinkedinIcon } from '../Images/linkedin.svg';

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://www.youtube.com/" target="_new">
          <YouTubeIcon />
        </a>
        <a href="linkedin.com/in/uillian-leal-santos-06a897161" target="_new">
          <InstagramIcon />
        </a>
        <a href="https://www.instagram.com/uillian_leal/" target="_new">
          <LinkedinIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
