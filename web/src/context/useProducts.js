import {createContext, useEffect, useState} from "react";
import {handleDataFromAPI} from "../request";

const ProductsContext = createContext({});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState( []);

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

    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    );
}


export default ProductsContext;
