import Link from "next/link";

interface LinkButtonProps {
  to: string;
  text: string;
}
const LinkButton = ({ to, text }: LinkButtonProps) => {
  return (
    <Link href={to}>
      {text}
      {/* <a>
        <Button variant={props.variant}></Button>
      </a> */}
    </Link>
  );
};

export default LinkButton;
