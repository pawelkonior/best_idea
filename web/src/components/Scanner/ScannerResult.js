import "../../partials/ScannerResult.scss";
import {Link} from "react-router-dom";

function ScannerResult({name, image}) {
    return (
        <div className="result-container">
            <img
                className="scanned-product-img"
                src={image}
                alt="zeskanowany produkt"
            />
            <div className="wrapper">
                <div className="product-name">{name}</div>

                <Link to="/">
                    <button className="accept-btn">Zatwierdź</button>
                </Link>
            </div>
        </div>
    );
}

export default ScannerResult;
