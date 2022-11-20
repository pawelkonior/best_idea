import NavBar from "./NavBar";

import "../partials/SearchView.scss"
import searchIcon from "../assets/images/search_icon.svg"

function SearchView(){
    return (
        <>
            <NavBar/>
            <div className="search">
                {/*<label htmlFor="product_search" className="search__label"></label>*/}
                <input id='product_search' type="text" placeholder="Szukaj produktów..." className="search__input"/>
                <button type='submit'className="search__button">
                    <img src={searchIcon} alt=""/>
                </button>
            </div>
        </>
    )
}

export default SearchView;