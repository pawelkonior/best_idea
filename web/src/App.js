import {
    Routes,
    Route,
} from "react-router-dom";

import SearchView from './components/SearchView'

function App() {
  return (
    <>

      <Routes>
            <Route path={"/"} element={<div>home</div>}/>
            <Route path={"/search"} element={<SearchView/>}/>
      </Routes>
    </>
  );
}

export default App;
