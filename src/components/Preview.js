import React from 'react';
import { connect } from 'react-redux';

const Preview = ({ htmlString }) => {
  return <div id="preview" dangerouslySetInnerHTML={{ __html: htmlString }} ></div>
}

const mapStateToProps = state => {
  return {
    htmlString: state.output
  }
}

export default connect(mapStateToProps)(Preview);