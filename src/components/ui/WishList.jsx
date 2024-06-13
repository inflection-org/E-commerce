import { useEffect, useState } from "react";
import React from "react";
import { instance } from "@/app/axios/Api";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsBagHeart } from "react-icons/bs";
import { toast } from "react-toastify";

const WishList = () => {
  const [wishLists, setWishLists] = useState([]);
  const [error, setError] = useState("");
  console.log(wishLists);

  useEffect(() => {
    setError("");
    async function search() {
      try {
        const res = await instance.get("/wishlists/my");
        setWishLists(res.data.data);
        // setIsShow(false)
      } catch (err) {
        console.log(err);
        setError(err?.response?.data?.message);
      }
    }
    search();
  }, []);

  const Remove = async (variant_id) => {
    try {
      const { data } = await instance.delete(`/wishlists/${variant_id}`);

      toast.success(data?.message);
      const remainWishList = wishLists.filter(
        (item) => item.variant_id !== variant_id
      );
      setWishLists(remainWishList);
    } catch (err) {
      console.log(err);
      if (err.response?.data?.message) {
        toast.error(err.response?.data?.message);
      } else {
        toast.error(err.message);
      }
    }
  };

  return (
    <div>
      {wishLists.length > 0 ? (
        wishLists?.map((wishList, i) => {
          const { variant_id, product_name, price, product_thumbnail } =
            wishList;
          return (
            <div className="mx-2 my-4">
              <div
                className="block md:flex items-center justify-between p-5 bg-white rounded-md shadow-md"
                key={i}
              >
                <div className="flex items-center gap-3  ">
                  <img
                    className="object-cover group-hover:scale-110 duration-1000 w-64 h-36 md:w-24 md:h-24 "
                    src={product_thumbnail}
                    alt="logo"
                  />
                </div>
                <h1 className="mt-2 md:mt-0">{product_name}</h1>
                <p>{price}</p>
                <div className="flex gap-3 items-center justify-between md:gap-44 ">
                  <button className="bg-blue text-white py-2 px-4 mt-2 md:mt-0 rounded-md hover:bg-green">
                    Add to Cart
                  </button>

                  <button onClick={() => Remove(variant_id)}>
                    <RiDeleteBin5Line className=" size-10 md:size-6 hover:text-red" />
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-auto h-[500px] rounded-md shadow-md bg-white m-4 p-5 flex justify-center text-center items-center ">
          <div className="">
            <BsBagHeart className="size-20 ml-20 text-blue" />
            <h1 className="text-3xl mt-2">{error}</h1>
            <p className="text-xl">Save Your Favorite Item Here</p>
            <button className="bg-orange mt-5 hover:bg-black duration-1000  text-white rounded-full px-8 py-2">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishList;
