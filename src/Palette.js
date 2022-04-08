import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'

class Palette extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="Palette">
          {/* Navbar  */}
          <div className="Palette-colors">
            {/* Color boxes */}
            {
              this.props.colors.map(color => (
                <ColorBox {...color}/>

              ))
            }
          </div>
          {/* Footer */}

        </div>
      </div>
    );
  }
}

export default Palette;