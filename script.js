function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  //pegar a tag img
  const img = document.querySelector("#profile img");

  //se tiver light mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./src/assets/avatar-light.png");
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./src/assets/avatar.png");
  }
}
