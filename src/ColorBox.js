import React, { Component } from "react";
import "./Colorbox.css";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, background } = this.props;
    return (
      <div style={{ background: this.props.color }} className="ColorBox">
        <div className="Color-title">
        </div>
        <button className="copy-button">Copy</button>
        <div className="Color-footer">
          <span>{name}</span>
          <span className="see-more">MORE</span>
        </div>
      </div>
    );
  }
}
