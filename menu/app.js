const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Shako Mako",
    category: "dinner",
    price: 17.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// Make a unique categories list
let categories = menu.map((item) => {
  return item.category;
});
let uniqueCategories = [...new Set(categories)];

// Get the parent elements
const sectionCenter = document.querySelector(".section-center");
const btns = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", () => {
  // Display the menu
  displayMenu(menu);
  // Display the filter buttons
  displayFilterBtns(uniqueCategories);
});

const displayMenu = (menuItems) => {
  let displayMenuItems = menuItems.map((item) => {
    return `<article class="menu-item">
          <img src="${item.img}" alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenuItems = displayMenuItems.join("");
  sectionCenter.innerHTML = displayMenuItems;
};

let displayFilterBtns = (uniqueCategories) => {
  const filterBtnAll = `<button type="button" class="filter-btn" data-id="all">all</button>`;
  let displayBtns = uniqueCategories.map((category) => {
    return `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`;
  });
  displayBtns.unshift(filterBtnAll);
  displayBtns = displayBtns.join("");
  btns.innerHTML = displayBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let menuItems = menu.filter((item) => {
        if (e.currentTarget.dataset.id !== "all")
          return e.currentTarget.dataset.id === item.category;
        else return item;
      });
      displayMenu(menuItems);
    });
  });
};
