import "./App.css";
import { BrowserRouter  , Route, Routes } from 'react-router-dom';
import Navbar from './compnents/Navbar.jsx';
import LandingPage from "./compnents/Hero.jsx"
import Cards from "./compnents/cards.jsx"
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-black">
            <div className="static">
            <Navbar />
            </div>
            <LandingPage />
            <Cards />
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
  )
}

export default App;
