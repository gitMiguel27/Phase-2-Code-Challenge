import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then(resp => resp.json())
    .then(botsData => {
      setBots(botsData);
    })
  }, [])

  function handleCardClick(clickedBot) {
    // console.log('from page: ', clickedBot);
    if (army.find(bot => bot.id === clickedBot.id)) {
      console.log('Already Here!')
    } else {
      setArmy([...army, clickedBot]);
    }
  }

  function handleDeleteCard(deletedBot) {
    // console.log('from page: ', deletedBot);
    fetch(`http://localhost:8002/bots/${deletedBot.id}`, {
      method: 'DELETE',
    })

    const updatedBots = bots.filter(bot => bot.id !== deletedBot.id)
    setBots(updatedBots);
    const updatedArmy = army.filter(bot => bot.id !== deletedBot.id)
    setArmy(updatedArmy);
  }

  function handleRemoveFromArmy(deletedArmyBot) {
    const updatedArmy = army.filter(bot => bot.id !== deletedArmyBot.id)
    setArmy(updatedArmy);
  }

  return (
    <div>
      <YourBotArmy army={army} handleRemoveFromArmy={handleRemoveFromArmy}/>
      <BotCollection bots={bots} handleCardClick={handleCardClick} handleDeleteCard={handleDeleteCard}/>
    </div>
  )
}

export default BotsPage;
