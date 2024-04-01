import Form from "../Form";
import Navigation from "../Navigation";

const Footer = ({ changeBack }) => {
  return (
  <footer className="relative py-[60px] sm:py-[80px] md:py-[100px] w-full text-white bg-dimgray-200">
    <div className="flex flex-wrap items-center md:items-start content-evenly flex-col md:flex-row content-center gap-[24px] lg:gap-0 max-w-[1280px] mx-auto px-[12px] xl:px-0 ">
      <div className="flex lg:flex-1 flex-col">
        <h2 className="mt-0 mb-[20px] text-center lg:text-start my-0 text-sm font-normal tracking-[2px] leading-[20px] uppercase">
          Pages
        </h2>
        <ul className="flex flex-col items-center lg:items-start gap-[16px] p-0 m-0 list-none text-sm">
          <Navigation count={6} />
        </ul>
      </div>
      <div className="lg:flex-1">
        <h2 className="mb-[20px] my-0 font-normal tracking-[2px] text-sm leading-[20px] uppercase">
          Social Media
        </h2>
        <ul className="flex gap-[20px] content-start m-0 p-0 list-none">
          <li>
            <a href="#" className="cursor-pointer">
              <img className="overflow-hidden h-8" alt="" src="/image-19.svg" />
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              <img className="overflow-hidden h-8" alt=""src="/image-20.svg" />
            </a>
          </li>
          <li>
           <a href="#" className="cursor-pointer">
            <img className="overflow-hidden h-8" alt="" src="/image-21.svg" />
           </a>
          </li>
        </ul>
      </div>
      <div className="text-center lg:text-start">
        <h2 className="mt-0 mb-[20px] my-0 font-normal tracking-[2px] text-sm leading-[20px] uppercase">
          Newsletter
        </h2>
        <Form className="flex-1" changeBack={changeBack} />
      </div>
      <div className="flex flex-col items-center gap-[20px] basis-[100%] text-center">
        <img
          className="w-[200px] h-[70px] overflow-hidden"
          alt=""
          src="/image-22.svg"
        />
        <p className="p-0 m-0 leading-[20px]">
            © Guest House, LLC. All rights reserved. Powered by webflow
        </p>
        <p className="p-0 m-0 leading-[20px]">
          +47 (0) 702 88 12 34 - example@webflow.io - Klubbvika 12, 8310 Kabelvag, Norway
        </p>
      </div>
        </div>
      </footer>
  );
}

export default Footer;
