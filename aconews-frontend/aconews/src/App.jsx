import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./compnents/Navbar.jsx";
import LandingPage from "./compnents/Hero.jsx";
import Cards from "./compnents/cards.jsx";
import World from "./compnents/world.jsx";
import Technology from "./compnents/technology.jsx";
import Search from "./compnents/search.jsx";
import Sports from "./compnents/sports.jsx";
import Entertainment from "./compnents/entertainment.jsx";

import TopNews from "./compnents/top-news.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-black w-fit overflow-hidden">
              <div>
                <Navbar />
                {/* <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/technology" element={<Technology/>}/>
            </Routes> */}
              </div>
              <LandingPage />
              <Cards />
            </div>
          }
        />
        <Route
          path="top-news"
          element={
            <div className="bg-black">
              <Navbar/>
              <TopNews />{" "}
            </div>
          }
        />
        <Route
          path="world"
          element={
            <div className="bg-black">
              <Navbar/>
              <World />{" "}
            </div>
          }
        />
        <Route
          path="technology"
          element={
            <div className="bg-black">
              <Navbar/>
              <Technology />{" "}
            </div>
          }
        />
        <Route
          path="sports"
          element={
            <div className="bg-black">
              <Navbar/>
              <Sports />{" "}
            </div>
          }
        />
        <Route
          path="entertainment"
          element={
            <div className="bg-black">
              <Navbar/>
              <Entertainment/>{" "}
            </div>
          }
        />
        <Route
          path="search-results"
          element={
            <div className="bg-black">
              <Navbar/>
              <Search/>{" "}
            </div>
          }
        />
        {/* <Route path="/"><Navbar/></Route> */}
        {/* <Route
        path="share-blog"
        element={
          <div className="bg-black">
            <TextEditor />{" "}
          </div>
        }
      /> */}
        {/* <Navbar /> */}
        {/* {page === "home" && <LandingPage /> } */}
        {/* <LandingPage /> */}
        {/* <Cards/> */}

        {/* <Navbar/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
