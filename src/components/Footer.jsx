import siteLogo from '../assets/logo.svg';
import fbIcon from '../assets/icon-facebook.svg';
import instaIcon from '../assets/icon-instagram.svg';
import xIcon from '../assets/icon-twitter.svg';
import pinterestIcon from '../assets/icon-pinterest.svg';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="footer-logo">
          <img src={siteLogo} alt="logo" />
        </div>
        <div className="footer-details">
          <nav>
            <p>Features</p>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </nav>
          <nav>
            <p>Resources</p>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </nav>
          <nav>
            <p>Company</p>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div className="footer-social">
          <img src={fbIcon} alt="facebook" />
          <img src={xIcon} alt="twitter" />
          <img src={pinterestIcon} alt="pinterest" />
          <img src={instaIcon} alt="instagram" />
        </div>
      </div>
      <div className="footer-attribution">
        <p>
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
            Frontend Mentor
          </a>
        </p>
        <p>
          Coded by{' '}
          <span>
            <a href="https://www.frontendmentor.io/profile/sambuka-a">Volodymyr Kurtyak</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
