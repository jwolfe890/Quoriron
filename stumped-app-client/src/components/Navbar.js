import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navbar = props => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink style={{ marginRight: '500px' }} to="/">Home</NavLink>
      <NavLink style={{ marginRight: '10px' }} to="/questions/new">Ask Question</NavLink>
    </div>
  );
}
 
export default Navbar;