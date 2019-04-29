import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import '../../tooltip.scss';

class WindowBar extends Component {
  render() {
    const {icon, title} = this.props.info;
    return (
      <div className="window-bar bg-info d-flex">
        <img className="m-2" src={icon} alt={title}></img>
        <span className="flex-grow-1 align-self-center title" >{title}</span>
        {
          this.props.buttons.map(({ icon, title, onClick }) =>
            <Tooltip key={title} overlay={title} placement="bottom">
              <img className="p-1 m-1 clickable" key={title} src={icon} alt={title} onClick={onClick}></img>
            </Tooltip>)
        }
      </div>
    )
  }
}

export default WindowBar;