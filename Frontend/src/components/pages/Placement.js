import React from "react";
import Card from "./Card";

const Placement = () => {
  return (
    <div className="mx-4">
      <h1 className="text-3xl font-bold p-4 ">Placements</h1>
      <hr className="h-px bg-black border-0"></hr>
      <div className="grid grid-cols-3 gap-6 mt-4 sm:grid-cols-1 md:grid-cols-3">
        
        <Card heading={"TCS"} linkTo={'/placement/tcs'}/>
        <Card heading={"HEXAWARE"}/>
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
