import React from "react";
import Tile from "../Component/Tile";
import Header from '../Component/Header';
const list = [["Code", "Content Stack"], ["Notes", "Notes for Gatsby"], ["Task", "Dummy API"]];

const MyNotes = () => {
   
  return (
    <>
    <Header></Header>
    <div className="flex justify-around p-8">
        { list.map((data, index) => (<div key={index} className="my-4"> 
            <Tile id={data[0]} name={data[1]}></Tile>
          </div>))
        }
    </div> 
    </>
  );
};

export default MyNotes;
