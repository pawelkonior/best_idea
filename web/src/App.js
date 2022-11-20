import { Routes, Route } from "react-router-dom";

import MainView from "./components/MainPage";

import SearchView from './components/SearchView/SearchView'
import ScannerView from "./components/Scanner/ScannerView";


function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<MainView />} />
                <Route path={"/scan"} element={<ScannerView/>}/>
                <Route path={"/search"} element={<SearchView />} />
            </Routes>
        </>
    );
}

export default App;
