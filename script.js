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
// =-=-=-=-=-= input box handler section =-=-=-=-=-=

document.getElementById("btn_update").addEventListener("click", function () {
  const inputField = document.getElementById("input_field");
  const p = document.querySelector(".input_text_display");

  if (inputField.value === "") {
    p.innerText = "Give Me Some Items";
  } else {
    const inputText = inputField.value;
    p.innerText = inputText;
    inputField.value = "";
  }
});

*/

/*
// =-=-=-=-=-= TextArea handler section =-=-=-=-=-=

const TextArea = document.getElementById("text_area");
const newComment = document.getElementById("new_comment");
const postBtn = document.getElementById("post_btn");

postBtn.addEventListener("click", function () {
  const newCommentValue = newComment.value;
  const peraComments = document.createElement("p");

  peraComments.innerText = newCommentValue;
  TextArea.appendChild(peraComments);
  newComment.value = "";
});

*/

// =-=-=-=-=-=-= OnClick event handler -=-=-=-=-==-=
// ==== backgroundColor green button option : 1 ======
function makeGreen() {
  document.body.style.backgroundColor = "green";
}

document.getElementById("make_yellow").addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});

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

// ===================
// shopping_card_section start

const addProduct = () => {
  const productField = document.getElementById("product_name");
  const quantityField = document.getElementById("product_quantity");

  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = "";
  quantityField.value = "";
  displayProduct(product, quantity);
  saveProductToLocalStorage(product, quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("product_container");

  const li = document.createElement("li");
  li.innerHTML = `${product}: ${quantity}`;
  ul.appendChild(li);
};

getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringify);
};

const displayProductsFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();

  for (const product in savedCart) {
    const quantity = savedCart[product];
    displayProduct(product, quantity);
    console.log(product, quantity);
  }
};

displayProductsFromLocalStorage();
