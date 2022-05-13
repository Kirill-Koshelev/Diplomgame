let burgerMenuButton = document.getElementById('button-phone');
let burgerMenu = document.getElementById('menu');
burgerMenuButton.onclick = () => {
    if (burgerMenu.style.display != 'block')
        burgerMenu.style.display = 'block';
    else
        burgerMenu.style.display = 'none';
}