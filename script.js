function toggleLeftMenu() {
    const leftMenu = document.querySelector('.left-menu');
    leftMenu.classList.toggle('collapsed'); 
}
function toggleRightMenu() {
    const rightPanel = document.querySelector('.right-panel');
    rightPanel.classList.toggle('collapsed');  
}
function adjustPageSize() {
    const width = window.innerWidth;

    if (width >= 992 && width <= 1600) {
        document.body.style.transform = 'scale(0.9)';
    } else if (width >= 700 && width <= 767) {
        document.body.style.transform = 'scale(0.8)';
    } else if (width >= 600 && width <= 700) {
        document.body.style.transform = 'scale(0.75)';
    } else if (width <= 600) {
        document.body.style.transform = 'scale(0.5)';
    } else {
        document.body.style.transform = 'scale(1)';
    }
}
window.addEventListener('resize', adjustPageSize);
adjustPageSize();