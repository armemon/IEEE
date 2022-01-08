// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header, Footer } from './Containers/Header'
import AppRouter from './Config/router'
import Contact1 from "./Containers/Contact"


class App extends React.Component {  //merge this class and React.Component


  render() {
    return (
      <div className="App">
        <Header />
        <Contact1 />
        {/* <AppRouter /> */}
        {/* <Button1 /> */}
        <Footer />
      </div>
    )
  }
}

export default App;