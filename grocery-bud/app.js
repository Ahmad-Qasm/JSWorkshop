// ****** SELECT ITEMS **********
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const groceryContainer = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);

//clear items event
clearBtn.addEventListener("click", clearItems);

// set up loaded
window.addEventListener("DOMContentLoaded", setupItems);

// ****** FUNCTIONS **********

/** add item to grocery list */
function addItem(e) {
  e.preventDefault();
  let value = grocery.value;
  const id = new Date().getTime().toString();

  if (value !== "") {
    createListItem(id, value);
    // display alert
    displayAlert("item added to list", "success");

    //set local storage
    addToLocalStorage(id, value);

    // Set back to default
    grocery.value = "";

    //setBackToDefault();
  } else {
    displayAlert("Please Enter a valid value!", "danger");
  }
}

/**delete an item from the grocery list */
function deleteItem(e) {
  const toBeDeletedElement = e.currentTarget.parentElement.parentElement;
  const tobeDeletedFromLocalStorage = toBeDeletedElement.dataset.id;

  groceryList.removeChild(toBeDeletedElement);
  removeFromLocalStorage(tobeDeletedFromLocalStorage);

  if (groceryList.children.length === 0)
    groceryContainer.classList.remove("show-container");

  displayAlert("item removed from the list", "danger");
}

// clear items from the list
function clearItems() {
  groceryList.innerHTML = "";
  groceryContainer.classList.remove("show-container");
  localStorage.removeItem("list");

  displayAlert("The list empted !", "danger");
}

// Notify the user
function displayAlert(notification, status) {
  alert.textContent = notification;
  alert.classList.add(`alert-${status}`);

  //remove alert
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${status}`);
  }, 2000);
}

// Create items in the list.
function createListItem(id, value) {
  const article = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  article.setAttributeNode(attr);
  article.classList.add("grocery-item");
  article.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
        <!-- delete btn -->
        <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
    </div>`;

  // add eventListener to the btns
  const deleteBtn = article.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);

  // append child
  groceryList.appendChild(article);

  // Show container
  groceryContainer.classList.add("show-container");
}

// ****** LOCAL STORAGE **********
//add to localStorage
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  const items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

// get localstorage
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// remove from the localstorage
function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter((item) => {
    if (item.id !== id) return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// ****** SETUP ITEMS **********
function setupItems() {
  const items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((grocery) => {
      createListItem(grocery.id, grocery.value);
    });
    groceryContainer.classList.add("show-container");
  }
}
