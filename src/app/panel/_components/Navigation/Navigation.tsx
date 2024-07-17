import Link from "next/link";

import style from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <Link className={style.navigationLink} href="/panel">
        START
      </Link>
      <Link className={style.navigationLink} href="/panel/zamowienia">
        ZAMÓWIENIA
      </Link>
      <Link className={style.navigationLink} href="/panel/blog">
        BLOG
      </Link>
      <Link className={style.navigationLink} href="/panel/produkty">
        PRODUKTY
      </Link>
      <Link className={style.navigationLink} href="/panel/strony">
        STRONY
      </Link>
      <Link className={style.navigationLink} href="/panel/pliki">
        PLIKI
      </Link>
      <Link className={style.navigationLink} href="/panel/konfiguracja">
        KONFIGURACJA
      </Link>
    </nav>
  );
};

export default Navigation;
