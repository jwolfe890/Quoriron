import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navbar = props => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '8px', paddingTop: '8px', marginBottom: '2px' }}>
      <NavLink style={{ marginRight: '500px', fontSize: 22 }} to="/">Quoriron</NavLink>
      <NavLink style={{ marginRight: '30px', fontSize: 15 }} to="/questions">Answer Question</NavLink>
      <NavLink style={{ marginRight: '20px', fontSize: 15 }} to="/questions/new">Ask Question</NavLink>
    </div>
  );
}
 
export default Navbar;