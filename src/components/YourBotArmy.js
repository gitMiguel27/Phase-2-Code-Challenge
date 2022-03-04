import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, handleRemoveFromArmy }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {
          army.map(bot => {
            return <BotCard key={bot.id} bot={bot} handleCardClick={handleRemoveFromArmy} handleDeleteCard={handleRemoveFromArmy}/>
          })
          }
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
