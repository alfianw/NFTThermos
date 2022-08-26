import React from "react";
import Content from "./NftFooterCardContent";
import "../style/footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="card-footer">
        <Content />
      </div>
      <div className="copyright">
        <h1>© 2018 - 2022 NFTThermos, Inc</h1>
      </div>
    </div>
  );
};

export default Footer;
