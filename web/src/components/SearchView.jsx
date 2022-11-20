import NavBar from "./NavBar";
import Footer from "./Footer";


import "../partials/SearchView.scss"
import searchIcon from "../assets/images/search_icon.svg"
import salata from "../assets/images/salata.png";
import CardItem from "./CardItem";

function SearchView() {
    return (
        <>
            <NavBar/>
            <div className="search">
                {/*<label htmlFor="product_search" className="search__label"></label>*/}
                <input id='product_search' type="text" placeholder="Szukaj produktów..." className="search__input"/>
                <button type='submit' className="search__button">
                    <img src={searchIcon} alt=""/>
                </button>
            </div>

            <CardItem/>


            <Footer/>
        </>
    )
}

export default SearchView;