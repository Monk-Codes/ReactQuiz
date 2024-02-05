import { useState, useEffect } from "react";

export default function Timer({ timeout, onTimeout, mode }) {
 const [remainTime, setRemainTime] = useState(timeout);

 useEffect(() => {
  const t = setTimeout(timeout, onTimeout);
  return () => {
   clearTimeout(t);
  };
 }, [timeout, onTimeout]);

 //////////////////////////////////////////////
 useEffect(() => {
  const i = setInterval(() => {
   setRemainTime((prevRemainTime) => prevRemainTime - 10);
  }, 10);
  return () => {
   clearInterval(i);
  };
 }, []);

 return <progress id="question-time" max={timeout} value={remainTime} className={mode} />;
}
