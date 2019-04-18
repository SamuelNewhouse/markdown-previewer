import marked from 'marked';

const renderer = new marked.Renderer();
renderer.link = (href, title, text) => {
  if (!title)
    title = "";

  return `<a href="${href}" title="${title}" target="_blank">${text}</a>`
}

marked.setOptions({
  renderer: renderer,
  gfm: true,
  breaks: true,
  sanitize: true
});

const parseMarkdown = marked;
export default parseMarkdown;