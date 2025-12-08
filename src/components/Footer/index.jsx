import "./style.css";

function Footer() {
  return (
    <footer>
      <div className="footer_container">
      <p className="footer_title">© 2025 Slatni Riad, Portfolio, tous droits réservés.</p>
      <div className="footer_icons">
        <a
          href="https://github.com/riadslatni?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visiter mon profil Github"
        >
          <img src="/assets/github.svg" alt="" className="icon"/>
        </a>
      </div>
      </div>
    </footer>
  );
}
export default Footer;
