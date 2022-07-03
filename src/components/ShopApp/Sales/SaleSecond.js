import "styles/components/ShopApp/SaleSection.css";
import SaleSlider from "./SaleSlider";
import { getMensClothingOffers } from "api";

function SaleFirst() {
    const saleList = getMensClothingOffers();
    return (
        <section className="saleSection">
            <h2 className="saleSection--saleHeader">
                Exclusive offers on Men's Clothing.
            </h2>
            <p className="saleSection--saleText">
                Get upto Rs 60% off*.
            </p>
            <SaleSlider saleList={saleList} />
            <p className="saleSection--terms">
                *Offer valid only on seleted products
            </p>
        </section>
    )
}

export default SaleFirst;