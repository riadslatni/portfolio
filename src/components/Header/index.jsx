import "./style.css";

function Header() {
  return (
    <header>
      <div className="header_title">
        <h1 className="name">Slatni Riad</h1>
        <p className="job">Développeur web</p>
      </div>

      <nav className="header_nav">
        <ul className="header_titles">
          <li className="navItem"><a href="#about_section">A propos</a></li>
          <li className="navItem"><a href="#Projects">Projets</a></li>
          <li className="navItem"><a href="#Skills">Compétences</a></li>
          <li className="navItem"><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
