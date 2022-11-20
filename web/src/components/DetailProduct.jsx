import salata from "../assets/images/salata.png";
import "../partials/DetailProduct.scss";

function DetailProduct() {
    return (
        <div className="details-container">
            <img src={salata} alt="produkt" className="image-details" />
            <div className="details-title">Kupiłam za dużo sałaty ODDAM</div>
        </div>
    );
}

export default DetailProduct;