import React from 'react';
import { updateInput } from '../actions/index';
import { connect } from 'react-redux';
import WindowBar from './common/WindowBar'
import editorIcon from '../svg/pencil.svg';
import copyIcon from '../svg/copy.svg';
import shrinkIcon from '../svg/shrink2.svg';
import enlargeIcon from '../svg/enlarge2.svg';

const bar = {
  info: {
    icon: editorIcon,
    title: 'Editor',
    name: 'editor'
  },
  buttons: [
    {title: 'Copy', icon: copyIcon, onClick: 'PLACEHOLDEr'},
    {title: 'Shrink', icon: shrinkIcon, onClick: 'PLACEHOLDEr'},
    {title: 'Enlarge', icon: enlargeIcon, onClick: 'PLACEHOLDEr'}
  ]

}

const Editor = ({ value, onChange }) => {
  return (
    <div className="m-3 content">
      <WindowBar bar={bar} />
      <textarea
        className="bg-dark text-white border border-primary p-2"
        id="editor"
        value={value}
        onChange={onChange}
      />
    </div>
  )
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