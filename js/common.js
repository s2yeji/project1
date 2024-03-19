const content = 'front-end.\nweb (developer)_';
const text = document.querySelector('.text');
let i = 0;

function typing() {
  if (i < content.length) {
    let txt = content[i++];
    text.innerHTML += txt === '\n' ? '<br/>' : txt;
    setTimeout(typing, 300);
  }
}

typing();
