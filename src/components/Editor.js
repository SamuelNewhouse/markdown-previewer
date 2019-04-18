import React from 'react';
import { updateInput } from '../actions/index';
import { connect } from 'react-redux';

const Editor = ({ value, onChange }) => {
  return <textarea value={value} onChange={onChange} />
}

const mapStateToProps = state => {
  return {
    value: state.input
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: event => dispatch(updateInput(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);