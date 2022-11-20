import {
    Routes,
    Route,
} from "react-router-dom";

import SearchView from './components/SearchView/SearchView'
import ScannerView from "./components/Scanner/ScannerView";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<div>home</div>}/>
                <Route path={"/search"} element={<SearchView/>}/>
                <Route path={"/scan"} element={<ScannerView/>}/>
            </Routes>
        </>
    );
}

export default App;
