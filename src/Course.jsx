import React from "react";
import Angular from "./images/angular.png";
import Reactt from "./images/react.jpg";
import Csharp from "./images/Csharp1.png";
import Java from "./images/java.jpg";

export default function Course({ data }) {
  const courseMap = {
    Angular: Angular,
    Reactt: Reactt,
    Java: Java,
    Csharp: Csharp,
    
  };


  console.log(data);
  return (
    <div className="childContainer" >
      <img id="childComponentImg" src={courseMap[data]} alt="" />
    </div>
  );
}
