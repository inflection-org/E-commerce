import React from "react";

const ProductCard2 = ({ name, dis, price, pic, categoriesDetails }) => {
  return (
    <>
      <div className="flex items-center bg-light_gray w-auto h-full sm:h-[250px] p-5 rounded-lg">
        <div className="w-52 flex flex-col gap-3">
          <p className="text-sm text-gray">{name}</p>
          <h1 className=" text-base md:text-lg font-semibold">{dis}</h1>
          <button
            onClick={() => categoriesDetails()}
            className="w-32 py-2 bg-white hover:bg-orange hover:text-white duration-1000 rounded-full border-2 hover:border-1 border-orange"
          >
            Shop Now
          </button>
        </div>
        <div className="w-52">
          <img
            className="object-cover group-hover:scale-110 rounded-md duration-1000 w-auto h-auto"
            src={pic}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default ProductCard2;
