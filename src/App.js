import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize= 6;
  state={
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
        <LoadingBar
        height={3}
        color='#FF0000'
        progress={this.state.progress} 
      />
        <Routes>
          
          <Route exact path='/' element={<News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general"></News>}></Route>
          <Route exact path='/business' element={<News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="in" category="business"></News>}></Route>          
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress}  key="entertainment" pageSize={6} country="in" category="entertainment"></News>}></Route>
          <Route exact path='/general' element={<News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general"></News>}></Route>
          <Route exact path='/health' element={<News setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country="in" category="health"></News>}></Route>
          <Route exact path='/science' element={<News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country="in" category="science"></News>}></Route>
          <Route exact path='/sports' element={<News setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country="in" category="sports"></News>}></Route>
          <Route exact path='/technology' element={<News setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country="in" category="technology"></News>}></Route>

        </Routes>
        </Router>
      </div>
    )
  }
}

//export default App
