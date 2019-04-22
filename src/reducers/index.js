import parseMarkdown from '../util/parseMarkdown';
import { UPDATE_INPUT, SHRINK_WINDOW, ENLARGE_WINDOW } from '../actions';
import {
  NORMAL,
  createWindowStatesFromEnlarge,
  createWindowStatesFromShrink
} from '../util/windowStates';

const initialState = {
  input: "",
  output: "",
  editor: NORMAL,
  preview: NORMAL
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_INPUT:
      return Object.assign({}, state, {
        input: action.input,
        output: parseMarkdown(action.input)
      });

    case SHRINK_WINDOW:
      return Object.assign({}, state,
        createWindowStatesFromShrink(state.editor, state.preview, action.window));

    case ENLARGE_WINDOW:
      return Object.assign({}, state,
        createWindowStatesFromEnlarge(state.editor, state.preview, action.window));

    default:
      return state;
  }
}

export default reducer;