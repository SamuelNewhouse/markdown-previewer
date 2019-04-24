export const MINIMIZED = "MINIMIZED"
export const NORMAL = "NORMAL"
export const MAXIMIZED = "MAXIMIZED"

const getLargerWindowState = windowState => {
  switch (windowState) {
    case MINIMIZED:
      return NORMAL;
    case NORMAL:
      return MAXIMIZED;
    default:
      return windowState;
  }
}

const getSmallerWindowState = windowState => {
  switch (windowState) {
    case MAXIMIZED:
      return NORMAL;
    case NORMAL:
      return MINIMIZED;
    default:
      return windowState;
  }
}

export const createWindowStatesFromShrink = (editorState, previewState, windowFocus) => {
  console.log("focus: ", windowFocus);
  if (windowFocus === 'editor')
    editorState = getSmallerWindowState(editorState);
  else if (windowFocus === 'preview')
    previewState = getSmallerWindowState(previewState);

  console.log("shrink: ", editorState, previewState);
  return { editor: editorState, preview: previewState };
}

export const createWindowStatesFromEnlarge = (editorState, previewState, windowFocus) => {
  console.log("focus: ", windowFocus);
  if (windowFocus === 'editor') {
    editorState = getLargerWindowState(editorState);

    if (editorState === MAXIMIZED)
      previewState = MINIMIZED;
    else if (previewState === MAXIMIZED)
      previewState = NORMAL;
  }
  else if (windowFocus === 'preview') {
    previewState = getLargerWindowState(previewState);

    if (previewState === MAXIMIZED)
      editorState = MINIMIZED;
    else if (editorState === MAXIMIZED)
      editorState = NORMAL;
  }

  console.log("enlarge: ", editorState, previewState);
  return { editor: editorState, preview: previewState };
}