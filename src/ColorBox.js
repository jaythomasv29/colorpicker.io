import React, { Component } from "react";
import "./Colorbox.css";
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this)
  }

  changeCopyState() {
    this.setState({ copied: true} , () => {
      setTimeout(() => this.setState({ copied: false }), 1000)
    })
  }
  render() {
    const { name, color } = this.props;
    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>

      <div style={{ background: color }} className={`${this.state.copied ? 'overlay-show' : ''}`}>
        {
          !this.state.copied ?
          <div className="ColorBox">
            <p className="copy-button">Copy</p>
            <div className="Color-section">
            </div>
            <div className="Color-footer">
              <span>{name}</span>
              <span className="see-more">MORE</span>
            </div>
          </div>
          :
          <div className="ColorBox">
            <p className="copy-button">Copied...!</p>
           
          </div>
        }
      </div>
      </CopyToClipboard>
    );
    
  }
}
