import React from 'react';
import { connect } from 'react-redux';

const Preview = ({ htmlString }) => {
  return <div
    className="m-3 bg-light text-dark border border-secondary p-2"
    id="preview"
    dangerouslySetInnerHTML={{ __html: htmlString }}
  />
}

const mapStateToProps = state => {
  return {
    htmlString: state.output
  }
}

export default connect(mapStateToProps)(Preview);