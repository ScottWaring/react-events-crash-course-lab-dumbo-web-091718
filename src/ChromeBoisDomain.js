import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'
//

export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    let x = event.nativeEvent.offsetX
    let y = event.nativeEvent.offsetY
    drawChromeBoiAtCoords(x, y)
  }

  clickToggleCycling = () => {
    toggleCycling()
  }

  callResize = (event) => {
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }
  }


  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.clickToggleCycling}
        onKeyPress={this.callResize}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
