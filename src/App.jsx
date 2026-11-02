
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import "./screen-sizes.css";
import { Home } from "./Components/Home";

import { WatchList } from "./Components/WatchList";
import { Movies } from "./Components/Movies";
import TV from "./Components/TV";
import { LandingPage } from "./Components/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/"></Link>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Watchlist" element={<WatchList />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/TV" element={<TV />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
