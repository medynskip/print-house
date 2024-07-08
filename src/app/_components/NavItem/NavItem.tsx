"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import style from "./NavItem.module.scss";

interface NavItemProps {
  href: string;
  text: string;
}

const NavItem = ({ href, text }: NavItemProps) => {
  const pathname = usePathname();

  // const className = pathname === href ? "active" :

  return (
    <Link
      href={href}
      className={clsx(style.navItem, pathname === href && style.navItemActive)}
    >
      {text.toUpperCase()}
    </Link>
  );
};

export default NavItem;
