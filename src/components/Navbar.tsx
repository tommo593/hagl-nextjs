import { NAV_LINKS } from "../constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flexBetween border-red-500 relative z-30 py-5">
        <Image
          src="/hagl_logo.png"
          alt="logo"
          height={120}
          width={120}
          className="cursor-pointer"
        />
        <Link href="/"></Link>
        <ul>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
