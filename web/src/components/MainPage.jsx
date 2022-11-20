import "../partials/Card.scss";

import salata from "../assets/salata.png";
import timer from "../assets/timer.svg";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Card from "./Card";
import AddProduct from "./AddProduct";

function MainView() {
    return (
        <>
            <NavBar/>
            <AddProduct/>
            <Card/>
            <Footer/>
        </>
    );
}

export default MainView;
