import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import '../../tooltip.scss';

class WindowBar extends Component {
  render() {
    const { icon, title } = this.props.info;
    return (
      <div className="window-bar bg-info d-flex align-items-center">
        <img className="m-2" src={icon} alt={title}></img>
        <span className="flex-grow-1 title" >{title}</span>
        {
          this.props.buttons.map(({ icon, title, onClick }) =>
            <Tooltip key={title} overlay={title} placement="bottom">
              <button type="button" className="btn btn-sm btn-info m-1" onClick={onClick}>
                <img key={title} src={icon} alt={title}></img>
              </button>
            </Tooltip>
          )
        }
      </div>
    )
  }
}

export default WindowBar;