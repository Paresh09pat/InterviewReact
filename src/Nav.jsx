import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  
  return (
      <div>
        
        <div >
         <ul style={{
            display:'flex',
            listStyleType: 'none',
            justifyContent:'space-around',
            backgroundColor:'aqua'
            }}>
             <h3 ><li><NavLink  to ="/">Day 1</NavLink></li></h3>
             <h3><li><NavLink  to="/Day2" >Day 2</NavLink></li></h3>
             <h3><li><NavLink  to="/Day3">Day 3 </NavLink></li></h3>
             <h3><li><NavLink  to="/Day4">Day 4</NavLink></li></h3>
             <h3><li><NavLink  to="/Day5">Day 5</NavLink></li></h3>
             <h3><li><NavLink  to="/Day6">Day 6</NavLink></li></h3>
         </ul>
     </div>
    
    </div>
  )
}

export default Nav