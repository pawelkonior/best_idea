import { Routes, Route } from "react-router-dom";
import DetailProduct from "./components/DetailProduct";

import SearchView from "./components/SearchView";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<DetailProduct />} />
                <Route path={"/search"} element={<SearchView />} />
            </Routes>
        </>
    );
}

export default App;
