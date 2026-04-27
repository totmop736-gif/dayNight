let stars = document.querySelector(".stars_wreaper")
console.log(stars)
// задержка
function cooldowns(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {resolve()},ms)
  })
}
// создаю звезду
function create_star() {
  let top = Math.floor(Math.random() * (95 - 1 + 1) + 1);
  let left = Math.floor(Math.random() * (95 - 1 + 1) + 1);
  let number = Math.floor(Math.random() * (7 - 1 + 1) + 1);
  let classes = `star-${number}`
  let star = document.createElement("div")
  let star__conteiner = document.createElement("div")
  star__conteiner.classList.add('star_conteiner')
  star.classList.add("star")
  star.classList.add(classes)
  star.style.cssText = `
    top: ${top}%;
    left: ${left}%;
  `
  star.style.animationDuration = `${Math.random() * 10 + 1}s`
  stars.append(star__conteiner)
  star__conteiner.append(star)
  return star
}
// удаление элемента
function destroy_star(name) {
  name.remove()
}

async function generate() {
  let live_time = Math.floor(Math.random() * (40000 - 10000 + 1) + 20000)
  let new_star = create_star()
  console.log(new_star)
  console.log(new_star.parentElement)
  let conteiner_star = new_star.parentElement
  await cooldowns(live_time)
  destroy_star(new_star) 
  destroy_star(conteiner_star)
}

for (let i = 0; i<20; i++) {
  generate()
}


while (true) {
  generate()
  await cooldowns(2000)
}
