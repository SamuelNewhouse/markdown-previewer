import React, { Component } from 'react'

class WindowBar extends Component {
  constructor(props) {
    super(props);
    this.info = props.bar.info;
    this.buttons = props.bar.buttons;
  }

  render() {
    const {icon, title, name} = this.info;
    return (
      <div className="window-bar">
        <img src={icon} alt={title}></img>
        <span>{title}</span>
        {
          this.buttons.map(({ icon, title, onClick }) =>
            <img key={title} src={icon} alt={title} onClick={() => onClick(name)}></img>)
        }
      </div>
    )
  }
}

export default WindowBar;