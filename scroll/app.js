// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector("#date");

const newDate = new Date().getFullYear();
date.innerHTML = newDate;

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const nav = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
/* 
console.log(linksContainerHeight);
console.log(linksHeight); */

const navHeight = nav.getBoundingClientRect().height;
const topLinkHeight = topLink.getBoundingClientRect().height;
console.log("navheight: ", navHeight);
console.log("toplinkheight: ", topLinkHeight);

navToggle.addEventListener("click", () => {
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (linksContainerHeight === 0)
    linksContainer.style.height = `${linksHeight}px`;
  else linksContainer.style.height = `${0}px`;
});

// ********** fixed navbar ************
window.addEventListener("scroll", () => {
  const verticallyScrolling = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;
  if (verticallyScrolling > navHeight) nav.classList.add("fixed-nav");
  else nav.classList.remove("fixed-nav");

  if (verticallyScrolling > 400) topLink.classList.add("show-link");
  else topLink.classList.remove("show-link");
});

// ********** smooth scroll************
// select links
