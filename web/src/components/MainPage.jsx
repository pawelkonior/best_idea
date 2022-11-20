import "../partials/Card.scss";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Card from "./Card";
import AddProduct from "./AddProduct";
import {useEffect, useState} from "react";
import {handleDataFromAPI} from "../request";


function MainView() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        handleDataFromAPI({endpoint: "products"})
            .then((data) => {
                console.log(data);
                setProducts(data)
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    const cards = products.map(({id, expiration_date, detail: {image, name}}) => (
        <Card
            expiration_date={expiration_date}
            src={image}
            name={name}
            key={id}
        />)
    )
    return (
        <div style={{overflowY: "hidden"}}>
            <NavBar/>
            <AddProduct/>
            <div style={{overflowY: "scroll"}}>
                {cards}
            </div>
            <Footer/>
        </div>
    );
}

export default MainView;
