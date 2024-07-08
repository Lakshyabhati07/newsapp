import './App.css'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Footer from './components/Footer'

export default class App extends Component {
 //we use this.___
  render() {
    return (
      <div>
        <Navbar/>
        <News/>

        <Footer/>
      </div>
    )
  }
}
