function toggleMode() {
  const body = document.body
  body.classList.toggle("light-mode")

  const img = document.querySelector("#profile img")

  if (body.classList.contains("light-mode")) {
    img.setAttribute("src", "../assets/avatar-light.png")
  } else {
    img.setAttribute("src", "../assets/avatar.png")
  }
}
