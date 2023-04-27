//! Icon click event

let icon = document.getElementById("Idicons");
console.log(icon);
let dropdown = document.getElementById("dropdown1");

icon.onclick = function (e) {
  e.preventDefault();
  //   let temp = ;
  //   console.log(temp);
  if (icon.classList.toggle("toggle")) {
    console.log(icon);
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
};
//! body
let body = window;
console.log(body);
body.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  let temp = dropdown.classList.toggle("toggle");
  console.log(temp);
  if (temp === true) {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display.remove("toggle");
  }
});

// body.onclick = function (e) {
//   e.preventDefault();
//   if (icon.classList.toggle("toggle")) {
//     dropdown.style.display = "block";
//   } else {
//     dropdown.style.display = "none";
//   }
// };

// navBtn
let navBtn = document.getElementById("navBtn");
let navchild = document.getElementById("navchild");
let navbarId = document.getElementById("_navbar_section");

navBtn.addEventListener("click", e => {
  if (navchild.style.top == "60px") {
    navchild.style.top = "130px";
    navbarId.style.borderBottom = "none";
  } else {
    navchild.style.top = "60px";
    navbarId.style.borderBottom = "1px solid var(--base-gray-color)";
  }
});

// stays
let staysBtn = document.getElementById("staysBtn");
let stays = document.getElementById("stays");


