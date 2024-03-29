const btnHamburger = document.querySelector("#btn-hamburger")
const btnClose = document.querySelector("#btn-close")
const menuMobile = document.querySelector("#menu-mobile")
const imputEmail = document.querySelector("#email")
const formEmail = document.querySelector("#form")
const error = document.querySelector("#error")

const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

loadEventListeners()
function loadEventListeners () {
  btnHamburger.addEventListener('click', openMenu)
  btnClose.addEventListener('click', closeMenu)
  formEmail.addEventListener('submit', validateEmail)
}

function openMenu (e) {
  if (menuMobile.classList.contains('hidden')) {
    menuMobile.classList.remove('hidden')
    menuMobile.classList.add('block')
    btnHamburger.classList.remove('block')
    btnHamburger.classList.add('hidden')
    btnClose.classList.remove('hidden')
    btnClose.classList.add('block')
  }
}

function closeMenu (e) {
  if (menuMobile.classList.contains('block')) {
    menuMobile.classList.remove('block')
    menuMobile.classList.add('hidden')
    btnClose.classList.remove('block')
    btnClose.classList.add('hidden')
    btnHamburger.classList.remove('hidden')
    btnHamburger.classList.add('block')
  }
}

function validateEmail (e) {
  e.preventDefault()
  
  errorMessage = document.createElement('P')
  errorMessage.textContent = "Please insert a valid email"
  formEmail.append(errorMessage)
  formEmail.classList.add("relative")
    
  if (expresion.test(imputEmail.value)) {
    imputEmail.classList.remove('border-2', 'border-bright-red', 'text-bright-red')
    
    while (formEmail.childElementCount > 2) {
      formEmail.removeChild(formEmail.lastChild)
    }
    
    errorMessage.classList.add('hidden')
  } else {
    imputEmail.classList.add('border-2', 'border-bright-red', 'text-bright-red')
    errorMessage.classList.add('absolute', 'top-16', 'left-2', 'mt-6', 'italic', 'text-bright-red', 'text-xs', 'block')
    return
  }
  
  alert('Email send successfully!')
  
  formEmail.reset()
}


/*
            <button id="btn-close" class="hidden z-index-50 absolute top-7 right-6">
                <img src="../images/icon-close.svg" alt="button hamburger"/>
            </button>

*/