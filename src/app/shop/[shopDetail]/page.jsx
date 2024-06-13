"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { instance } from "@/app/axios/Api";
import { discountedPrice } from "@/components/ui/Discount";
import { addTwoFloat } from "@/components/ui/Floting";
import { FaHeart } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FiTwitter } from "react-icons/fi";

const page = () => {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();
  const [currentImage, setCurrentImage] = useState("");
  const [productDetails, setProductDetails] = useState([]);
  const [currentVariant, setCurrentVariant] = useState({});
  const [isActive, setIsActive] = useState(false);
  const params = useParams();
  const id = params.shopDetail;
  console.log(productDetails);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const addToWishList = async (id) => {
    try {
      const res = await instance.post("/wishlists", {
        variant_id: id,
      });
      console.log(res.data);
      toast.success(res?.data?.message);
    } catch (err) {
      console.log(err);
      if (err.response?.data?.message) {
        toast.error(err.response?.data?.message);
      } else {
        toast.error(err.message);
      }
    }
  };
  const removeWishlist = async (id) => {
    try {
      const res = await instance.delete(`/wishlists/${id}`);
      console.log(res.data);
      toast.success(res?.data?.message);
    } catch (err) {
      console.log(err);
      if (err.response?.data?.message) {
        toast.error(err.response?.data?.message);
      } else {
        toast.error(err.message);
      }
    }
  };

  const addToCart = async (id) => {
    try {
      const res = await instance.post("/carts", {
        variant_id: id,
      });
      console.log(res.data);
      router.push("/cart");
      toast.success(res?.data?.message);
    } catch (err) {
      if (err.response?.data?.message) {
        toast.error(err.response?.data?.message);
      } else {
        toast.error(err.message);
      }
    }
  };

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await instance.get(`/products/public/${id}`);
        console.log(res.data);
        setProductDetails(res.data);
        if (res.data) {
          setCurrentVariant(res.data.variants[0]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [id]);

  return (
    <div className="px-5 md:px-10">
      <div className="block md:flex py-2 md:py-8 gap-4 w-[100] md:divide-x">
        <div className="w-full md:w-[40%]">
          <div className="">
            {/* **********1-img********** */}
            <div className="relative">
              <div className="flex  justify-center">
                <div className=" w-auto border-2 border-light_gray  shadow-md">
                  <img
                    className="object-cover group-hover:scale-110 duration-1000 w-auto h-60 md:h-80"
                    src={currentImage ? currentImage : productDetails.thumbnail}
                    alt="logo"
                  />
                </div>
              </div>
              <div className="absolute p-2 top-5 right-2">
                <FaHeart
                  onClick={() => {
                    handleClick();
                    if (isActive) {
                      removeWishlist(currentVariant.variant_id);
                    } else {
                      addToWishList(currentVariant.variant_id);
                    }
                  }}
                  className={`size-5 ${isActive ? "text-red" : "text-gray"}`}
                />
              </div>
            </div>
            {/* **********2-img*********** */}
            <div className="flex justify-center gap-4">
              {productDetails?.image_urls?.map((item, i) => {
                return (
                  <div
                    onMouseEnter={() => {
                      setCurrentImage(item);
                    }}
                    key={i}
                    className={`p-1 rounded-md mt-8 cursor-pointer ${
                      currentImage === item
                        ? "border-2 border-orange "
                        : "border-2 border-light_gray "
                    }`}
                  >
                    <img src={item} alt="logo" className=" w-24 h-24 " />
                  </div>
                );
              })}
            </div>
            {/*******button***** */}
            <div className="flex mt-5 justify-center">
              <div>
                <div className="flex justify-between gap-4 mt-2">
                  <button className="bg-orange mt-2 md:mt-0 hover:bg-black duration-1000 text-white rounded-md px-3 md:px-7 py-2">
                    Buy Now
                  </button>
                  <button
                    onClick={() => addToCart(currentVariant.variant_id)}
                    className="bg-orange mt-2 md:mt-0 hover:bg-black duration-1000 text-white rounded-md px-3 md:px-7 py-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* **********second-part */}
        <div className="w-full md:w-[60%] mt-7  md:mt-0 px-4">
          <div className="flex justify-between border-b-2 border-light_gray">
            <h1 className="font-semibold text-xl py-2">
              {currentVariant?.name
                ? currentVariant?.name
                : productDetails.name}
            </h1>
            <div
              onMouseEnter={() => {
                setIsShow(true);
              }}
              onMouseLeave={() => {
                setIsShow(false);
              }}
            >
              <div className="relative flex gap-1 cursor-pointer items-center hover:text-blue">
                <IoMdShareAlt className="size-5" />
                <h1>Share</h1>
              </div>
              {isShow && (
                <div className="absolute shadow-lg rounded-md right-8 p-2">
                  <div className="flex gap-2 cursor-pointer">
                    <MdOutlineMailOutline className="text-red size-8" />
                    <IoLogoWhatsapp className="text-green size-7" />
                    <FiTwitter className="text-blue size-7" />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* ************price******** */}
          <div className="flex gap-8 bg-light_gray px-2 ">
            <div className="flex justify-center  gap-3 py-4">
              <p className="">
                <span className="font-semibold"> Price: </span> &#8377;$
                {discountedPrice(currentVariant.price, currentVariant.discount)}
              </p>
              {currentVariant.discount > 0 && (
                <p className="text-gray line-through">
                  &#8377;${addTwoFloat(currentVariant.price)}
                </p>
              )}
            </div>
            <p className="py-4">
              <span className="font-semibold"> Discount:</span>{" "}
              {currentVariant.discount}%
            </p>
          </div>
          {/* **************All variants*************** */}
          <div className="flex gap-5">
            {productDetails?.variants?.map((variant, i) => {
              return (
                <div key={i} className="">
                  {/* ************************* */}
                  <div
                    onClick={() => setCurrentVariant(variant)}
                    className={`border-2 border-gray gap-4 p-2 rounded-md border-b-2 mt-4 pb-2 ${
                      currentVariant.name === variant.name && "bg-light_gray"
                    }`}
                  >
                    <p>{variant.name}</p>
                    <p className="text-gray">{variant.product_code}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* ********dis*** */}
          <div className="mt-10 ">
            <h1 className="text-lg font-semibold">Description</h1>
            <p>{productDetails.description}</p>
          </div>
        </div>
      </div>
      <hr></hr>
      {/* **************similar product******************** */}{" "}
      <div className="hidden xl:mt-8 xl:block">
        <h3 className="text-2xl font-semibold text-gray-900 ">
          Similar Product
        </h3>
        <div className="mt-6 grid grid-cols-4 gap-4 sm:mt-8">
          <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 ">
            <a href="#" className="overflow-hidden rounded">
              <img
                className="mx-auto hidden h-44 w-44 dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                alt="imac image"
              />
            </a>
            <div>
              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray hover:underline "
              >
                iMac 27”
              </a>
              <p className="mt-2 text-base font-normal text-gray-500 ">
                This generation has some improvements, including a longer
                continuous battery life.
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray ">
                <span className="line-through"> $399,99 </span>
              </p>
              <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                $299
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              <button
                data-tooltip-target="favourites-tooltip-1"
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-light_gray hover:text-blue focus:z-10 focus:outline-none focus:ring-4 focus:ring-light_gray"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  ></path>
                </svg>
              </button>
              <div
                id="favourites-tooltip-1"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 "
              >
                Add to favourites
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-lg bg-blue px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
              >
                Show More
              </button>
            </div>
          </div>
          <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 ">
            <a href="#" className="overflow-hidden rounded">
              <img
                className="mx-auto hidden h-44 w-44 dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                alt="imac image"
              />
            </a>
            <div>
              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray hover:underline "
              >
                iMac 27”
              </a>
              <p className="mt-2 text-base font-normal text-gray-500 ">
                This generation has some improvements, including a longer
                continuous battery life.
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray ">
                <span className="line-through"> $399,99 </span>
              </p>
              <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                $299
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              <button
                data-tooltip-target="favourites-tooltip-1"
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-light_gray hover:text-blue focus:z-10 focus:outline-none focus:ring-4 focus:ring-light_gray"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  ></path>
                </svg>
              </button>
              <div
                id="favourites-tooltip-1"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 "
              >
                Add to favourites
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-lg bg-blue px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
              >
                Show More
              </button>
            </div>
          </div>
          <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 ">
            <a href="#" className="overflow-hidden rounded">
              <img
                className="mx-auto hidden h-44 w-44 dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                alt="imac image"
              />
            </a>
            <div>
              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray hover:underline "
              >
                iMac 27”
              </a>
              <p className="mt-2 text-base font-normal text-gray-500 ">
                This generation has some improvements, including a longer
                continuous battery life.
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray ">
                <span className="line-through"> $399,99 </span>
              </p>
              <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                $299
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              <button
                data-tooltip-target="favourites-tooltip-1"
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-light_gray hover:text-blue focus:z-10 focus:outline-none focus:ring-4 focus:ring-light_gray"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  ></path>
                </svg>
              </button>
              <div
                id="favourites-tooltip-1"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 "
              >
                Add to favourites
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-lg bg-blue px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
              >
                Show More
              </button>
            </div>
          </div>
          <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 ">
            <a href="#" className="overflow-hidden rounded">
              <img
                className="mx-auto hidden h-44 w-44 dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                alt="imac image"
              />
            </a>
            <div>
              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray hover:underline "
              >
                iMac 27”
              </a>
              <p className="mt-2 text-base font-normal text-gray-500 ">
                This generation has some improvements, including a longer
                continuous battery life.
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray ">
                <span className="line-through"> $399,99 </span>
              </p>
              <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                $299
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              <button
                data-tooltip-target="favourites-tooltip-1"
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-light_gray hover:text-blue focus:z-10 focus:outline-none focus:ring-4 focus:ring-light_gray"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  ></path>
                </svg>
              </button>
              <div
                id="favourites-tooltip-1"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 "
              >
                Add to favourites
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-lg bg-blue px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
              >
                Show More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* *************recently viewed************* */}
      <div className="hidden xl:mt-8 xl:block py-4">
        <h3 className="text-2xl font-semibold text-gray-900 ">
          Recently Viewed
        </h3>
        <div className="mt-6 grid grid-cols-4 gap-4 sm:mt-8">
          <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 ">
            <a href="#" className="overflow-hidden rounded">
              <img
                className="mx-auto hidden h-44 w-44 dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                alt="imac image"
              />
            </a>
            <div>
              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray hover:underline "
              >
                iMac 27”
              </a>
              <p className="mt-2 text-base font-normal text-gray-500 ">
                This generation has some improvements, including a longer
                continuous battery life.
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray ">
                <span className="line-through"> $399,99 </span>
              </p>
              <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                $299
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              <button
                data-tooltip-target="favourites-tooltip-1"
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-light_gray hover:text-blue focus:z-10 focus:outline-none focus:ring-4 focus:ring-light_gray"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  ></path>
                </svg>
              </button>
              <div
                id="favourites-tooltip-1"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 "
              >
                Add to favourites
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-lg bg-blue px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
              >
                Show More
              </button>
            </div>
          </div>
          <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 ">
            <a href="#" className="overflow-hidden rounded">
              <img
                className="mx-auto hidden h-44 w-44 dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                alt="imac image"
              />
            </a>
            <div>
              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray hover:underline "
              >
                iMac 27”
              </a>
              <p className="mt-2 text-base font-normal text-gray-500 ">
                This generation has some improvements, including a longer
                continuous battery life.
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray ">
                <span className="line-through"> $399,99 </span>
              </p>
              <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                $299
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              <button
                data-tooltip-target="favourites-tooltip-1"
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-light_gray hover:text-blue focus:z-10 focus:outline-none focus:ring-4 focus:ring-light_gray"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  ></path>
                </svg>
              </button>
              <div
                id="favourites-tooltip-1"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 "
              >
                Add to favourites
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-lg bg-blue px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
              >
                Show More
              </button>
            </div>
          </div>
          <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 ">
            <a href="#" className="overflow-hidden rounded">
              <img
                className="mx-auto hidden h-44 w-44 dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                alt="imac image"
              />
            </a>
            <div>
              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray hover:underline "
              >
                iMac 27”
              </a>
              <p className="mt-2 text-base font-normal text-gray-500 ">
                This generation has some improvements, including a longer
                continuous battery life.
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray ">
                <span className="line-through"> $399,99 </span>
              </p>
              <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                $299
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              <button
                data-tooltip-target="favourites-tooltip-1"
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-light_gray hover:text-blue focus:z-10 focus:outline-none focus:ring-4 focus:ring-light_gray"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  ></path>
                </svg>
              </button>
              <div
                id="favourites-tooltip-1"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 "
              >
                Add to favourites
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-lg bg-blue px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
              >
                Show More
              </button>
            </div>
          </div>
          <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 ">
            <a href="#" className="overflow-hidden rounded">
              <img
                className="mx-auto hidden h-44 w-44 dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                alt="imac image"
              />
            </a>
            <div>
              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray hover:underline "
              >
                iMac 27”
              </a>
              <p className="mt-2 text-base font-normal text-gray-500 ">
                This generation has some improvements, including a longer
                continuous battery life.
              </p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray ">
                <span className="line-through"> $399,99 </span>
              </p>
              <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
                $299
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              <button
                data-tooltip-target="favourites-tooltip-1"
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-light_gray hover:text-blue focus:z-10 focus:outline-none focus:ring-4 focus:ring-light_gray"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  ></path>
                </svg>
              </button>
              <div
                id="favourites-tooltip-1"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 "
              >
                Add to favourites
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-lg bg-blue px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 "
              >
                Show More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
