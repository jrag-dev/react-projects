const btnMenu = document.querySelector("#btn-menu")
const btnDarkTheme = document.querySelector("#btn-theme")
const menuMobile = document.querySelector("#menu-mobile")
const htmlElem = document.querySelector("html")

btnMenu.addEventListener('click', (e) => {
  if (menuMobile.classList.contains("hidden")) {
    menuMobile.classList.remove("hidden")
    menuMobile.classList.add("block")
  } else {
    menuMobile.classList.remove("block")
    menuMobile.classList.add("hidden")
  }
})

btnDarkTheme.addEventListener('click', (e) => {
  console.log(htmlElem)
  if (htmlElem.classList.contains("dark")) {
    htmlElem.classList.remove("dark")
  } else {
    htmlElem.classList.add("dark")
  }
})