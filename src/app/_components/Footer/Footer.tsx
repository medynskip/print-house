import style from "./Footer.module.scss";

const CompanyDetails = () => {
  return (
    <>
      <p>
        ul. Krótka 1<br />
        26-110 Skarżysko-Kam.
      </p>
      <p>tel.: 00 1232 456 23</p>
      <ul>
        <li>biuro: biuro@druk.pl</li>
        <li>zamówienia: zamowienia@druk.pl</li>
      </ul>
    </>
  );
};

const Footer = () => {
  return (
    <footer className={style.footer}>
      <CompanyDetails />
    </footer>
  );
};

export default Footer;
