import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer>
      <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
    </footer>
  );
};

export default Footer;
