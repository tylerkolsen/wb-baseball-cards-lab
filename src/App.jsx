import playerData from "./playerData";
import { useState } from "react";

function BaseballCard({name, team, position, stats, imgUrl, cardId}) {
  let [showPicture, setShowPicture] = useState(true)
 
  const toggleCard = () => setShowPicture(!showPicture)

  if (showPicture) {
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{name}</h2>
        <img src={imgUrl} alt={`Picture of ${name}`} />
      </div>
    );
  } else {
    let statsDisplay = []
    for (const [key, value] of Object.entries(stats)) {
      statsDisplay.push(
        <p key={key}>
          {key}: {value}
        </p>
      )
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{name}</h2>
        <p>Team: {team}</p>
        <p>Position: {position}</p>
        {statsDisplay}
      </div>
    )
    }
  }
}

function App() {
  const cards = playerData.map((player) => <BaseballCard name={player.name} team={player.team} position={player.position} stats={player.stats} imgUrl={player.imgUrl} cardId={player.cardId}/>)
  return <>{cards}</>;
}

export default App;
