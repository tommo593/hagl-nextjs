import { NAV_LINKS } from "../constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <nav className="flexBetween max-container padding-container relative px-30 py-5 z-30">
        <Image
          src="/hagl_logo.png"
          alt="logo"
          height={120}
          width={120}
          className="cursor-pointer"
        />
        <Link href="/"></Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-200 flexCenter cursorPointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </nav>
    </>
  );
};

export default Navbar;
