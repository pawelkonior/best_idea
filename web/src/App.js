import { Routes, Route } from "react-router-dom";
import MainView from "./components/MainView/MainPage.jsx";

import SearchView from "./components/SearchView/SearchView.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<MainView />} />
                <Route path={"/search"} element={<SearchView />} />
            </Routes>
        </>
    );
}

export default App;
