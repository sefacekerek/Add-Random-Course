import "./App.css";
import { useState } from "react";
import Course from "./Course";

function App() {

  const [course, setCourse] = useState([])

  const getRandomCourse = () => {
    const courseArr = ["Angular","Reactt","Csharp","Java"];
    console.log(courseArr[Math.floor(Math.random()*courseArr.length)] );
    return courseArr[Math.floor(Math.random()*courseArr.length)] 
  }

  const handelClick =  () =>{
    console.log(course)
    return setCourse([...course,getRandomCourse()])
  }

  const courseList = course.map((course,index)=> {return <Course key={index} data={course}/>})


  return (
    <div className="App">
     
        <button className="appButton" onClick={handelClick}>Add Random Course</button>
        <div className="courseContainer">{courseList}</div>
       
      
    </div>
  );
}

export default App;
