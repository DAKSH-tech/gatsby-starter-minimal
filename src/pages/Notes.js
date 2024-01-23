import React,{useEffect} from "react";
import Header from '../Component/Header';

const Notes = () => {
    const data = "Notes/";
    useEffect(()=>{
        console.log = console.warn = console.error = () => {};
    },[]);
    return (
        <>
        <Header data={data} />
        <p> IMAGES TO BE UPLOADED</p>
        </>
  );
};

export default Notes;
