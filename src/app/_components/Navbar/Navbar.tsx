import Link from "next/link";

import NavItem from "../NavItem/NavItem";

import style from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link
        href={"/"}
        // className={clsx(style.navItem, pathname === href && style.navItemActive)}
      >
        LOGO
      </Link>
      <div>
        <NavItem href="/produkty" text="PRODUKTY" />
        {/* <NavItem href="/uslugi" text="USŁUGI" /> */}
        <NavItem href="/blog" text="BLOG" />
        <NavItem href="/kontakt" text="KONTAKT" />
        <NavItem href="/panel" text="ZALOGUJ" />
        {/* <NavItem href="/zamowienie" text="zamowienie" /> */}
        {/* <NavItem href="/wyszukaj" text="wyszukaj" /> */}
      </div>
    </nav>
  );
};

export default Navbar;
