import Link from "next/link";

import style from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <Link className={style.navigationLink} href="/admin-panel">
        START
      </Link>
      <Link className={style.navigationLink} href="/admin-panel/zamowienia">
        ZAMÓWIENIA
      </Link>
      <Link className={style.navigationLink} href="/admin-panel/blog">
        BLOG
      </Link>
      <Link className={style.navigationLink} href="/admin-panel/produkty">
        PRODUKTY
      </Link>
      <Link className={style.navigationLink} href="/admin-panel/strony">
        STRONY
      </Link>
      <Link className={style.navigationLink} href="/admin-panel/pliki">
        PLIKI
      </Link>
      <Link className={style.navigationLink} href="/admin-panel/konfiguracja">
        KONFIGURACJA
      </Link>
    </nav>
  );
};

export default Navigation;
