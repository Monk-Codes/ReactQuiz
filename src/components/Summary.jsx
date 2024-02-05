import Trophy from "../assets/quiz-complete.png";
import QUESTIONS from "../Questions.js";

export default function Summary({ userAnswers }) {
 const skipped = userAnswers.filter((ans) => ans === null);
 const correct = userAnswers.filter((ans, i) => ans === QUESTIONS[i].answers[0]);
 const skippedShare = Math.round((skipped.length / userAnswers.length) * 100);
 const correctShare = Math.round((correct.length / userAnswers.length) * 100);
 const wrongShare = 100 - skippedShare - correctShare;
 return (
  <div id="summary">
   <img src={Trophy} alt="trophy" />
   <h2>Quiz Completed!</h2>
   <div id="summary-stats">
    <p>
     <span className="number">{skippedShare}%</span>
     <span className="text">Skipped</span>
    </p>
    <p>
     <span className="number">{correctShare}%</span>
     <span className="text">Answered Correctly</span>
    </p>
    <p>
     <span className="number">{wrongShare}%</span>
     <span className="text">Answered Incorrectly</span>
    </p>
   </div>
   <ol>
    {userAnswers.map((ans, i) => {
     let cssClass = "user-answer";
     if (ans === null) {
      cssClass += " skipped";
     } else if (ans === QUESTIONS[i].answers[0]) {
      cssClass += " correct";
     } else {
      cssClass += " wrong";
     }
     return (
      <li key={i}>
       <h3>{i + 1}</h3>
       <p className="question">{QUESTIONS[i].text}</p>
       <p className={cssClass}> {ans ?? "Skipped"}</p>
      </li>
     );
    })}
   </ol>
  </div>
 );
}
