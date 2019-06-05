function burger() {
  let burger = document.querySelector('.burger'),
      burgerMenu = document.querySelector('.burger-menu');

  burger.addEventListener('click', () => {
    // console.log(document.documentElement.clientWidth); //ширина экрана, меняется
    // console.log(window.screen.width); //ширина экрана устройства, не меняется
    if (document.documentElement.clientWidth <= 976) {

      if (burgerMenu.classList.contains("burger-menu_active") == true) {
        burgerMenu.classList.remove("burger-menu_active");
        burgerMenu.style.display = 'none';
      } else {
        burgerMenu.classList.add("burger-menu_active");
        burgerMenu.style.display = 'block';
      }
    }
  });
}
module.exports = burger;
