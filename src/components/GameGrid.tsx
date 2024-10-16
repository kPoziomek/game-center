import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";

type Game = {
  id: number;
  name: string;
};

interface GamesResponse {
  count: number;
  results: Game[];
}

export const GameGrid = () => {
 const [ games, setGames ] = useState<Game[]>([]);
const [error, setError] = useState(null);

useEffect(()=>{
  apiClient.get<GamesResponse>('/games').then((response)=>{
    setGames(response.data.results);
  }).catch((error)=>{
    setError(error);
  })
},[])
  return (
    <>
    {error && <div>Something went wrong</div>}
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}

    </ul>
    </>
  );
};

