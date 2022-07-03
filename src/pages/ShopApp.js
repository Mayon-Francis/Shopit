import CategorySlider from "components/ShopApp/CategorySlider";
import SaleFirst from "components/ShopApp/Sales/SaleFirst";
import SaleSecond from "components/ShopApp/Sales/SaleSecond";
import SaleThird from "components/ShopApp/Sales/SaleThird";
import Footer from "components/Layout/Footer";
import "styles/components/ShopApp/SaleSection.css";
import Navbar from "components/Layout/Navbar";

function ShopApp() {
    return (
        <div className="wrapper">
            <Navbar/>
            <CategorySlider/>
            <section className="saleSectionWrapper">
                <SaleFirst/>
                <SaleSecond/>
                <SaleThird/>
            </section>
            <Footer/>
        </div>
    )
}

export default ShopApp;