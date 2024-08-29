import { useState } from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm"

function App() {
  const [player, setPlayer] = useState(null);
  const [players, setPlayers] = useState([]);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <NewPlayerForm />
      </div>

      <div>
       
          <Routes>
            <Route path="/" element={<AllPlayers />} />
            <Route path="/players/:id" element={<SinglePlayer />} />
          </Routes>
        
      </div>
      
    </>
  );
}

export default App;
