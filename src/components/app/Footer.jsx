import React from "react";
import Image from "next/image";
import logo from "../../../public/product/i.png";
import payPal from "../../../public/Paypal.webp";
import visa from "../../../public/visa.webp";
import mastercard from "../../../public/mastercard.webp";
import cash from "../../../public/cash.webp";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

function Footer() {
  return (
    <div className="px-5 sm:px-10 py-10 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 text-white ">
        {/* ****1***** */}
        <div>
          <div className="flex items-center gap-1">
            <Image src={logo} width={50} height={50} alt="logo" />
            <h1 className="text-lg pb-4">
              <span className="font-bold">JITENDRA</span>SHOP
            </h1>
          </div>
          <ul className="mb-3">
            <li className="flex gap-1 items-center pb-1.5 text-gray">
              <IoLocation className="text-xl" />
              <span className="text-sm">
                Lorem ipsum dolor adipisicing elit.
              </span>
            </li>
            <li className="flex gap-1 items-center pb-1.5 hover:text-orange text-gray">
              <IoMdCall className="text-xl" />
              <a href="tel:+91 423 208 388" className="text-sm">
                +91 423 208 388
              </a>
            </li>
            <li className="flex gap-1 items-center pb-1.5 hover:text-orange text-gray">
              <MdEmail className="text-xl" />
              <a href="mailto:hello@metashop.com" className="text-sm">
                hello@metashop.com
              </a>
            </li>
          </ul>
          <div className="flex gap-3">
            <a
              target="_blank"
              href="https://www.facebook.com/"
              className="border-2 border-pink hover:bg-pink text-pink hover:text-orange duration-300 rounded-full p-2"
            >
              <GrFacebookOption className="text-lg" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="border-2 border-pink hover:bg-pink text-pink hover:text-orange duration-300 rounded-full p-2"
            >
              <GrInstagram className="text-lg" />
            </a>
            <a
              target="_blank"
              href="https://x.com/"
              className="border-2 border-pink hover:bg-pink text-pink hover:text-orange duration-300 rounded-full p-2"
            >
              <FaTwitter className="text-lg" />
            </a>
          </div>
        </div>
        {/* ***2**** */}
        <div>
          <h1 className="text-lg font-semibold pb-4">Quick Links</h1>
          <ul>
            <li className="hover:text-orange mb-1.5 text-gray">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-orange mb-1.5 text-gray">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-orange mb-1.5 text-gray">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:text-orange mb-1.5 text-gray">
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        {/* *****3*** */}
        <div>
          <h1 className="text-lg font-semibold pb-4">My Account</h1>
          <ul>
            <li className="hover:text-orange mb-1.5 text-gray">
              <Link href="/profile">My Account</Link>
            </li>
            <li className="hover:text-orange mb-1.5 text-gray">
              <Link href="/profile?wishlist">Wishlist</Link>
            </li>
            <li className="hover:text-orange mb-1.5 text-gray">
              <Link href="/order">Orders</Link>
            </li>
            <li className="hover:text-orange mb-1.5 text-gray">
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        {/* ****4*** */}
        <div>
          <h1 className="text-lg font-semibold pb-4">Support</h1>
          <ul>
            <li className="hover:text-orange mb-1.5 text-gray">
              <Link href="/return_and_refund_policy">
                Return & Refound Policy
              </Link>
            </li>
            <li className="hover:text-orange mb-1.5 text-gray">
              <Link href="/terms_and_conditions">Terms & Condition</Link>
            </li>
            <li className="hover:text-orange mb-1.5 text-gray">
              <Link href="/privacy_policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        {/* ****5**** */}
        <div>
          <h1 className="text-lg font-semibold pb-4"> Newsletter</h1>
          <p className="hover:text-orange text-gray">
            Subscribe to our newsletter and get 20% off your first purchase
          </p>
          {/* ******email-box */}
          <div className="md:w-72 pt-4">
            <div className="relative  flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-full  border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
              />
              {/* <!--Search button--> */}
              <button
                className="relative z-[2] flex items-center rounded-r-full px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white hover:text-black hover:bg-white bg-orange shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray my-5 w-full" />
      <div className="flex flex-col sm:flex-row gap-5 justify-between text-white">
        <div className="flex gap-1 items-center">
          <AiFillCopyrightCircle className="text-white size-5" />
          <p>2024 Inflection ORG All Rights Reserve.</p>
        </div>
        <div className="flex gap-2.5 items-center">
          <Image src={payPal} width={55} height={55} alt="logo" />
          <Image src={visa} width={55} height={55} alt="logo" />
          <Image src={mastercard} width={55} height={55} alt="logo" />
          <Image src={cash} width={55} height={55} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
