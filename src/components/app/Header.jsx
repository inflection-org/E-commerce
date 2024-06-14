"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import logo from "../../../public/product/i.png";
import { CgProfile } from "react-icons/cg";
import { IoIosCart } from "react-icons/io";
import MenuDropdown from "../ui/MenuDropdown";
import { FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { MyContext } from "@/context/MyContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLogin, myCart, myWishList } = useContext(MyContext);
  return (
    <div className="sticky top-0 z-30 shadow-md">
      {/* ********1********* */}
      <div className="flex bg-white justify-between gap-3 py-2 px-5 sm:px-10 items-center">
        <Link href="/" className="flex items-center gap-1">
          <Image src={logo} width={50} height={50} alt="logo" />
          <h1 className="text-lg">
            <span className="font-bold">JITENDRA</span>SHOP
          </h1>
        </Link>

        {/*Search-box*/}
        <div>
          <div className="hidden md:block md:w-96">
            <div className="relative flex w-full flex-wrap">
              <input
                type="text"
                className="relative m-0 -mr-0.5 block flex-auto rounded-l-full px-3 py-[0.25rem] text-base font-normal leading-[1.6] focus:outline-none transition duration-200 ease-in-out focus:ring-0"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
              />
              <button
                className="relative z-[2] flex items-center rounded-r-full  px-6 py-2.5 text-xs font-medium leading-tight text-white bg-black hover:bg-orange transition duration-150 ease-in-out"
                type="button"
                id="button-addon1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* *****Profile and Cart button******* */}
        <div className="flex items-center gap-2">
          <div>
            {isLogin ? (
              <Link href="/profile">
                <CgProfile className="text-2xl" />
              </Link>
            ) : (
              <Link
                href="/login"
                className="text-sm bg-orange md:mt-0 hover:bg-black duration-1000 text-white px-4 py-2 rounded-md "
              >
                Login
              </Link>
            )}
          </div>
          <div className="hidden md:block">
            <Link href="/profile?wishlist">
              <div className="p-2 text-gray hover:text-red relative">
                <FaRegHeart className="text-xl" />
                <p className="text-sm font-medium absolute top-0 right-0">
                  {myWishList?.length > 0 && myWishList?.length}
                </p>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/cart">
              <div className="p-2 text-gray hover:text-green relative">
                <IoIosCart className="text-xl" />
                <p className="text-sm font-medium absolute top-0 right-0">
                  {myCart?.length > 0 && myCart?.length}
                </p>
              </div>
            </Link>
          </div>
          {/* *******menu button mobile******** */}
          <div className="text-2xl cursor-pointer md:hidden">
            {!isOpen ? (
              <button
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <IoMenu />
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <IoClose />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Menu (2) Section */}
      <div className="hidden md:flex gap-24 bg-white px-5 sm:px-10 items-center border-t-2 border-pink">
        <MenuDropdown />
        <ul className="flex gap-5 text-black uppercase">
          <li className="text-gray hover:text-orange cursor-pointer text-base font-medium">
            <Link href="/">HOME</Link>
          </li>
          <li className="text-gray hover:text-orange cursor-pointer text-base font-medium">
            {/* <ShopDropdown /> */}
            <Link href="/shop">PRODUCTS</Link>
          </li>
          <li className="text-gray hover:text-orange cursor-pointer text-base font-medium">
            <Link href="/about">ABOUT US</Link>
          </li>

          <li className="text-gray hover:text-orange cursor-pointer text-base font-medium">
            <Link href="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div
        className={`block md:hidden absolute h-screen w-[60%] bg-white ${
          isOpen
            ? "-translate-x-[0%] md:translate-x-[0%] transition-all ease-in duration-[0.5s]"
            : "-translate-x-[100%] md:translate-x-[0%] transition-all ease-in duration-[0.5s]"
        }`}
      >
        <div className="p-5">
          {!isLogin && (
            <button className="px-6 py-2 border-2 border-orange hover:bg-orange font-medium hover:text-white duration-300 rounded-lg mb-3">
              <Link href="/sign_up">Login/SignUp</Link>
            </button>
          )}
          <ul className="flex flex-col justify-center w-full gap-1.5">
            <li className="text-gray hover:text-orange text-lg uppercase">
              <Link
                onClick={() => {
                  setIsOpen(false);
                }}
                href="/"
              >
                HOME
              </Link>
            </li>
            <li className="text-gray hover:text-orange text-lg uppercase">
              {/* <ShopDropdown /> */}
              <Link
                onClick={() => {
                  setIsOpen(false);
                }}
                href="/shop"
              >
                PRODUCTS
              </Link>
            </li>
            <li className="text-gray hover:text-orange text-lg uppercase">
              <Link
                onClick={() => {
                  setIsOpen(false);
                }}
                href="/about"
              >
                ABOUT US
              </Link>
            </li>

            <li className="text-gray hover:text-orange text-lg uppercase">
              <Link
                onClick={() => {
                  setIsOpen(false);
                }}
                href="/contact"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
