import React from "react";
import FooterLinks from "../links/footer";

export default function Footer(): JSX.Element {
  return (
    <footer
      className="flex justify-between px-6 md:px-11 py-5 border-t items-center scroll-mt-24"
      id="contact"
    >
      <div className="text-xs">Built by Victor Mutai</div>
      <FooterLinks />
    </footer>
  );
}
