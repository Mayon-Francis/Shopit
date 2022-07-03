import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/lazy";
import "styles/components/Product/ProductDetails.css";
import ProductGallery from "./ProductGallery";
import ProductSpecs from "./ProductSpecs";


function ProductDetails(props) {
    const { Product } = props;
    return(
        <div className="productDetailWrapper">
            <ProductGallery Product={Product} />
            <ProductSpecs Product={Product} />
        </div>
    )
}

export default ProductDetails;
