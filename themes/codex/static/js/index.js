"use strict";

/*
 * Handles mobile nav
 */
function toggleMobileNavState() {
  var body = document.querySelector("body");
  body.classList.toggle("nav--active");
}
/*
 * Initializes burger functionality
 */


function initBurger() {
  var burger = document.querySelector(".burger");
  burger.addEventListener("click", toggleMobileNavState);
}

initBurger();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}