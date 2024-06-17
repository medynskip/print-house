import Link from "next/link";
// import Link from "./../link";

// import { signIn, signOut, useSession } from "next-auth/client";

const Navigation = () => {
  //   const [session, loading] = useSession();
  return (
    <div className="sidebar">
      <Link href="/admin-panel">START</Link>
      <Link href="/admin-panel/zamowienia">ZAMÓWIENIA</Link>
      <Link href="/admin-panel/blog">BLOG</Link>
      <Link href="/admin-panel/produkty">PRODUKTY</Link>
      <Link href="/admin-panel/strony">STRONY</Link>
      <Link href="/admin-panel/pliki">PLIKI</Link>
      <Link href="/admin-panel/konfiguracja">KONFIGURACJA</Link>
    </div>
  );
};

export default Navigation;
