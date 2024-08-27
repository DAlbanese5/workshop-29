import { useState } from "react";
import "./App.css";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Link to="https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT">To Home</Link> */}
      </div>

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllPlayers />} />
            {/* <Route path="/players/:id" element={<SinglePlayer />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
