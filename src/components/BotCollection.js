import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, handleCardClick, handleDeleteCard }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {
        bots.map(bot => {
          return <BotCard key={bot.id} bot={bot} handleCardClick={handleCardClick} handleDeleteCard={handleDeleteCard}/>
        })
        }
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
