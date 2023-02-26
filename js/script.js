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

