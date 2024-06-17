import Navigation from "./_components/Navigation/Navigation";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
}
