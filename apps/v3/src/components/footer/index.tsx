import React from "react";
import FooterLinks from "../links/footer";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between px-11 py-5 border-t items-center">
      <div className="text-xs">Built by Victor Mutai</div>
      <FooterLinks />
    </div>
  );
};

export default Footer;
