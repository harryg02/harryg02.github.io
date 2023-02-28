const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

var grammar = document.getElementById("an");
var changevariable = document.getElementById("change");

// setInterval(function() {
//   if (changevariable.textContent === "DESIGNER") {
//     changevariable.style.fontFamily = "Gochi Hand";
//     changevariable.textContent = "ARTIST";
//     grammar.textContent = "an";
//   } 
//   else if (changevariable.textContent === "ARTIST") {
//     changevariable.style.fontFamily = "mono";
//     changevariable.textContent = "FRONT-END DEVELOPER";
//     grammar.textContent = "a";
//   }
//   else {
//     changevariable.style.fontFamily = "Raleway";
//     changevariable.textContent = "DESIGNER";
//     grammar.textContent = "a";
//   }
// }, 3000);

const snippet1 = document.getElementById('snippet1');
const snippet2 = document.getElementById('snippet2');
const snippet3 = document.getElementById('snippet3');
const snippets = [snippet1, snippet2, snippet3];

// snippets[1].style.display = 'none';
// snippets[2].style.display = 'none';
// snippets[3].style.display = 'none';
let currentSnippet = 0;

function switchSnippet() {
  snippets[currentSnippet].style.display = 'none';
  currentSnippet = (currentSnippet + 1) % snippets.length;
  snippets[currentSnippet].style.display = 'inline';
}

setInterval(switchSnippet, 3090);


