import "../partials/Card.scss";

import salata from "../assets/salata.png";
import timer from "../assets/timer.svg";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Card from "./Card";

function MainView() {
    return (
        <>
            <NavBar/>
            <Card/>
            <Footer/>
        </>
    );
}

export default MainView;
