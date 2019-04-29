export const UPDATE_INPUT = 'UPDATE_INPUT'
export const SHRINK_WINDOW = 'SHRINK_WINDOW'
export const ENLARGE_WINDOW = 'ENLARGE_WINDOW'
export const NOTIFY_COPY = 'NOTIFY_COPY'

export function updateInput(input) {
  return { type: UPDATE_INPUT, input }
}

export function shrinkWindow(window) {
  return { type: SHRINK_WINDOW, window }
}

export function enlargeWindow(window) {
  return { type: ENLARGE_WINDOW, window }
}

export function notifyCopy(message) {
  return { type: NOTIFY_COPY, message }
}