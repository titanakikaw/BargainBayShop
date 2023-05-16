import React from "react";

const Footer = () => {
  return (
    <div style={{ height: "342px", backgroundColor: "#1B1B1B" }}>
      <div className="mx-auto max-w-7xl px-2 py-11 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <p className="text-xl font-hanalei text-baseColor tracking-wider">
            Quick Links
          </p>
          <div className="mt-2">
            <p className="font-hanalei text-xs text-white py-2">Sample Link</p>
            <p className="font-hanalei text-xs text-white py-2">Sample Link</p>
            <p className="font-hanalei text-xs text-white py-2">Sample Link</p>
            <p className="font-hanalei text-xs text-white py-2">Sample Link</p>
            <p className="font-hanalei text-xs text-white py-2">Sample Link</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-hanalei text-baseColor tracking-wider">
            Contact Us
          </p>
          <div className="mt-2">
            <p className="font-hanalei text-xs text-white py-2">
              LOCATION : 109th TOWER sdasdasd,
              <br /> ASDSA HJSAD ILKASJD CITy
            </p>
            <p className="font-hanalei text-xs text-white py-2">
              PHONE NUMBER : +639123456789
            </p>
            <p className="font-hanalei text-xs text-white py-2">
              EMAIL : BArgainbay@GMAIL.com
            </p>
            <p className="font-hanalei text-xs text-white py-2"></p>
            <p className="font-hanalei text-xs text-white py-2"></p>
          </div>
        </div>
        <div>
          <p className="text-xl font-hanalei text-baseColor text-5xl">
            Bargain Bay
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
