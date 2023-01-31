let toogle = document.getElementById('toggle-left');
let mainPage = document.querySelector('.main-page');

toogle.onclick =function(){
    toogle.classList.toggle('bx-toggle-right');
    mainPage.classList.toggle('dark-mode');
}