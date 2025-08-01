
// logic to display menu
// target the menu btn
const menu_btn = document.querySelector(".menu-btn")
// add click event listener to the button
menu_btn.addEventListener("click", display_nav )
// target the nav
const nav = document.querySelector("header nav")
// define the display_nav function
function display_nav(){
      nav.classList.toggle('show-nav')  // show or hide the nav
    //   rotate the menu btn
    menu_btn.classList.toggle('rotate-btn')
}


// logic to display current year
document.querySelector(".year").innerHTML = new Date().getFullYear()



