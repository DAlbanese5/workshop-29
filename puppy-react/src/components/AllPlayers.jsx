import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players"
        //   { method: "GET", headers: { "Content-Type": "application/json" } }
        );
        const data = await response.json();
        setPlayers(data.data.players);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayers();
  }, []);
  const searchPlayers = searchParam? players.filter((player) => player.name.toLowerCase().includes(searchParam)):players

  return (
    <div>
    <div className="search">
    <label>
      Search:{" "}
      <input
        type="text"
        placeholder="Search for player"
        onChange={(e) =>
          setSearchParam(e.target.value.toLocaleLowerCase())
        }
      ></input>
    </label>
  </div>
  <div className="fyi">To See information on an individual dog, please click on their name!</div>
    <div className="AllPlay">
      {searchPlayers.length && searchPlayers.map((player) => {
        return (
          <div key={player.id}>
            <ul className="ulAll">
            <h4 id="name" onClick={() => navigate(`/players/${player.id}`)}>{player.name}</h4>
            <h4>{player.breed}</h4>
            <img src={player.imageUrl}/>
            </ul>
          </div>
        );
      })}
    </div></div>
  );
}

