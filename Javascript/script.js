
function myFunction() {
  var x = document.getElementById("navsection");

  if (x.style.display === "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}
let sections = document.querySelectorAll('section')

window.onscroll = () =>{
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height){
      sec.classList.add('showanimate');
    } else {
      sec.classList.remove('showanimate');
    }
  })

}