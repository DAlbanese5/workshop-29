import { useState, useEffect } from "react";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
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

  return (
    <div>
      {players.length && players.map((player) => {
        return (
          <div>
            <h4>{player.name}</h4>
            <h4>{player.breed}</h4>
            <h4></h4>
            ...whatever you want to display
          </div>
        );
      })}
    </div>
  );
}
