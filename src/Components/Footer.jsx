import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="font-inter text-white">
      <div className="flex">
        <div className="flex-1 bg-[#1F2937] flex flex-col items-center gap-3 py-20">
          <p className="text-2xl font-medium">Contact Us</p>
          <p className="text-center">
            123 ABS Street, Uni 21, Bangladesh <br />
            +88 123456789 <br />
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="flex-1 bg-[#101726] flex flex-col items-center gap-3 py-20">
          <p className="text-2xl font-medium">Follow Us</p>
          <p>Join us on social media</p>
          <div className="flex gap-5">
            <FaFacebookF className="text-2xl"></FaFacebookF>
            <BsInstagram className="text-2xl"></BsInstagram>
            <BsTwitter className="text-2xl"></BsTwitter>
          </div>
        </div>
      </div>
      <div className="bg-black py-2">
        <p className="text-sm font-medium text-center">
          Copyright © CulinaryCloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
