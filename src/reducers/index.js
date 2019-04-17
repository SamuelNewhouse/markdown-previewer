import { UPDATE_INPUT } from '../actions'

const initialState = { input: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return Object.assign({}, state, { input: action.input });
    default:
      return state;
  }
}

export default reducer;