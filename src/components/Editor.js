import React from 'react';
import { updateInput } from '../actions/index';
import { connect } from 'react-redux';

const Editor = ({ value, onChange }) => {
  return <textarea
    className="m-3 bg-dark text-white border border-primary p-2"
    id="editor"
    value={value}
    onChange={onChange}
  />
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