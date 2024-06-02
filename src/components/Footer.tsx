import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer>
      <a href="https://twitter.com/kalopsialit"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="https://www.instagram.com/kalopsialit"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://www.facebook.com/KalopsiaLitMag"><FontAwesomeIcon icon={faFacebook} /></a>
      <p>© 2020 Kalopsia Literary Journal</p>
    </footer>
  );
};

export default Footer;
