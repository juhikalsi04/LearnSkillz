import React from "react";
import Card from "./Card";

const Placement = () => {
  return (
    <div className="mx-4">
      <h1 className="text-3xl font-bold p-4 ">Placements</h1>
      <hr className="h-px bg-black border-0"></hr>
      <div className="grid grid-cols-3 gap-6 mt-4 sm:grid-cols-1 md:grid-cols-3">
        
        <Card heading={"TCS"} linkTo={'/placement/tcs'} gifUrl={"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWU4d2V2cnUwdTA5bGkwbDFlMHRibGhkMGYxN3V1ZWZzZXQxYzIyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c76IJLufpNwSULPk77/giphy.gif"}/>
        <Card heading={"HEXAWARE"} gifUrl={"../images/h2.png"}/>
        <Card heading={"ACCENTURE"}/>
        <Card heading={"INFOSYS"}/>
        <Card heading={"INFOSYS"}/>
        <Card heading={"INFOSYS"}/>
        <Card heading={"INFOSYS"}/>
      </div>
      
     

     
     
    </div>
  );
};

export default Placement;
