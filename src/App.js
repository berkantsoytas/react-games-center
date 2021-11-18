import "./App.css";
import Headers from "./components/header";
import Game from "./components/game";

function App() {
  const api = [
    {
      id: 1,
      title: "Dauntless",
      thumbnail: "https://www.freetogame.com/g/1/thumbnail.jpg",
      short_description:
        "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.",
      game_url: "https://www.freetogame.com/open/dauntless",
      genre: "MMORPG",
      platform: "PC (Windows)",
      publisher: "Phoenix Labs",
      developer: "Phoenix Labs, Iron Galaxy",
      release_date: "2019-05-21",
      freetogame_profile_url: "https://www.freetogame.com/dauntless",
    },
    {
      id: 2,
      title: "World of Tanks",
      thumbnail: "https://www.freetogame.com/g/2/thumbnail.jpg",
      short_description:
        "If you like blowing up tanks, with a quick and intense game style you will love this game!",
      game_url: "https://www.freetogame.com/open/world-of-tanks",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Wargaming",
      developer: "Wargaming",
      release_date: "2011-04-12",
      freetogame_profile_url: "https://www.freetogame.com/world-of-tanks",
    },
    {
      id: 3,
      title: "Warframe",
      thumbnail: "https://www.freetogame.com/g/3/thumbnail.jpg",
      short_description:
        "A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ",
      game_url: "https://www.freetogame.com/open/warframe",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Digital Extremes",
      developer: "Digital Extremes",
      release_date: "2013-03-25",
      freetogame_profile_url: "https://www.freetogame.com/warframe",
    },
    {
      id: 4,
      title: "CRSED: F.O.A.D.",
      thumbnail: "https://www.freetogame.com/g/4/thumbnail.jpg",
      short_description:
        "Take the battle royale genre and add  mystical powers and you have CRSED: F.O.A.D. (Aka Cuisine Royale: Second Edition)",
      game_url: "https://www.freetogame.com/open/crsed",
      genre: "Shooter",
      platform: "PC (Windows)",
      publisher: "Gaijin Distribution KFT",
      developer: "Darkflow Software",
      release_date: "2019-12-12",
      freetogame_profile_url: "https://www.freetogame.com/crsed",
    },
  ];

  return (
    <div className="content-games">
      <Headers />
      {api.map((item) => (
        <Game
          title={item.title}
          imageUrl={item.thumbnail}
          descriptionTitle={item.publisher}
          descriptionText={item.short_description}
        />
      ))}
    </div>
  );
}

export default App;
