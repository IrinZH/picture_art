function hover() {
  let block = document.querySelectorAll('.sizes-block'),
  picture = document.getElementsByClassName('image'),
  size = document.querySelectorAll('.size'),
  startPrice = document.querySelectorAll('.starting-price'),
  finalPrice = document.querySelectorAll('.final-price');

for (let i = 0; i < block.length; i++) {
  block[i].addEventListener('mouseover', function() {
      picture[i].setAttribute('src', `img/sizes-${i+1}-1.png`);
      size[i].style.display = 'none';
      startPrice[i].style.display = 'none';
      finalPrice[i].style.display = 'none';
      
  });
  block[i].addEventListener('mouseout', function() {
      picture[i].setAttribute('src', `img/sizes-${i+1}.png`);
      size[i].style.display = 'block';
      startPrice[i].style.display = 'block';
      finalPrice[i].style.display = 'block'; 
  });
}

} 
module.exports = hover;