const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

var grammar = document.getElementById("an");
var changevariable = document.getElementById("change");

const snippet1 = document.getElementById('snippet1');
const snippet2 = document.getElementById('snippet2');
const snippet3 = document.getElementById('snippet3');
const snippets = [snippet1, snippet2, snippet3];

let currentSnippet = 0;

function switchSnippet() {
  snippets[currentSnippet].style.display = 'none';
  currentSnippet = (currentSnippet + 1) % snippets.length;
  snippets[currentSnippet].style.display = 'inline';
}

setInterval(switchSnippet, 3090);


