import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery: React.FC = () => {
  const images = ['../photos/1.png', '../photos/2.png', '../photos/3.png', 
  '../photos/4.png', '../photos/5.png', '../photos/6.png', '../photos/7.png', 
  '../photos/8.png', '../photos/9.png', '../photos/10.png', '../photos/11.png'];
  const romanNumerals: string[] = ['xi', 'x', 'ix', 'viii', 'vii', 'vi', 'v', 'iv', 'iii', 'ii', 'i']
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <Link to={`/issue-${romanNumerals[index]}`}>
            <img src={image} alt={`Magazine cover ${romanNumerals[index]}`} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
