import Navigation from "./_components/Navigation/Navigation";
import style from "./layout.module.scss";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={style.main}>
      <Navigation />
      <div className={style.content}>{children}</div>
    </main>
  );
}
