import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';

class WindowBar extends Component {
  constructor(props) {
    super(props);
    this.info = props.bar.info;
    this.buttons = props.bar.buttons;
  }
  render() {
    const {icon, title} = this.info;
    return (
      <div className="window-bar bg-info d-flex">
        <img className="m-2" src={icon} alt={title}></img>
        <span className="flex-grow-1 align-self-center title" >{title}</span>
        {
          this.buttons.map(({ icon, title, onClick }) =>
            <Tooltip key={title} overlay={<span>{title}</span>} placement="bottom">
              <img className="p-1 m-1 clickable" key={title} src={icon} alt={title} onClick={onClick}></img>
            </Tooltip>)
        }
      </div>
    )
  }
}

export default WindowBar;