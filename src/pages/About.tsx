import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <p>Kalopsia is a literary and arts journal run by high school and college students from all over the world who aim to promote art and writing among (seemingly) ordinary people. The journal is dedicated to uplifting the voices of talented writers and artists, regardless of age or credentials. As such, Kalopsia is an outlet for work by students, emerging writers, and those who belong to marginalized groups. Editors provide detailed and personalized feedback on every single writing submission.
</p>
      <p>Though Kalopsia aims to serve as a resource for creative writing feedback and welcomes submissions from students, we ask that teachers do not make it a class requirement to submit. Those who make the best use of our feedback write with a desire that often isn’t present when students are required to submit a piece for class credit.</p>
      <p>We are currently closed to submissions. You can find a list of our issues <Link to="/">here</Link>.</p>

    </div>
  );
};

export default About;
