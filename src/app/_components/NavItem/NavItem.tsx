"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  const pathname = usePathname();

  const className = pathname === href ? "active" : "";

  return (
    <Link href={href} className={className}>
      {text.toUpperCase()}
    </Link>
  );
};

export default NavItem;
