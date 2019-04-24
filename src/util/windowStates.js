export const MINIMIZED = "MINIMIZED"
export const MAXIMIZED = "MAXIMIZED"
export const SPLIT = "SPLIT"

export const createWindowStatesFromShrink = (editorState, previewState, windowFocus) => {
  if(editorState === SPLIT) {
    editorState = MAXIMIZED;
    previewState = MAXIMIZED;
  }

  if (windowFocus === 'editor') {
    if (previewState === MINIMIZED)
      previewState = MAXIMIZED;
    else
      editorState = MINIMIZED;
  }
  else {
    if (editorState === MINIMIZED)
      editorState = MAXIMIZED;
    else
      previewState = MINIMIZED;
  }

  if(editorState === previewState) {
    editorState = SPLIT;
    previewState = SPLIT;
  }

  return { editor: editorState, preview: previewState };
}

export const createWindowStatesFromEnlarge = (editorState, previewState, windowFocus) => {
  if(editorState === SPLIT) {
    editorState = MAXIMIZED;
    previewState = MAXIMIZED;
  }

  if (windowFocus === 'editor') {
    if (editorState === MINIMIZED)
      editorState = MAXIMIZED;
    else
      previewState = MINIMIZED;
  }
  else {
    if (previewState === MINIMIZED)
      previewState = MAXIMIZED;
    else
      editorState = MINIMIZED;
  }

  if(editorState === previewState) {
    editorState = SPLIT;
    previewState = SPLIT;
  }


  return { editor: editorState, preview: previewState };
}