import React from "react";
import { Select, Space } from "antd";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="container mx-auto py-20">
      <div className=" flex justify-between flex-wrap gap-10 px-4">
        <div className="sm:w-[320px] w-full">
          <h1 className="font-bold text-4xl flex flex-col">
            <span className="text-[#082640]">Easy</span>
            <span className="text-[#016BFF]">ahead </span>
          </h1>
          <p className="md:text-base text-gray-500 mt-5 capitalize">
            we take the work out of connecting with oters so you can accomplish
            more.
          </p>
          <Select
            defaultValue="English"
            style={{ width: 120 }}
            onChange={handleChange}
            className="!w-[250px] my-10"
            options={[
              { value: "English", label: "English" },
              { value: "Bangla", label: "Bangla " },
            ]}
          />
          <div className="flex gap-3">
            <img
              src="/appstore.jpg"
              alt="appstore"
              className="rounded-md h-[40px] md:w-[150px] w-[100px]"
            />
            <img
              src="/playtstore.png"
              alt="playstore"
              className="rounded-md h-[40px] md:w-[150px] w-[100px]"
            />
          </div>
          <div className="mt-10 flex gap-8">
            <FaTwitter className="text-2xl" />
            <FaFacebookF className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaLinkedinIn className="text-2xl" />
            <CiYoutube className="text-2xl" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[#082640] text-xl font-bold capitalize">About</h3>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500 "
          >
            about calendly{" "}
          </a>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            contact sales newsroom{" "}
          </a>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            careers
          </a>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            security{" "}
          </a>
          <h3 className="text-[#082640] text-xl font-bold capitalize">
            support
          </h3>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            help center{" "}
          </a>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            video tutorials{" "}
          </a>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            cookie settings{" "}
          </a>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[#082640] text-xl font-bold capitalize">
            solutions
          </h3>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500 "
          >
            customer success{" "}
          </a>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            sales{" "}
          </a>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            recruiting
          </a>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            information technology{" "}
          </a>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            marketing{" "}
          </a>
          <h3 className="text-[#082640] text-xl font-bold capitalize">
            add-ons
          </h3>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            download for chrome{" "}
          </a>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            download for firefox{" "}
          </a>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[#082640] text-xl font-bold capitalize">
            popular features
          </h3>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500 "
          >
            embed calendly{" "}
          </a>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            availability{" "}
          </a>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            sending notifications
          </a>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            using calendly mobile{" "}
          </a>
          <h3 className="text-[#082640] text-xl font-bold capitalize">
            developer
          </h3>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            download for chrome{" "}
          </a>
          <a
            href="#"
            className="text-gray-500 text-base font-bold capitalize hover:text-[#082640] duration-500"
          >
            developer tools{" "}
          </a>
        </div>
      </div>
      <div className="mt-14 flex flex-col md:flex-row justify-between items-center">
        <h5 className="md:text-sm text-xs text-gray-500 capitalize">
          Copyright calendly 2022
        </h5>
        <h5 className="md:text-sm text-xs text-gray-500 capitalize">
          privacy / terms and conditions
        </h5>
      </div>
    </div>
  );
};

export default Footer;
