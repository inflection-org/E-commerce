"use client";
import React, { useEffect, useContext } from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import logo from "../../../public/product/i.png";
import { CgProfile } from "react-icons/cg";
import { IoIosCart } from "react-icons/io";
import MenuDropdown from "../ui/MenuDropdown";
import ShopDropdown from "../ui/ShopDropdown";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { MyContext } from "@/context/MyContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLogin } = useContext(MyContext);

  return (
    <div className="sticky top-0 z-30 shadow-md">
      {/* ********1********* */}
      <div className="flex bg-white md:px-10 justify-between md:h-20 py-2 items-center">
        <Link href="/" className="flex items-center gap-1">
          <Image src={logo} width={50} height={50} alt="logo" />
          <h1 className="text-lg">
            <span className="font-bold">JITENDRA</span>SHOP
          </h1>
        </Link>
        {/*Search-box*/}
        <div>
          <div className="hidden md:block md:w-96">
            <div className="relative  flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l-full  border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon1"
              />

              {/* <!--Search button--> */}

              <button
                className="relative z-[2] flex items-center rounded-r-full  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white bg-black hover:bg-orange shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
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
        {/* *****cart*** */}
        <div className="hidden md:flex items-center gap-6">
          {isLogin ? (
            <Link href="/profile">
              <CgProfile className="w-8 h-8" />
            </Link>
          ) : (
            <Link
              href="/login"
              className="text-sm bg-orange md:mt-0 hover:bg-black duration-1000 text-white px-4 py-2 rounded-md "
            >
              Login
            </Link>
          )}
          <Link href="/cart">
            <div className="flex gap-1 items-center bg-light_gray p-2 rounded-lg">
              <IoIosCart className="w-6 h-6" />
              <div className="flex justify-center items-center  text-black rounded-full">
                0
              </div>
            </div>
          </Link>
        </div>
        {/* *******menu button mobile******** */}
        <div className="text-2xl mr-3 cursor-pointer md:hidden  ">
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
      <hr className="text-light_gray"></hr>
      {/* ************2******* */}
      <div className="md:flex z-50 relative  bg-white  md:px-10  items-center h-12">
        <div className="hidden md:block">
          <MenuDropdown />
        </div>
        {/* ******li-item****** */}
        <div
          className={`md:flex bg-light_gray md:ml-60 md:bg-white h-screen md:h-auto ${
            isOpen
              ? "-translate-x-[0%] md:translate-x-[0%] transition-all ease-in duration-[0.5s]"
              : "-translate-x-[100%] md:translate-x-[0%] transition-all ease-in duration-[0.5s]"
          }`}
        >
          <div className="block md:hidden">
            <div className="w-full flex justify-center  pt-5">
              <ul
                onClick={() => {
                  setIsOpen(false);
                }}
                className="flex items-center gap-5"
              >
                <li className="bg-white px-6 py-2 hover:bg-orange hover:text-white duration-1000 rounded-lg">
                  <Link href="/login">Login</Link>
                </li>

                <li className="bg-white px-6 hover:bg-orange hover:text-white duration-1000 py-2 rounded-lg">
                  <Link href="signUp">SignUp</Link>
                </li>
              </ul>
            </div>
          </div>
          <ul
            onClick={() => {
              setIsOpen(false);
            }}
            className="md:flex  gap-6 ml-10 z-50 pt-6 md:pt-0 md:ml-0 text-black "
          >
            <li className="hover:text-orange  text-xl md:text-base  pt-2 md:pt-0">
              <Link href="/">HOME</Link>
            </li>
            <li className="w-28 text-xl md:text-base pt-2 md:pt-0">
              <ShopDropdown />
            </li>

            <li className="hover:text-orange  cursor-pointer text-xl md:text-base  pt-3 md:pt-0">
              NEW ARRIVALS
            </li>
            <li className="hover:text-orange  cursor-pointer text-xl md:text-base  pt-3 md:pt-0">
              <Link href="/about">ABOUT US</Link>
            </li>

            <li className="hover:text-orange cursor-pointer text-xl md:text-base  pt-3 md:pt-0">
              <Link href="/contact" className="pt-3 md:pt-0">
                CONTACT US
              </Link>
            </li>
            <li className="block md:hidden cursor-pointer   hover:text-orange  text-xl md:text-base  pt-3 md:pt-0">
              <Link href="/profile" className="pt-3 md:pt-0">
                PROFILE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
