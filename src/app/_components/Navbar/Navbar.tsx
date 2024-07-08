import NavItem from "../NavItem/NavItem";

import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <NavItem href="/produkty" text="PRODUKTY" />
      <NavItem href="/uslugi" text="USŁUGI" />
      <NavItem href="/blog" text="BLOG" />
      <NavItem href="/kontakt" text="KONTAKT" />
      <NavItem href="/zamowienie" text="zamowienie" />
      <NavItem href="/wyszukaj" text="wyszukaj" />
    </nav>
  );
};

export default Navbar;
