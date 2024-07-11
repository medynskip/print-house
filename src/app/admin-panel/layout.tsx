import WrappedQueryProvider from "@/providers/WrappedQueryProvider";

import Navigation from "./_components/Navigation/Navigation";
import style from "./layout.module.scss";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WrappedQueryProvider>
      <main className={style.main}>
        <Navigation />
        <div className={style.content}>{children}</div>
      </main>
    </WrappedQueryProvider>
  );
}
