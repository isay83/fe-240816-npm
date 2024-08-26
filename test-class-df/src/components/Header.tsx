import "../styles/Header.css";
import Logo from "../images/logo-4-bernalarriaga.com.svg";

export default function Header() {
  return (
    <header className="header">
      <a href="#">
        <img src={Logo} alt="Logo" className="logo" />
      </a>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
