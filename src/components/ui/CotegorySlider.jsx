import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard2 from "./cards/ProductCard2";
import { instance } from "../../app/axios/Api";
import { useRouter } from "next/navigation";

// Swipper CS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

function CotegorySlider() {
  const router = useRouter();

  const [categories, setCategories] = useState([]);
  // console.log(categories)
  useEffect(() => {
    async function search() {
      try {
        const res = await instance.get("/categories/list");
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    search();
  }, []);

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {categories.length > 0 &&
          categories?.map((category, i) => (
            <SwiperSlide key={i}>
              <ProductCard2
                // onClick={() => console.log('clicked')}
                name={category.name}
                dis={category.description}
                categoriesDetails={() =>
                  router.push(`/cotegory/${category.id}`)
                }
                pic={category.image}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default CotegorySlider;
