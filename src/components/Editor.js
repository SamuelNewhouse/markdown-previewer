import React from 'react';
import { connect } from 'react-redux';
import { updateInput, shrinkWindow, enlargeWindow, notifyCopy } from '../actions/index';
import copyToClipboard from '../util/copyToClipboard';
import WindowBar from './common/WindowBar'
import editorIcon from '../svg/pencil.svg';
import mdHelp from '../svg/question.svg';
import mdCopyIcon from '../svg/mdcopy.svg';
import shrinkIcon from '../svg/shrink2.svg';
import enlargeIcon from '../svg/enlarge2.svg';

const Editor = ({ value, windowState, onChange, onShrink, onEnlarge, onCopy }) => {
  return (
    <div className={`m-2 content ${windowState.toLowerCase()}`}>
      <WindowBar
        info={{
          icon: editorIcon,
          title: 'Edit',
          name: 'editor'
        }}
        buttons={[
          { title: 'Markdown Help', icon: mdHelp, onClick: () => {
            window.open('https://www.markdownguide.org', '_blank')
          }},
          { title: 'Copy Markdown', icon: mdCopyIcon, onClick: () => {
            copyToClipboard(value);
            onCopy('Markdown copied to clipbaord.');
          }},
          { title: 'Shrink', icon: shrinkIcon, onClick: onShrink },
          { title: 'Enlarge', icon: enlargeIcon, onClick: onEnlarge }
        ]}
      />
      <textarea
        className="bg-dark text-white border border-secondary p-2"
        id="editor"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    value: state.input,
    windowState: state.editor
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: event => dispatch(updateInput(event.target.value)),
    onShrink: () => dispatch(shrinkWindow('editor')),
    onEnlarge: () => dispatch(enlargeWindow('editor')),
    onCopy: message => dispatch(notifyCopy(message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);