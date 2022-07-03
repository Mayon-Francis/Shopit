import Footer from "components/Layout/Footer";
import { useParams } from 'react-router-dom';
import { getProduct } from "api";
import ProductDetails from "components/Product/ProductDetails";
import "styles/components/Product/Product.css";
import ProductAddCart from "components/Product/ProductAddCart";
import Navbar from "components/Layout/Navbar";

function Product() {
    const { pid } = useParams();
    const Product = getProduct(pid);
    return(
        <div className="wrapper">
            <Navbar/>
            <h2 className="product--productName">{Product.name}</h2>
            <ProductDetails Product={Product} />
            <ProductAddCart Product={Product} />
            <Footer/>
        </div>
    )
}

export default Product;