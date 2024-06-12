import Link from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || "";

  if (router.pathname === href) {
    className = `${className} selected`;
  }

  return <Link href={href} className={className}>link</Link>;
};

export default NavItem;