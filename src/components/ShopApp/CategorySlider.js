import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "styles/components/ShopApp/CategorySlider.css";

function CategorySlider() {
  const categories = [
    "Electronics",
    "Home Accessories",
    "Men's Clothing",
    "Women's CLothing",
    "Kids Essentials",
    "Veggies",
  ];

  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        loop={true}
        slidesPerView="auto"
        preventClicks={false}
        navigation
        pagination={{ clickable: true }}
        className="category--slider"
      >
        {
            categories.map((category) => SwiperCard(category))
        }
      </Swiper>
    </section>
  );
}

function SwiperCard(category) {
  const linkParam = encodeURIComponent(category);
  return (
    <SwiperSlide className="category--slider--card">
      <Link to={`/app?category=${linkParam}`}>{category}</Link>
    </SwiperSlide>
  );
}

export default CategorySlider;
