import salata from "../../assets/images/salata.png";
import "../../partials/ScannerResult.scss";

function ScannerResult() {
    return (
        <div className="result-container">
            <img
                className="scanned-product-img"
                src={salata}
                alt="zeskanowany produkt"
            />
            <div className="wrapper">
                <div className="product-name">Sałata</div>

                <button className="accept-btn">Zatwierdź</button>
            </div>
        </div>
    );
}

export default ScannerResult;
