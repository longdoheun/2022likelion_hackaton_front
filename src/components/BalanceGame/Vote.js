import React from "react";
import Card from "../../UI/Card";
import "../../css/Vote.css"

function Vote({ children }) {
  return <Card className='vote'>{children}</Card>;
}

export default Vote;
