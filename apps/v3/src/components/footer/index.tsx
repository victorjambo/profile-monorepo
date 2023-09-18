import React from "react";
import FooterLinks from "../links/footer";

export default function Footer(): JSX.Element {
  return (
    <div className="flex justify-between px-6 md:px-11 py-5 border-t items-center">
      <div className="text-xs">Built by Victor Mutai</div>
      <FooterLinks />
    </div>
  );
}
