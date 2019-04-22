export const UPDATE_INPUT = 'UPDATE_INPUT'
export const SHRINK_WINDOW = 'SHRINK_WINDOW'
export const ENLARGE_WINDOW = 'ENLARGE_WINDOW'

export function updateInput(input) {
  return { type: UPDATE_INPUT, input }
}

export function shrinkWindow(window) {
  return { type: UPDATE_INPUT, window }
}

export function enlargeWindow(window) {
  return { type: UPDATE_INPUT, window }
}