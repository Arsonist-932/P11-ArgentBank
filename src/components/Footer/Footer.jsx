import "./Footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <p className="footer-text">Copyright {currentYear} Argent Bank</p>
    </>
  );
}

export default Footer;
