import React from 'react';
import { connect } from 'react-redux';
import '../copyNotifier.scss';

const CopyNotifier = props => {
  if (props.ID < 1) // Don't do anything on initial load.
    return null

  return (
    // Force animation restart with new key
    <div key={props.ID} className="copy-notifier">
      {props.message}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ID: state.copyID,
    message: state.copyMessage
  }
}

export default connect(mapStateToProps)(CopyNotifier);