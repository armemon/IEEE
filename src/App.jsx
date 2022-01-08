// import logo from './logo.svg';
import './App.css';
import React from 'react';

import { Home, IT } from './Containers/Extra'

import AppRouter from './Config/router.jsx'
import Contact1 from "./Containers/Contact"


class App extends React.Component {  //merge this class and React.Component


  render() {
    return (
      <div className="App">
        {/* <Contact1 />
        <Home />
        <IT /> */}
        <AppRouter />
        {/* <Button1 /> */}
      </div>
    )
  }
}

export default App;