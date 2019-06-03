function blocks() {
  let btn = document.getElementsByClassName('button-transparent')[0],
        element = document.querySelectorAll('.styles-2');

    btn.addEventListener('click', () => {
        element.forEach(function(item) {
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');  
        });
        btn.style.display = 'none';
    });
}
module.exports = blocks;