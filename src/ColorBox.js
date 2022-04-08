import React, { Component } from "react";
import "./Colorbox.css";
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, color } = this.props;
    return (
      <CopyToClipboard text={color}>

      <div style={{ background: color }} className="ColorBox">
        <div className="Color-title">
        </div>
        <button className="copy-button">Copy</button>
        <div className="Color-footer">
          <span>{name}</span>
          <span className="see-more">MORE</span>
        </div>
      </div>
      </CopyToClipboard>
    );
    
  }
}
