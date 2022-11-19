import {createContext, useEffect, useState} from "react";
import axios from "../api/axios";

const ProductsContext = createContext({});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get()

    }, []);

    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsContext;
