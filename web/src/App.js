import { Routes, Route } from "react-router-dom";
import DetailProduct from "./components/DetailProduct";

import SearchView from "./components/SearchView";

import MainView from "./components/MainPage.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<MainView />} />

                <Route path={"/detail"} element={<DetailProduct />} />
                <Route path={"/search"} element={<SearchView />} />
            </Routes>
        </>
    );
}

export default App;
