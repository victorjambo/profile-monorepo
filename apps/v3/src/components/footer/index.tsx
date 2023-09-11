import React from "react";
import FooterLinks from "../links/footer";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between px-11 py-5 border-t">
      <div>© 2023 Victor Mutai</div>
      <FooterLinks />
    </div>
  );
};

export default Footer;
