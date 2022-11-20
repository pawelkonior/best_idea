import "../partials/AddProduct.scss";
import {Link} from "react-router-dom";

function AddProduct() {


    return (
        <>
            <div className="header">
                <div className="header-subtext">Twoje produkty</div>
                <Link to={'/scan'}>
                    <button className="add-button">+</button>
                </Link>
            </div>
        </>
    )
}

export default AddProduct;