import { useState, useEffect } from "react";
import { removePlayer } from "../API";
import { useNavigate, useParams } from "react-router-dom";

export default function SinglePlayer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    async function getSinglePlayer() {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2407-FTB-ET-WEB-FT/players/${id}`
      );
      const result = await response.json();
      setPlayer(result.data.player);
    }
    getSinglePlayer();
  }, []);
  if (!player) return null;
  return (
    <div>
      <main>
        <ul className="ulAll">
          <h2>{player.name}</h2>
          <h4>Breed: {player.breed}</h4>
          <h4>Status: {player.status}</h4>
          <br />
          <img src={player.imageUrl} alt={player.name} />
          <br />
          <button
            onClick={async () => {
              await removePlayer(player.id);
              // alert ("player removed");
              navigate("/");
            }}
            className="deleteButton"
          >
            Delete Player
          </button>
        </ul>
      </main>
    </div>
  );
}
