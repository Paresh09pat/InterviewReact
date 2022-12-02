import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Nav";
import ReactDay2 from './React_Day2'
import ReactDay3 from './React_Day3'
import ReactDay4 from './React_Day4'
import ReactDay5 from './React_Day5'
import ReactDay6 from './React_Day6'
import PassData from "./Pages/PassData";
// import Extra from "./Pages/Extra";
// import NowThe from "./Pages/Forcallback";
// import Forms from "./Form";




class App extends React.Component {
  render() {

    return (
      <>
      
{/* <Forms /> */}
        {/* { <NowThe /> } */}
        { <BrowserRouter >

          <Nav />
          {/* <Extra /> */}
        
          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route path="/Day2" element={<ReactDay2 />} />
            <Route path="/Day3" element={<ReactDay3 />} />
            <Route path="/Day4" element={<ReactDay4 />} />
            <Route path="/Day5" element={<ReactDay5 />} />
            <Route path="/Day6" element={<ReactDay6 />} />
            <Route path="/passdata" element={<PassData age='30' />} />

          </Routes>
        </BrowserRouter> }
      </>
    )
  }
}

export default App;
