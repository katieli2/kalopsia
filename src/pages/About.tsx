import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <p>Kalopsia is a literary and arts journal run by high school and college students from all over the world who aim to promote art and writing among (seemingly) ordinary people. The journal is dedicated to uplifting the voices of talented writers and artists, regardless of age or credentials. As such, Kalopsia is an outlet for work by students, emerging writers, and those who belong to marginalized groups. Editors provide detailed and personalized feedback on every single writing submission.</p>
      <p>Though Kalopsia aims to serve as a resource for creative writing feedback and welcomes submissions from students, we ask that teachers do not make it a class requirement to submit. Those who make the best use of our feedback write with a desire that often isn’t present when students are required to submit a piece for class credit.</p>
      <p>We are currently closed to submissions. You can find a list of our issues <Link to="/">here</Link>.</p>
      <br></br>
      <h2>Masthead</h2>
      <p><b>Editor-in-chief:</b> Katie Li</p>
      <p><b>Managing Editor:</b> Jenny Zhan</p>
      <p><b>Art Director:</b> Peter Donley</p>
      <p><b>Senior Editors:</b> Mackenzie Melichar, Ysabella Zuniga Aviles</p>
      <p><b>Staff Artists:</b> Elwing Gao, Luana Góes, Felicity Liu</p>
      <p><b>Social Media Manager:</b> Grace Zhou</p>
      <p><b>Poetry and Prose Editors:</b> Ethan Altshul, Natasha Bredle, Eunice Chi, Snigdha Garud, Kaia Gelatt, Juliette Hagobian, Isabelle Li, Elsa Lyons, Adya Mohapatra, Amelia Nason, Gabriela Pletosu, Marion Rai, Trisha Santanam, Ella Song, Alex Sosebee, Fifi Wang, Hye-won Yoo, Andrew Yuan</p>
    </div>
  );
};

export default About;
