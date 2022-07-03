import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Lazy } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";
import "styles/components/ShopApp/CategorySlider.css";

function SaleSlider(props) {
  const { saleList } = props;
  console.log(saleList);
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Lazy]}
      spaceBetween={50}
    //   loop={true}
    //   lazy={true}
      lazy={{
        checkInView: true,
        loadPrevNextAmount: 3
      }}
      slidesPerView={3}
      preventClicks={false}
      navigation
      pagination={{ clickable: true }}
      className="sale--slider"
    >
      {saleList.map((saleItem) => SwiperCard(saleItem))}
    </Swiper>
  );
}

function SwiperCard(saleItem) {
  return (
    <SwiperSlide className="sale--slider--card">
      <Link to={`/product/${saleItem.pid}`}>
        <h4>{saleItem.name}</h4>
        <img 
            data-src={saleItem.image} 
            // alt={saleItem.name + "image"}
            alt={""}
            className="swiper-lazy sale--sliderImage" 
        />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-dark"></div>
        <div className="sale--slider--price">
            <span className="sale--slider--reducedPrice">
              ₹{saleItem.price}
            </span>
            <span className="sale--slider--actualPrice">
              ₹{saleItem.actualPrice}
            </span>
        </div>
      </Link>
    </SwiperSlide>
  );
}

export default SaleSlider;
