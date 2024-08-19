import playerData from "./playerData";

function BaseballCard({name, team, position, stats, imgUrl, cardId}) {
  let statsDisplay = []
  for (const [key, value] of Object.entries(stats)) {
    statsDisplay.push(
      <p key={key}>
        {key}: {value}
      </p>
    )
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Team: {team}</p>
      <p>Position: {position}</p>
      {statsDisplay}

    </div>
  )
  // return (
  //   <div className="card">
  //     <h2>{name}</h2>
  //     <img src={imgUrl} alt={`Picture of ${name}`} />
  //   </div>
  // );
}

function App() {
  const cards = playerData.map((player) => <BaseballCard name={player.name} team={player.team} position={player.position} stats={player.stats} imgUrl={player.imgUrl} cardId={player.cardId}/>)
  return <>{cards}</>;
}

export default App;
