const mainEl = document.querySelector('main');
const navEl = document.querySelector('nav');
const footerEl = document.querySelector('footer');
const switchEl = document.querySelector('#switch');
const btnTemasEl = document.querySelector('#alternar-tema'); 
const bolaEl = document.querySelector('#bola');
const h2 = document.querySelectorAll('h2');
const luaEl = document.querySelector('#lua');
const solEl = document.querySelector('#sol');
const imgsLaterais = document.querySelectorAll('.imgsLaterais')

btnTemasEl.addEventListener('click', () => {
    mainEl.classList.toggle('tema-escuro');
    mainEl.classList.toggle('tema-claro');
    footerEl.classList.toggle('tema-escuro');
    footerEl.classList.toggle('tema-claro');
    switchEl.classList.toggle('tema-escuro');
    switchEl.classList.toggle('tema-claro');
    h2.forEach (h2El => {
        h2El.classList.toggle('tema-claro');
        h2El.classList.toggle('tema-escuro');
    });

    navEl.classList.toggle('icones-escuros');
    navEl.classList.toggle('icones-claros');

    mainEl.classList.toggle('box-shadow-escuro');
    footerEl.classList.toggle('box-shadow-escuro');
    mainEl.classList.toggle('box-shadow-claro');
    footerEl.classList.toggle('box-shadow-claro');
    imgsLaterais.forEach (imgLateralEl => {
        imgLateralEl.classList.toggle('box-shadow-claro2');
        imgLateralEl.classList.toggle('box-shadow-escuro2');
    });

    bolaEl.classList.toggle('bola-checked');
    bolaEl.classList.toggle('bola-unchecked');
    luaEl.classList.toggle('checked');
    solEl.classList.toggle('checked');
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    mainEl.classList.add('tema-escuro');
    footerEl.classList.add('tema-escuro');
    switchEl.classList.add('tema-escuro');
    h2.forEach (h2El => {
        h2El.classList.add('tema-escuro');
    });

    navEl.classList.add('icones-escuros');

    mainEl.classList.add('box-shadow-escuro');
    footerEl.classList.add('box-shadow-escuro');
    imgsLaterais.forEach (imgLateralEl => {
        imgLateralEl.classList.add('box-shadow-escuro2');
    });

    bolaEl.classList.add('bola-checked');
    luaEl.classList.add('checked');
} else {
    mainEl.classList.add('tema-claro');
    footerEl.classList.add('tema-claro');
    switchEl.classList.add('tema-claro');
    h2.forEach (h2El => {
        h2El.classList.add('tema-claro');
    });

    navEl.classList.add('icones-claros');

    mainEl.classList.add('box-shadow-claro');
    footerEl.classList.add('box-shadow-claro');
    imgsLaterais.forEach (imgLateralEl => {
        imgLateralEl.classList.add('box-shadow-claro2');
    });


    bolaEl.classList.add('bola-unchecked');
    solEl.classList.add('checked');
}