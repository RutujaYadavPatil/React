import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
//  import Newsitem from './components/Newsitem';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  c="vish";
  render() {
    return (
      // <div>
      //   <Navbar></Navbar>
      //   
      // </div>
      <BrowserRouter>
      <Navbar />
       <div className="container">
      {/* <News pagesize={6} category="general"/> */}
          <Routes>
          <Route path="/" element={<News key={"/"} pagesize={6} category="general"/>}  ></Route>
            <Route path="/science" element={<News  key="science" pagesize={6} category="science"/>}  ></Route>
            <Route path="/sports" element={<News  key="sports" pagesize={20} category="sports"/>}  ></Route>
            <Route path="/general" element={<News key=" general"  pagesize={6} category="general"/>}  ></Route>
            <Route path="/health" element={<News  key="health " pagesize={6} category="health"/>}  ></Route>
            <Route path="/business" element={<News key="business "  pagesize={6} category="business"/>}  ></Route>
            <Route path="/technology" element={<News key=" technology"  pagesize={6} category="technology"/>}  ></Route>
            <Route path="/entertainment" element={<News key="entertainment "  pagesize={6} category="entertainment"/>}  ></Route>
            {/* <Route path="/about" element={<About mode={Mode}/>}   ></Route> */}
                </Routes>
       </div>
          </BrowserRouter>
    )
  }
}
