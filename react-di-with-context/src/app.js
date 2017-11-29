import React, { Component } from 'react'
import MsgProvider from './msg-provider'
import B from './b'
import './app.css'

class App extends Component {
  render() {
    return (
      <MsgProvider msg={'all the things!'}>
        <B />
      </MsgProvider>
    )
  }
}

export default App
