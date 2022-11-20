import "../partials/Card.scss";

import salata from "../assets/salata.png";
import timer from "../assets/timer.svg";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Card from "./Card";
import AddProduct from "./AddProduct";
import {Link} from "react-router-dom";


function MainView() {
    return (
        <>
            <NavBar/>
            <AddProduct/>
            <Card/>
            <div className="header">
                <div className="header-subtext">Twoje produkty</div>
                <Link to={'scan'}>
                    <button className="add-button">+</button>
                </Link>
            </div>
            <div className="product-card">
                <div>
                    <img
                        className="product-image"
                        src={salata}
                        alt="Sałata"
                    />
                </div>
                <div className="product-info">
                    <div className="product-name">Sałata</div>
                    <div className="product-subtext">
                        <img src={timer} alt="" className="subtext-icon"/>
                        <span className="subtext-text">
                            Koniec przydatności: 5 dni
                        </span>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default MainView;
