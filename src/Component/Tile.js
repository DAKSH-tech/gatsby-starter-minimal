import React from "react";
import {Link} from 'gatsby'
const style={
    height:"300px",
    width:"300px",
    backgroundColor:"azure",
    border: "2px solid red",
    cursor:"pointer",
}
const Tile = ({ id, name}) => {
    return (
        <Link to={`/${id}`}>
      <div style={style}>
        {name}
      </div>
    </Link>
    )
}
export default Tile;