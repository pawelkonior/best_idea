import { Routes, Route } from "react-router-dom";
import DetailProduct from "./components/DetailProduct";

import SearchView from "./components/SearchView";

import MainView from "./components/MainPage";
import ScannerView from "./components/Scanner/ScannerView";


function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<MainView />} />
                <Route path={"/detail"} element={<DetailProduct />} />
                <Route path={"/search"} element={<SearchView />} />
                <Route path={"/scan"} element={<ScannerView/>}/>
            </Routes>
        </>
    );
}

export default App;
