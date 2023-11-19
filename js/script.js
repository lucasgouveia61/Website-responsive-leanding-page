function toggleVideo() {
  const trailer = document.querySelector(".trailer");
  const video = document.querySelector("video");

  // Verificar se o vídeo está definido e não nulo
  if (video) {
    video.pause();
  }

  trailer.classList.toggle("active");
}

function changeBg(bg, title) {
  const banner = document.querySelector(".banner");
  const contents = document.querySelectorAll(".content");

  banner.style.background = `url("./movies/${bg}")`;
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";

  contents.forEach((content) => {
    content.classList.remove("active");
    if (content.classList.contains(title)) {
      content.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var currentPage = window.location.pathname.split("/").pop(); // Pega o nome do arquivo atual

  // Atualiza a classe do link no menu para refletir a página atual
  var menuLinks = document.querySelectorAll(".nav a");
  menuLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
