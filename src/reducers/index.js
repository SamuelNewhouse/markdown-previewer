import parseMarkdown from '../util/parseMarkdown';
import {
  UPDATE_INPUT,
  SHRINK_WINDOW,
  ENLARGE_WINDOW,
  NOTIFY_COPY } from '../actions';
import {
  SPLIT,
  createWindowStatesFromEnlarge,
  createWindowStatesFromShrink
} from '../util/windowStates';

const initialState = {
  input: "",
  output: "",
  editor: SPLIT,
  preview: SPLIT,
  copyID: 0,
  copyMessage: ""
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

    case NOTIFY_COPY:
      return Object.assign({}, state, {
        copyID: state.copyID + 1,
        copyMessage: action.message
      });

    default:
      return state;
  }
}

export default reducer;