import { UPDATE_INPUT } from '../actions';
import parseMarkdown from '../util/parseMarkdown';

const initialState = { input: "", output: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return Object.assign({}, state, {
        input: action.input,
        output: parseMarkdown(action.input)
      });
    default:
      return state;
  }
}

export default reducer;