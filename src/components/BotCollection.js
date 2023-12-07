import React from "react";

function BotCollection() {
  // Your code here
  const botItem = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={enlistBot}
        deleteBot={deleteBot}
      />
    );
  });

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {botItem}
      </div>
    </div>
  );
}

export default BotCollection;
