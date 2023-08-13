/*
const liCollection = document.getElementsByTagName("li");
// console.log(liCollection);

for (const li of liCollection) {
  console.log(li.innerText);
}
*/

/*
const allHeadings = document.getElementsByTagName("h1");
for (const h1 of allHeadings) {
  console.log(h1.innerText);
}

*/

/*
// ======== id Selection ========
const idSelector = document.getElementById("fruits_title");
console.log(idSelector);

*/

/*
// =-=-=-=- Many Class Selection -=-=-=-=
const classSelector = document.getElementsByClassName("important_places");
// console.log(classSelector);

for (const classSelect of classSelector) {
  console.log(classSelect.innerText);
}
*/

// =*=*=*=*=*=*=*= querySelector =*=*=*=*=*=

/*
const someLi = document.querySelectorAll(".fruits_container li");
// console.log(someLi);
for (const li of someLi) {
  console.log(li.innerText);
}

*/

/*
// =-=-=-=-=- add a li to the places list id -=-=-=-=-
const placesList = document.getElementById("places_list");
const li = document.createElement("li");
li.innerText = "pahartoli bon";

placesList.appendChild(li);
*/

/*
// =-=-=-=-=-=-= nClick event handler -=-=-=-=-==-=
// ==== backgroundColor green button option : 1 ======
function makeGreen() {
  document.body.style.backgroundColor = "green";
}

document.getElementById("make_yellow").addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});

*/

/*

// =-=-=-=-=-=-= Event Delegate -=-=-=-=-==-=

// const items = document.getElementsByClassName("item");
// for (const item of items) {
//   item.addEventListener("click", function (e) {
//     // console.log(e.target.parentNode); // li ke clicked korle parent div ke paoya jabe.

//     e.target.parentNode.removeChild(e.target); // jeita clicked hobe oita ke removed korbe.
//   });
// }

// ====== add and remove items =====

document
  .getElementById("list_container")
  .addEventListener("click", function (e) {
    e.target.parentNode.removeChild(e.target);
  });

document.getElementById("btn_add_item").addEventListener("click", function (e) {
  const listContainer = document.getElementById("list_container");

  const li = document.createElement("li");
  li.innerText = "brand new item added";
  li.classList.add("item");
  listContainer.appendChild(li);
});

*/

// =-=-==- keyup Event Handlers
document.getElementById("user_email").addEventListener("keyup", function (e) {
  console.log(e.target.value);
});
