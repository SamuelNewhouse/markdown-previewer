import React from 'react';
import { connect } from 'react-redux';
import { shrinkWindow, enlargeWindow } from '../actions/index';
import WindowBar from './common/WindowBar'
import previewIcon from '../svg/eye.svg';
import copyIcon from '../svg/copy.svg';
import shrinkIcon from '../svg/shrink2.svg';
import enlargeIcon from '../svg/enlarge2.svg';

const Preview = ({ htmlString, onShrink, onEnlarge }) => {
  const bar = {
    info: {
      icon: previewIcon,
      title: 'Preview',
      name: 'preview'
    },
    buttons: [
      { title: 'Copy HTML', icon: copyIcon, onClick: () => { console.log("--Copy HTML--") } },
      { title: 'Shrink', icon: shrinkIcon, onClick: onShrink },
      { title: 'Enlarge', icon: enlargeIcon, onClick: onEnlarge }
    ]
  }

  return (
    <div className="m-3 content">
      <WindowBar bar={bar} />
      <div
        className="bg-light text-dark border border-secondary p-2 content"
        id="preview"
        dangerouslySetInnerHTML={{ __html: htmlString }}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    htmlString: state.output,
    windowState: state.preview
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onShrink: () => dispatch(shrinkWindow('preview')),
    onEnlarge: () => dispatch(enlargeWindow('preview'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);