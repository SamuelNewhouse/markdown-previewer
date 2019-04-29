import React, { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import CopyNotifier from './CopyNotifier';
import { updateInput } from '../actions';
import { connect } from 'react-redux';

const introMarkDown =
  `# Markdown Previewer
## A freecodecamp.org project

See [freecodecamp.org](https://www.freecodecamp.org)

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
![alt text here](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Codinglogo.jpg/480px-Codinglogo.jpg)

**Here's some bold text**`;

class App extends Component {
  componentDidMount() {
    this.props.setInitialMarkdown(introMarkDown);
  }
  render() {
    return <>
      <Editor />
      <Preview />
      <CopyNotifier />
    </>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setInitialMarkdown: (markdown) => dispatch(updateInput(markdown))
  }
}

export default connect(null, mapDispatchToProps)(App);