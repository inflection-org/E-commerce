"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ui/cards/ProductCard";
import { Fragment } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { instance } from "../axios/Api";
import { useRouter } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Link from "next/link";

const Shop = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const [categoryTag, setCategoryTag] = useState([]);
  const [sortName, setSortName] = useState("");
  const [catName, setCatName] = useState("");

  const seeDetails = (product_id) => {
    router.push(`/shop/${product_id}`);
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await instance.get(
          `/products/public?limit=5&page=${
            searchParams.get("page") || 1
          }&sort=price_desc&tags=popular`
        );
        setAllProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchProduct();
    async function fetchCategory() {
      try {
        const res = await instance.get("/categories/list");
        setCategoryTag(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCategory();
  }, [searchParams]);

  const sortOptions = [
    { name: "Popularity", href: "?sort=popularity", current: true },
    { name: "Relevance", href: "?sort=relevance", current: false },
    { name: "Price: Low to High", href: "?sort=price_asc", current: false },
    { name: "Price: High to Low", href: "?sort=price_desc", current: false },
  ];
  // const subCategories = [
  //   { name: 'Totes' },
  //   { name: 'Backpacks' },
  //   { name: 'Travel Bags' },
  //   { name: 'Hip Bags' },
  //   { name: 'Laptop Sleeves' },
  // ]
  const filters = [
    {
      id: "category",
      name: "Category",
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="px-5 md:px-10">
      <div className="bg-white w-full">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium">Filters</h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 "
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <IoMdClose className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/********************** * Filters Mobile************************************************************************** */}
                    <form className="mt-4 border-t border-gray-200 ">
                      {/* <h3 className='sr-only'>Categories</h3>
                      <ul role='list' className='px-2 py-3 font-medium'>
                        {subCategories.map((category) => (
                          <li
                            key={category.name}
                            value=''
                            className='cursor-pointer'
                          >
                            <a
                              onClick={() => setCatName(category.name)}
                              // href={category.href}
                              className='block px-2 py-3 '
                            >
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul> */}

                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3">
                                  <span className="font-medium">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <FaMinus
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <FaPlus
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {categoryTag.map((option) => (
                                    <div
                                      key={option.id}
                                      className="flex items-center"
                                    >
                                      <input
                                        value={option.id}
                                        type="radio"
                                        name="btn"
                                        onClick={() =>
                                          router.push(
                                            `?category_id=${option.id}`
                                          )
                                        }
                                        className="h-4 w-4 border-gray text-blue"
                                      />
                                      <label className="ml-3 text-sm text-gray">
                                        {option.name}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
          {/* ***********************************************short-name********************************************************** */}
          <main className="mx-auto">
            <div className="flex items-baseline justify-between border-b border-gray pb-6 pt-24">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">
                All Products
              </h1>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-black hover:text-gray">
                      Sort
                      <IoIosArrowDown
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-black  group-hover:text-gray"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      // onClick={(e) => {
                      //   handleSubmit(e.target.value)
                      // }}
                      className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <div className="py-1" value="">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <Link
                                value={option.name}
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-black"
                                    : "text-black",
                                  active ? "bg-gray" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                                onClick={() =>
                                  router.push(`?category_id=${option.href}`)
                                }
                              >
                                {option.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray hover:text-black sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <CiFilter className="text-2xl" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="py-10">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  {/* <h3 className='sr-only'>Categories</h3>
                  <ul
                    role='list'
                    className='space-y-4 border-b border-black pb-6 text-sm font-medium text-black'
                  >
                    {subCategories.map((category) => (
                      <li
                        key={category.name}
                        value=''
                        className='hover:bg-gray cursor-pointer py-2 px-2'
                        onClick={() => setCatName(category.name)}
                      >
                        <a href={category.href}>{category.name}</a>
                      </li>
                    ))}
                  </ul> */}

                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-black py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-light_black hover:text-black">
                              <span className="font-medium text-light_black">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <FaMinus
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <FaPlus
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          {/* ****************************************Category-laptop**************************************** */}
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {categoryTag.map((option) => (
                                <div
                                  key={option.id}
                                  className="flex items-center"
                                >
                                  <input
                                    value={option.id}
                                    type="radio"
                                    name="btn"
                                    onClick={() =>
                                      router.push(`?category_id=${option.id}`)
                                    }
                                    className="h-4 w-4 border-gray text-blue"
                                  />
                                  <label className="ml-3 text-sm text-gray">
                                    {option.name}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3 ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full  gap-3">
                    {allProduct.length > 0 ? (
                      allProduct?.map((product, index) => (
                        <ProductCard
                          toto={() => seeDetails(product.product_id)}
                          pic={product.thumbnail}
                          name={product.product_name}
                          description={product.product_description}
                          price={product.price}
                          discount={product.discount}
                          key={index}
                          variantId={product.variant_id}
                        />
                      ))
                    ) : (
                      <>
                        <div className="flex justify-center items-center h-screen w-full">
                          <div>
                            <h2 className="text-lg font-semibold">
                              Product Not Found!
                            </h2>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
            <div className="flex justify-center">
              <Stack spacing={5}>
                <Pagination
                  count={allProduct?.[0]?.total_pages}
                  variant="outlined"
                  shape="rounded"
                  page={searchParams.get("page")}
                  onChange={(event, value) => router.push(`?page=${value}`)}
                />
              </Stack>
            </div>
          </main>
        </div>
      </div>
      {/* *** */}
      <div className="py-8">
        <div className="flex flex-col  md:flex-row md:justify-center gap-14  bg-light_gray w-auto h-auto py-8 px-4 rounded-lg">
          <img
            className="object-cover m-auto  w-28 h-20 md:w-auto md:h-auto "
            src={"/Brands/Brand-1.png"}
            alt="logo"
          />
          <img
            className="object-cover m-auto w-28 h-20 md:w-auto md:h-auto "
            src={"/Brands/Brand-2.webp"}
            alt="logo"
          />
          <img
            className="object-cover m-auto w-28 h-20 md:w-auto md:h-auto "
            src={"/Brands/Brand-3.png"}
            alt="logo"
          />
          <img
            className="object-cover m-auto w-28 h-20  md:w-auto md:h-auto "
            src={"/Brands/Brand-4.webp"}
            alt="logo"
          />
          <img
            className="object-cover m-auto w-28 h-20 md:w-auto md:h-auto "
            src={"/Brands/Brand-5.webp"}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
