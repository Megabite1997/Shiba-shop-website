import React, { FC } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCopyright } from "react-icons/ai";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="mt-auto grid grid-flow-col min-[320px]:text-ss md:text-base bg-antiquewhite justify-around p-4">
      <div className="flex items-center">
        <p>Copyright</p>
        <AiOutlineCopyright />
        <p>2023 Tada & Shiba Inc. All rights reserved</p>
      </div>

      <div className="flex">
        <Link
          className="border-r border-white px-4 hover:underline"
          to="policy"
        >
          Privacy Policy
        </Link>
        <Link className="border-r border-white px-4 hover:underline" to="terms">
          Terms of Use
        </Link>
        <Link
          className="border-r border-white px-4 hover:underline"
          to="sales-and-refunds"
        >
          Sales and Refunds
        </Link>
        <Link className="border-r border-white px-4 hover:underline" to="legal">
          Legal
        </Link>
        <Link className="px-4 hover:underline" to="site-map">
          Site Map
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
