import React from "react";

function Multiplier({ handleClick }) {
  console.log("Render Multiplier");

  return <button onClick={handleClick}>Multiplier 👏</button>;
}

export default React.memo(Multiplier);
