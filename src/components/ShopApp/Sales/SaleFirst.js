import "styles/components/ShopApp/SaleSection.css";
import SaleSlider from "./SaleSlider";
import { getMobileOffers } from "api";

function SaleFirst() {
    const saleList = getMobileOffers();
    return (
        <section className="saleSection">
            <h2 className="saleSection--saleHeader">
                Exciting offers on Mobile Phones!!
            </h2>
            <p className="saleSection--saleText">
                Get upto Rs 15,000/- off*.
            </p>
            <SaleSlider saleList={saleList} />
            <p className="saleSection--terms">
                *Offer valid only on seleted products
            </p>
        </section>
    )
}

export default SaleFirst;