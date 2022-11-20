import "../partials/Card.scss";

import NavBar from "./NavBar";
import Footer from "./Footer";
import Card from "./Card";
import {Link} from "react-router-dom";

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
        <>
            <NavBar/>
            <Card/>
            <div className="header">
                <div className="header-subtext">Twoje produkty</div>
                <Link to={'scan'}>
                    <button className="add-button">+</button>
                </Link>
            </div>
            {cards}
            <AddProduct/>
            <Footer/>
        </>
    );
}

export default MainView;
