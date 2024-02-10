// import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneOutbound } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import CoverBanner from "./CoverBanner";
// import { toast } from "react-toastify";

const Contact = () => {
  return (
    <div className="">
      <CoverBanner
        title="CONTACT US"
        subTitle="Don't hesitate to tell us"
        isTop={true}
        bgUrl="/shop/banner2.jpg"
      ></CoverBanner>
      <div className="w-[85%] mx-auto my-20 flex flex-col md:flex-row gap-10 md:gap-0">
        <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/2">
          <div className="flex gap-5">
            <BsTelephoneOutbound className="text-4xl"></BsTelephoneOutbound>
            <div className="">
              <p className="text-2xl mb-3">Give us a Call</p>
              <p className="text-slate-500">+254 2136 2541</p>
              <p className="text-slate-500">+134 6354 3453</p>
            </div>
          </div>

          <div className="flex gap-5">
            <AiOutlineMail className="text-4xl"></AiOutlineMail>
            <div className="">
              <p className="text-2xl mb-3">Send us an E-mail</p>
              <p className="text-slate-500">info@jobnest.org</p>
            </div>
          </div>

          <div className="flex gap-5">
            <CiLocationOn className="text-4xl"></CiLocationOn>
            <div className="">
              <p className="text-2xl mb-3">Location</p>
              <p className="text-slate-500">House 27, Road 8</p>
              <p className="text-slate-500">Gulshan, Dhaka 1212</p>
              <p className="text-slate-500">Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <form className="space-y-4">
            <input
              className="focus:outline-none px-6 py-5 bg-transparent border w-full"
              placeholder="Name"
              type="text"
              name="name"
              required
            />
            <input
              className="focus:outline-none px-6 py-5 bg-transparent border w-full"
              placeholder="Company"
              type="text"
              name="company"
              required
            />
            <input
              className="focus:outline-none px-6 py-5 bg-transparent border w-full"
              placeholder="E-mail"
              type="email"
              name="email"
              required
            />
            <input
              className="focus:outline-none px-6 py-5 bg-transparent border w-full"
              placeholder="Phone"
              type="text"
              name="phone"
              required
            />
            <textarea
              className="focus:outline-none px-6 py-5 bg-transparent border w-full"
              placeholder="Message"
              rows="10"
              name="message"
              required
            ></textarea>
            <button className="block mx-auto bg-theme px-4 py-2 rounded-full border-2 border-black font-semibold duration-300 active:scale-90">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
