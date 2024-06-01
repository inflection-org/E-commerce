'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ProductCard } from '@/components/ui/cards/ProductCard'
import { products } from '@/constants/productConstant'
import { Fragment } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { IoMdClose } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'
import { FaPlus, FaMinus } from 'react-icons/fa'

const page = () => {
  const pathname = usePathname()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]
  const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
  ]
  const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: true },
      ],
    },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className='px-5 md:px-10'>
      <div className='h-44 md:my-5 px-4 block md:flex md:justify-between items-center bg-light_gray'>
        <div className='pt-5 md:pt-0'>
          <h1 className='text-3xl md:text-5xl font-bold'>Shop</h1>
          <p className='mt-3  text-gray text-lg md:text-xl'>
            Something differet, every day.
          </p>
        </div>
        <p className='uppercase text-center mt-2 md:mt-0'>home {pathname}</p>
      </div>
      <div className='bg-white'>
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as='div'
              className='relative z-40 lg:hidden'
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter='transition-opacity ease-linear duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity ease-linear duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='fixed inset-0 bg-black bg-opacity-25' />
              </Transition.Child>

              <div className='fixed inset-0 z-40 flex'>
                <Transition.Child
                  as={Fragment}
                  enter='transition ease-in-out duration-300 transform'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transition ease-in-out duration-300 transform'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
                    <div className='flex items-center justify-between px-4'>
                      <h2 className='text-lg font-medium text-gray-900'>
                        Filters
                      </h2>
                      <button
                        type='button'
                        className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className='sr-only'>Close menu</span>
                        <IoMdClose className='h-6 w-6' aria-hidden='true' />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className='mt-4 border-t border-gray-200'>
                      <h3 className='sr-only'>Categories</h3>
                      <ul
                        role='list'
                        className='px-2 py-3 font-medium text-gray-900'
                      >
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href} className='block px-2 py-3'>
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {filters.map((section) => (
                        <Disclosure
                          as='div'
                          key={section.id}
                          className='border-t border-gray-200 px-4 py-6'
                        >
                          {({ open }) => (
                            <>
                              <h3 className='-mx-2 -my-3 flow-root'>
                                <Disclosure.Button className='flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'>
                                  <span className='font-medium text-gray-900'>
                                    {section.name}
                                  </span>
                                  <span className='ml-6 flex items-center'>
                                    {open ? (
                                      <FaMinus
                                        className='h-5 w-5'
                                        aria-hidden='true'
                                      />
                                    ) : (
                                      <FaPlus
                                        className='h-5 w-5'
                                        aria-hidden='true'
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className='pt-6'>
                                <div className='space-y-6'>
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className='flex items-center'
                                    >
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type='checkbox'
                                        defaultChecked={option.checked}
                                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className='ml-3 min-w-0 flex-1 text-gray-500'
                                      >
                                        {option.label}
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
          <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex items-baseline justify-between border-b border-gray pb-6 pt-24'>
              <h1 className='text-4xl font-bold tracking-tight text-black'>
                New Arrivals
              </h1>

              <div className='flex items-center'>
                <Menu as='div' className='relative inline-block text-left'>
                  <div>
                    <Menu.Button className='group inline-flex justify-center text-sm font-medium text-black hover:text-gray'>
                      Sort
                      <IoIosArrowDown
                        className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-black group-hover:text-gray'
                        aria-hidden='true'
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <div className='py-1'>
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? 'font-medium text-black'
                                    : 'text-black',
                                  active ? 'bg-gray' : '',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type='button'
                  className='-m-2 ml-5 p-2 text-gray hover:text-black sm:ml-7'
                >
                  <span className='sr-only'>View grid</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
                    />
                  </svg>
                </button>
                <button
                  type='button'
                  className='-m-2 ml-4 p-2 text-gray hover:text-black sm:ml-6 lg:hidden'
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className='sr-only'>Filters</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18 18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
            </div>

            <section aria-labelledby='products-heading' className='pb-24 pt-6'>
              <h2 id='products-heading' className='sr-only'>
                Products
              </h2>

              <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
                {/* Filters */}
                <form className='hidden lg:block'>
                  <h3 className='sr-only'>Categories</h3>
                  <ul
                    role='list'
                    className='space-y-4 border-b border-black pb-6 text-sm font-medium text-black'
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href}>{category.name}</a>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure
                      as='div'
                      key={section.id}
                      className='border-b border-black py-6'
                    >
                      {({ open }) => (
                        <>
                          <h3 className='-my-3 flow-root'>
                            <Disclosure.Button className='flex w-full items-center justify-between bg-white py-3 text-sm text-light_black hover:text-black'>
                              <span className='font-medium text-light_black'>
                                {section.name}
                              </span>
                              <span className='ml-6 flex items-center'>
                                {open ? (
                                  <FaMinus
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                  />
                                ) : (
                                  <FaPlus
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className='pt-6'>
                            <div className='space-y-4'>
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className='flex items-center'
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type='checkbox'
                                    defaultChecked={option.checked}
                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className='ml-3 text-sm text-gray'
                                  >
                                    {option.label}
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
                <div className='lg:col-span-3 '>
                  <div className='grid grid-cols-1 md:grid-cols-3 w-full  gap-3'>
                    {products.map((product, index) => (
                      <ProductCard
                        pic={product.pic}
                        name={product.title}
                        price={product.price}
                        rating={product.rating}
                        discount={product.discount}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      {/* *** */}
      <div className='py-8'>
        <div className='flex flex-col  md:flex-row md:justify-center gap-14  bg-light_gray w-auto h-auto py-8 px-4 rounded-lg'>
          <img
            className='object-cover m-auto  w-28 h-20 md:w-auto md:h-auto '
            src={'/Brands/Brand-1.png'}
            alt='logo'
          />{' '}
          <img
            className='object-cover m-auto w-28 h-20 md:w-auto md:h-auto '
            src={'/Brands/Brand-2.webp'}
            alt='logo'
          />{' '}
          <img
            className='object-cover m-auto w-28 h-20 md:w-auto md:h-auto '
            src={'/Brands/Brand-3.png'}
            alt='logo'
          />{' '}
          <img
            className='object-cover m-auto w-28 h-20  md:w-auto md:h-auto '
            src={'/Brands/Brand-4.webp'}
            alt='logo'
          />{' '}
          <img
            className='object-cover m-auto w-28 h-20 md:w-auto md:h-auto '
            src={'/Brands/Brand-5.webp'}
            alt='logo'
          />
        </div>
      </div>
    </div>
  )
}

export default page
