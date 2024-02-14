const mainEl = document.querySelector('main');
const navEl = document.querySelector('nav');
const footerEl = document.querySelector('footer');
const switches = document.querySelectorAll('.switch');
const btnsTemas = document.querySelectorAll('.alternar-tema'); 
const bolas = document.querySelectorAll('.bola');
const luas = document.querySelectorAll('.luas');
const sois = document.querySelectorAll('.sois');
const imgsLaterais = document.querySelectorAll('.imgsLaterais')

function alternarTemas (btnTemasEl) {
    btnTemasEl.addEventListener('click', () => {
        mainEl.classList.toggle('tema-escuro');
        mainEl.classList.toggle('tema-claro');
        footerEl.classList.toggle('tema-escuro');
        footerEl.classList.toggle('tema-claro');
        switches.forEach (switchEl => {
            switchEl.classList.toggle('tema-claro');
            switchEl.classList.toggle('tema-escuro');
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
    
        
        bolas.forEach (bolaEl => {
            bolaEl.classList.toggle('bola-checked');
            bolaEl.classList.toggle('bola-unchecked');
        });
        luas.forEach (luaEl => {
            luaEl.classList.toggle('checked');
        });
        sois.forEach (solEl => {
            solEl.classList.toggle('checked');
        });
    });
}

btnsTemas.forEach (btnTemasEl => {
    alternarTemas(btnTemasEl);
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    mainEl.classList.add('tema-escuro');
    footerEl.classList.add('tema-escuro');
    switches.forEach (switchEl => {
        switchEl.classList.add('tema-escuro');
    });

    navEl.classList.add('icones-escuros');

    mainEl.classList.add('box-shadow-escuro');
    footerEl.classList.add('box-shadow-escuro');
    imgsLaterais.forEach (imgLateralEl => {
        imgLateralEl.classList.add('box-shadow-escuro2');
    });

    bolas.forEach (bolaEl => {
        bolaEl.classList.add('bola-checked');
    });
    luas.forEach (luaEl => {
        luaEl.classList.add('checked');
    });
} else {
    mainEl.classList.add('tema-claro');
    footerEl.classList.add('tema-claro');
    switches.forEach (switchEl => {
        switchEl.classList.add('tema-claro');
    });

    navEl.classList.add('icones-claros');

    mainEl.classList.add('box-shadow-claro');
    footerEl.classList.add('box-shadow-claro');
    imgsLaterais.forEach (imgLateralEl => {
        imgLateralEl.classList.add('box-shadow-claro2');
    });


    bolas.forEach (bolaEl => {
        bolaEl.classList.add('bola-unchecked');
    });
    sois.forEach (solEl => {
        solEl.classList.add('checked');
    });
}
