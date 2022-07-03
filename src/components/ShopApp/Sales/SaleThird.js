import "styles/components/ShopApp/SaleSection.css";
import SaleSlider from "./SaleSlider";
import { getKitchenOffers } from "api";

function SaleFirst() {
    const saleList = getKitchenOffers();
    return (
        <section className="saleSection">
            <h2 className="saleSection--saleHeader">
                Exclusive offers on Kitchen Appliances.
            </h2>
            <p className="saleSection--saleText">
                Get upto Rs 30% off*.
            </p>
            <SaleSlider saleList={saleList} />
            <p className="saleSection--terms">
                *Offer valid only on seleted products
            </p>
        </section>
    )
}

export default SaleFirst;