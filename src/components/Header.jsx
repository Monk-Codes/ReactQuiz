import logoImg from "../assets/quiz-logo.png";
export default function Header() {
 return (
  <header>
   <img src={logoImg} alt="logo" />
   <h1>React Quiz Time </h1>
   <p>Total 50 questions</p>
   <p>Evaluate yourself</p>
  </header>
 );
}
