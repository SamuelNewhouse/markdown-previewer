import React from 'react';
import { connect } from 'react-redux';
import { shrinkWindow, enlargeWindow } from '../actions/index';
import copyToClipboard from '../util/copyToClipboard';
import WindowBar from './common/WindowBar'
import previewIcon from '../svg/eye.svg';
import mdHelp from '../svg/question.svg';
import htmlCopyIcon from '../svg/htmlcopy.svg';
import shrinkIcon from '../svg/shrink2.svg';
import enlargeIcon from '../svg/enlarge2.svg';

const Preview = ({ htmlString, windowState, onShrink, onEnlarge }) => {
  return (
    <div className={`m-2 content ${windowState.toLowerCase()}`}>
      <WindowBar
        info={{
          icon: previewIcon,
          title: 'View',
          name: 'preview'
        }}
        buttons={[
          { title: 'Markdown Help', icon: mdHelp, onClick: () => { window.open('https://www.markdownguide.org', '_blank') }},
          { title: 'Copy HTML', icon: htmlCopyIcon, onClick: () => { copyToClipboard(htmlString) } },
          { title: 'Shrink', icon: shrinkIcon, onClick: onShrink },
          { title: 'Enlarge', icon: enlargeIcon, onClick: onEnlarge }
        ]}
      />

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