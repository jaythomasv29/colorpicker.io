import React, { Component } from 'react';
import seedColors from './seedColors';

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
          </div>
          {/* Footer */}
          
        </div>
      </div>
    );
  }
}

export default Palette;