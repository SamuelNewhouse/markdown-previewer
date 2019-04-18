import { UPDATE_INPUT } from '../actions';
import marked from 'marked';

const renderer = new marked.Renderer();
renderer.link = (href, title, text) => {
  if (!title)
    title = "";

  return `
  <a href="${href}" title="${title}" target="_blank">${text}</a>
  `
}

marked.setOptions({
  renderer: renderer,
  gfm: true,
  breaks: true,
  sanitize: true
});

const initialState = { input: "", output: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return Object.assign({}, state, {
        input: action.input,
        output: marked(action.input)
      });
    default:
      return state;
  }
}

export default reducer;