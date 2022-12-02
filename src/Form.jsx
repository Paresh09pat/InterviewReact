import React from "react"
import "./Forms.css"

function Forms() {
    return (
   <>
   <form className="hello" onSubmit='submit'>
  <label>Username</label> <br/>
  <input type='text'></input><br/><br/>
  
  <label> Password </label><br/>
  <input type='password'></input><br/><br/>
  
  <button type="submit"> Submit</button>
  
   </form>
   
   </>
    )
  }
  
  export default Forms