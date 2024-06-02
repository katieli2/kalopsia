import React from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const FAQ: React.FC = () => {
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <br></br>
      <div className="faq-item">
        <h3>What types of writing do you accept?</h3>
        <p>Kalopsia accepts poetry and prose (both fiction and nonfiction); we encourage risk-taking, exploration, and fusion between genres. We are open to all subject matters. If in doubt, send it in.</p>
      </div>
      <div className="faq-item">
        <h3>Who do you accept writing from?</h3>
        <p>Anybody. We especially encourage submissions from students and previously unpublished writers. That being said, we judge submissions solely based on the writing itself and accept submissions from all people.</p>
      </div>
      <div className="faq-item">
        <h3>When can I submit?</h3>
        <p>We are currently closed to submissions. You can find a list of our issues <Link to="/">here</Link>.</p>
      </div>
      <div className="faq-item">
        <h3>Is there a fee to submit?</h3>
        <p>No. Since Kalopsia aims to be accessible to all readers and writers, we do not charge any fees.</p>
      </div>
      <div className="faq-item">
        <h3>Do contributors receive payment?</h3>
        <p>Unfortunately, since Kalopsia is a completely free publication, we are unable to pay our writers and editors.</p>
      </div>
      <div className="faq-item">
        <h3>Do you allow simultaneous submissions?</h3>
        <p>Absolutely. We ask that if your work is accepted elsewhere, you notify us immediately at kalopsialit@gmail.com.</p>
      </div>
      <div className="faq-item">
        <h3>Can I find Kalopsia in print?</h3>
        <p>As of now, Kalopsia is exclusively a digital publication.</p>
      </div>
      <br></br>
      <h4>Feel free to contact kalopsialit@gmail.com with any further questions.</h4>
    </div>
  );
};

export default FAQ;
