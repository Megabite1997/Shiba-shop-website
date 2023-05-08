import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="mt-auto py-10 grid grid-cols-2 lg:grid-cols-3 gap-10 min-[320px]:text-ss md:text-sm bg-white justify-around p-4 capitalize">
      <div>
        <h4>main manu</h4>
        <hr className="h-px border-0 bg-black my-4" />
        <div className="grid gap-4">
          <p>products</p>
          <p>about us</p>
          <p>contact us</p>
          <p>login / register</p>
        </div>
      </div>

      <div>
        <h4>more info</h4>
        <hr className="h-px border-0 bg-black my-4" />
        <div className="grid gap-4">
          <p>return & exchange policy</p>
          <p>privacy policy</p>
          <p>terms of service</p>
        </div>
      </div>

      <div className="col-span-2 md:col-span-1">
        <h4>newsletter</h4>
        <hr className="h-px border-0 bg-black my-4" />
        <div className="grid gap-4">
          <p>follow us to get special offers.</p>
          <div className="relative flex items-center justify-end">
            <input
              placeholder="your-email@example.com"
              className="border border-slate-400 rounded-2xl p-2 pl-5 w-full"
            />
            <button className="absolute mr-2 bg-shiba-yellow px-6 py-1 rounded-xl">
              join
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
