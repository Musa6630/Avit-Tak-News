import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize= 6;

  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
        <Routes>
          
          <Route exact path='/' element={<News key="general" pageSize={this.pageSize} country="in" category="general"></News>}></Route>
          <Route exact path='/business' element={<News key="business" pageSize={this.pageSize} country="in" category="business"></News>}></Route>          
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={6} country="in" category="entertainment"></News>}></Route>
          <Route exact path='/general' element={<News key="general" pageSize={this.pageSize} country="in" category="general"></News>}></Route>
          <Route exact path='/health' element={<News key="health" pageSize={this.pageSize} country="in" category="health"></News>}></Route>
          <Route exact path='/science' element={<News key="science" pageSize={this.pageSize} country="in" category="science"></News>}></Route>
          <Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} country="in" category="sports"></News>}></Route>
          <Route exact path='/technology' element={<News key="technology" pageSize={this.pageSize} country="in" category="technology"></News>}></Route>

        </Routes>
        </Router>
      </div>
    )
  }
}

//export default App
