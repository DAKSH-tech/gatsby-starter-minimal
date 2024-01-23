import React, { useState,useEffect } from "react";
import useDaksh from '../Hook/useDaksh';
import Header from '../Component/Header';

const Task = () => {
    const [id, setId] = useState('');
    const { data, loading, error } = useDaksh(id);
    useEffect(() => {
        console.log = console.warn = console.error = () => {};
    }, [id]);
    function submitUserId(e){
        e.preventDefault();
        const userId = e.target.elements['user-id'].value;
        setId(userId)
    }  
    
  return (
    <>
      <Header data="Task/"></Header>
      <div className="">
        <h2 className="font-bold text-red-300 h-10 my-4 bg-red">Dummy API - Use of Personal Hook-Enter user for the data</h2>
        <form onSubmit={submitUserId}>
            <input type="number" required placeholder="Enter User Id" id="user-id" style={{ border:"2px solid pink",}} min="1" max="10"/>
            <button type="submit" style={{border:"2px solid pink",}} className="mx-3">Get Data</button>
        </form>
        {data && (
            <div>
            <p>User ID: {data.id}</p>
            <p>User Name: {data.title}</p>
            </div>
        )}

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        <p className="">
            User Data is fetched by a custom hook named useDaksh(), further details
            about the code will be found at my GitHub Profile, to get my github profile you need to 
            go ContentStack Page 
        </p>
      </div>
    </>
  );
};

export default Task;
