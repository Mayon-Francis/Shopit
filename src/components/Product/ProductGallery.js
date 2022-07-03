import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/lazy";
import "styles/components/Product/ProductGallery.css";

function ProductGallery(props) {
  const { Product } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="productGallery">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        pagination={{
          clickable: true,
        }}
        className="productImageMain"
      >
        {Product?.images?.map((imgUrl) => {
          return (
            <SwiperSlide>
              <img src={"/" + imgUrl} alt="Product" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={(elem) => {
          setThumbsSwiper(elem);
        }}
        spaceBetween={10}
        lazy={{
          checkInView: true,
          loadPrevNextAmount: 2,
        }}
        slidesPerView={4}
        slideToClickedSlide
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="productImageThumbs"
      >
        {Product?.images?.map((imgUrl) => {
          return (
            <SwiperSlide>
              <img src={"/" + imgUrl} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ProductGallery;
