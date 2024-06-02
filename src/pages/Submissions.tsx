import React from 'react';
import { Link } from 'react-router-dom';
import './Submissions.css';

const Submissions: React.FC = () => {
  return (
    <div className="submissions">
      <h2>Submissions</h2>

      <p><b>We're currently closed for submissions.</b> We do not read or respond to submissions that don't adhere to the guidelines listed on this page, including those sent via email.</p>

      <p>Kalopsia invites submissions of poetry, prose, and visual art from anyone and everyone. All subject matters are welcome; that being said, Kalopsia will not publish anything overly graphic or offensive. We encourage you to read previous issues to get a feel for what we publish. All poetry and prose submissions must be written in English.</p>
      <p>Though Kalopsia aims to serve as a resource for creative writing feedback and welcomes submissions from students, we ask that teachers do not make it a class requirement to submit. Those who make the best use of our feedback write with a desire that often isn't present when students are required to submit a piece for class credit.</p>


      <h3>Policies</h3>
      <p>There is no fee to submit. For this reason, we unfortunately are unable to pay contributors.</p>
      <p>We are open to simultaneous submissions, but we ask that you notify kalopsialit@gmail.com immediately if your work is accepted elsewhere.</p>
      <p>We reserve First North American Serial Rights to every piece we publish. Rights will revert back to the author after publication, but we ask that you credit Kalopsia as the place your work first appeared.</p>

      <h3>Genres</h3>
      <p>Prose (including prose poetry) — Submissions with up to 3,000 words in length are eligible.</p>
      <p>Poetry — Submissions with up to 200 lines are eligible. All poems should be formatted flush left unless another format is an intentional part of the piece.</p>
      <p>Visual art — Original paintings, photographs and drawings are eligible. Any dimensions are permitted.</p>

      <h3>Formatting</h3>
      <p>We ask that all poetry and prose submissions are black and white and typed in 12-point font. Submissions exceeding one page in length should be numbered in the top-right corner. All poetry and prose files must be in either Google Doc or PDF format.</p>
      <p>If you would like to submit multiple pieces of writing, please upload them as separate submissions. We aim to provide personalized feedback on poetry and prose within 6 months after you submit, regardless of whether your work is accepted.</p>
    </div>
  );
};

export default Submissions;
