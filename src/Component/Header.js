import React from 'react';
import { Link } from 'gatsby';

const style = {
  backgroundColor: 'white',
  color: 'black',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  marginRight: '1rem',
  fontWeight: 'bold',
};

const Header = ({data}) => {
  return (
    <nav
      style={{
        backgroundColor: '#3498db',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          color: '#ffffff',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        <Link to="/dakshNotes">KPecommerce</Link>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        >
        {data === "Notes/" ? (
          <Link to="http://localhost:8000/dakshNotes" style={style}>
            Home
          </Link>
        ) : (
          <Link to="/Notes" style={style}>
            Notes
          </Link>
        )}
        {data==="Code/"?(<Link to="http://localhost:8000/dakshNotes" style={style}>
            Home
          </Link>):(<Link to="/Code" style={style}>
            Code
          </Link>)}
          {data==="Task/"?(<Link to="http://localhost:8000/dakshNotes" style={style}>
            Home
          </Link>):(
          <Link to="/Task" style={style}>
            Tasks
          </Link>)}
    
          
      </div>
    </nav>
  );
};

export default Header;
