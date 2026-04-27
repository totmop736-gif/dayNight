// 8 часов

let button = document.querySelector('.button')
let root = document.querySelector(":root")
let hill = document.querySelectorAll(".hill")
let one__hill = document.querySelectorAll(".one__hill")
let two__hill = document.querySelectorAll(".two__hill")
let three__hill = document.querySelectorAll(".three__hill")
let four__hill = document.querySelectorAll(".four__hill")
let down__hill = document.querySelector(".down__hill")
let conteiner = document.querySelector(".conteiner")
let text__hight = document.querySelector(".text__hight")
let text_lower = document.querySelector(".text_lower")
let sun = document.querySelector(".sun")
let moon = document.querySelector(".moon")
let clouds = document.querySelector(".clouds")
let stars = document.querySelector(".stars")

console.log(down__hill)


let theme = "day"

function day() {
  theme = "day"
  root.style.setProperty("--wrapper-background-color", "#b3d9f0")
  root.style.setProperty("--button-border", "#ffffffb8")
  root.style.setProperty("--button-box-shadow", "#0f172a24")
  root.style.setProperty("--yellow__ring__button-bacgroung", "#fff7e0")
  root.style.setProperty("--text__hight-color", "#314158")
  root.style.setProperty("--text_lower-color", "#62748e")
  root.style.setProperty("--back_hill-color", "#78b757")
  root.style.setProperty("--button-image", "url(../theme/button/sun_on_button.svg)")
  one__hill.forEach(element => {element.classList.toggle('night')});
  two__hill.forEach(element => {element.classList.toggle('night')});
  three__hill.forEach(element => {element.classList.toggle('night')});
  four__hill.forEach(element => {element.classList.toggle('night')});
  down__hill.classList.toggle('night')
  conteiner.classList.toggle('night')
  text__hight.textContent = "DAY TOGGLE"
  text_lower.textContent = "State icon: Sun"
  sun.classList.toggle("on")
  moon.classList.toggle("on")
  clouds.classList.toggle("on")
  stars.classList.toggle("on")
  sun.style.animation = "none"
  sun.offsetHeight
  sun.style.animation = "sun_anim_down 1.5s linear"
  moon.style.animation = "none"
  moon.offsetHeight
  moon.style.animation = "moon_anim_up 1.5s linear"
}


function night() {
  theme = "night"
  root.style.setProperty("--wrapper-background-color", "#1b3763")
  root.style.setProperty("--button-border", "#94a3b82e")
  root.style.setProperty("--button-box-shadow", "#02081759")
  root.style.setProperty("--yellow__ring__button-bacgroung", "#818cf82e")
  root.style.setProperty("--text__hight-color", "#f1f5f9")
  root.style.setProperty("--text_lower-color", "#cad5e2")
  root.style.setProperty("--back_hill-color", "#203321")
  root.style.setProperty("--button-image", "url(../theme/button/moon_on_button.svg)")
  one__hill.forEach(element => {element.classList.toggle('night')});
  two__hill.forEach(element => {element.classList.toggle('night')});
  three__hill.forEach(element => {element.classList.toggle('night')});
  four__hill.forEach(element => {element.classList.toggle('night')});
  down__hill.classList.toggle('night')
  conteiner.classList.toggle('night')
  text__hight.textContent = "NIGHT TOGGLE"
  text_lower.textContent = "State icon: Moon"
  sun.classList.toggle("on")
  moon.classList.toggle("on")
  clouds.classList.toggle("on")
  stars.classList.toggle("on")
  sun.style.animation = "none"
  sun.offsetHeight
  sun.style.animation = "sun_anim_up 1.5s linear"
  moon.style.animation = "none"
  moon.offsetHeight
  moon.style.animation = "moon_anim_down 1.5s linear"
}

button.addEventListener('click', function() {
  if (theme === "day") {
    night()
  }else if (theme ==="night") {
    day()
  }
})