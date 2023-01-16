import React, { useState }  from 'react'
// import PropTypes from 'prop-types'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {
  const pageSize= 6;
  const [progress, setProgress] = useState(0)

  
    return (
      <div>
        <Router>
        <Navbar></Navbar>
        <LoadingBar
        height={3}
        color='#FF0000'
        progress={progress} 
      />
        <Routes>
          
          <Route exact path='/' element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"></News>}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business"></News>}></Route>          
          <Route exact path='/entertainment' element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"></News>}></Route>
          <Route exact path='/general' element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"></News>}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health"></News>}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science"></News>}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" category="sports"></News>}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology"></News>}></Route>

        </Routes>
        </Router>
      </div>
    )
  
}

export default App
