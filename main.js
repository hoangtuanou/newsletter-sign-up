import "./styles/index.scss"

const submitBtn = document.querySelector(".submit-btn")
const dismissBtn = document.querySelector(".dismiss-btn")
const emailInput = document.querySelector("input[name=email]")
const errorMsgEl = document.querySelector(".form-title .error-message")
const modalEl = document.querySelector(".modal")

submitBtn.addEventListener("click", () => {
  const isEmailValid = validateEmail(emailInput.value)

  if (isEmailValid) {
    modalEl.classList.add("show")
    errorMsgEl.textContent = ""
    emailInput.classList.remove("error")
    return
  }

  emailInput.classList.add("error")

  if (emailInput.value) {
    errorMsgEl.textContent = "Invalid email"
    return
  }

  errorMsgEl.textContent = "Required"
})

dismissBtn.addEventListener("click", () => {
  modalEl.classList.add("hidden")

  setTimeout(() => {
    modalEl.classList.remove("show")
    modalEl.classList.remove("hidden")
  }, 200)
})

const validateEmail = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  return regex.test(email)
}
