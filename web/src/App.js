import { Routes, Route } from "react-router-dom";

import MainView from "./components/MainPage";
import ScannerView from "./components/Scanner/ScannerView";


function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<MainView />} />
                <Route path={"/scan"} element={<ScannerView/>}/>
            </Routes>
        </>
    );
}

export default App;
