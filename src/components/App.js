import React, { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import { updateInput } from '../actions';
import { connect } from 'react-redux';

const introMarkDown = `
# Markdown Previewer
## A [freecodecamp.org](https://www.freecodecamp.org) project

Here's some \`inline code\`

    <!-- This is a code block -->
    <html>
      <body>
      </body>
    </html>

* List Item A
* List Item B
* List Item C

> This is a block quote

Here's an image
![alt text here](https://lorempixel.com/600/200/technics/4)

**Here's some bold text**
`;

class App extends Component {
  componentDidMount() {
    this.props.setInitialMarkdown(introMarkDown);
  }
  render() {
    return <>
      <Editor />
      <Preview />
    </>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setInitialMarkdown: (markdown) => dispatch(updateInput(markdown))
  }
}

export default connect(null, mapDispatchToProps)(App);