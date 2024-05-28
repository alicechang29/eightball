import React, { useState } from "react";
import { getRandomMsg } from "./random";
import { allMsgs } from "./allMsgs";
import './EightBall.css';

/**Given a list of messages, selects a random message and
 * renders Eightball element.
 *
 * Props: msgs that is a list of answers
 *  [{msg, color},...]
 * State: current answer selected with keys of: msg, msgColor
 *
 * App -> EightBall
 */
function EightBall({ answers = allMsgs }) {
  const initial = { msg: "Think of a question", color: "black" };
  const [answer, setAnswer] = useState(initial);

  function handleClick() {
    const answer = getRandomMsg(answers);
    setAnswer(answer);
  }

  return (
    <div className="EightBall">
      <button
        className="EightBall-button"
        onClick={handleClick}
        style={{ backgroundColor: answer.color }} >
        {answer.msg}
      </button>
    </div >
  );


}

export default EightBall;