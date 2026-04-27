let cloud_1 = document.querySelector(".cloud-1")

function cooldowns(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {resolve()},ms)
  })
}


function get_xy(number, find) {
  let cloud = document.querySelector(`.cloud-${number}`)
  let style = getComputedStyle(cloud)
  return(style[find])
}

async function actived(number, real_top, real_left, switchs) {
  let top
  let left
  let cloud = document.querySelector(`.cloud-${number}`)
  if (switchs === 1) {
    top = `${Number(real_top.replace("px", "")) + 0}px`
    left = `${Number(real_left.replace("px", "")) + 10}px`
  } else if (switchs === 2) {
    top = `${Number(real_top.replace("px", "")) + 0}px`
    left = `${Number(real_left.replace("px", "")) + 0}px`
  }
  return new Promise((resolve) => {
    resolve(
      cloud.style.cssText = `
        left: ${left};
        top: ${top};
      `
    )
  })
}

async function sucsess() {
  let b = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  let top = get_xy(b, "top")
  let left = get_xy(b, "left")
  actived(b, top, left, 1)
  await cooldowns(1500)
  actived(b, top, left, 2)
}

sucsess()


while (true) {
  await cooldowns(700)
  sucsess()
}