import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="mt-auto py-10 grid grid-flow-col min-[320px]:text-ss md:text-sm bg-antiquewhite justify-around p-4 capitalize">
      <div>
        <h4>main manu</h4>
        <hr className="h-px border-0 bg-black my-4" />
        <div className="grid gap-2">
          <p>products</p>
          <p>about us</p>
          <p>contact us</p>
          <p>login / register</p>
        </div>
      </div>
      <div>
        <h4>more info</h4>
        <hr className="h-px border-0 bg-black my-4" />
        <div className="grid gap-2">
          <p>return & exchange policy</p>
          <p>privacy policy</p>
          <p>terms of service</p>
        </div>
      </div>
      <div>
        <h4>newsletter</h4>
        <hr className="h-px border-0 bg-black my-4" />
        <div className="grid gap-2">
          <p>follow us to get special offers.</p>
          <div className="relative flex items-center justify-end">
            <input
              placeholder="your-email@example.com"
              className="border border-slate-400 rounded-2xl p-2 pl-5 w-full md:w-80"
            />
            <button className="absolute mr-2 bg-shiba-yellow px-2 py-1 rounded-xl">
              join
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
