import {
  Navbar as FlowbiteNavbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export function Navbar() {
  return (
    <FlowbiteNavbar fluid>
      <NavbarBrand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Victor Mutai
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/education">
          Education
        </NavbarLink>
        <NavbarLink as={Link} href="/experience">
          Experience
        </NavbarLink>
        <NavbarLink as={Link} href="/projects">
          Projects
        </NavbarLink>
        <NavbarLink as={Link} href="/contact">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </FlowbiteNavbar>
  );
}
