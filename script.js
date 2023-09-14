const mal = document.getElementById('mal');
const FIRST = document.getElementById('calpri');
const SECRETO = document.getElementById('ocult');
const SECRETITO = document.getElementById('oculto');
const SECOND = document.getElementById('calsec');
const THIRD = document.getElementById('calter');
const PUSH = document.getElementById('ingresar');

PUSH.addEventListener('click', () => {
    const CALCU = document.getElementById('valor').value;
    if (CALCU>0){
        SECOND.style.display = 'inline';
        THIRD.style.display = 'inline';
        FIRST.style.display = 'inline';
        SECRETITO.style.display = 'inline';
        SECRETO.style.display = 'inline';
        }
    else {
        mal.style.display = 'visible';
        SECOND.style.display ='none';
        THIRD.style.display = 'none';
        FIRST.style.display = 'none';
        SECRETITO.style.display = 'none';
        SECRETO.style.display = 'none';
        }
    
    if (CALCU>0 && CALCU < 30){
        let calpri = calc(CALCU);
        FIRST.innerHTML = calpri + ' cc';
        THIRD.innerHTML = calpri/24 + ' cc/hr';
        SECOND.innerHTML = (calpri/24) * 1.5 +' cc/hr';
        SECRETITO.style.display = 'none';
        SECRETO.style.display = 'none';
        }
    if (CALCU> 29){
        let ocult= lala(CALCU);
        let oculto= rita(CALCU)
        SECRETO.innerHTML = ("Por 1500 = ") + ocult + (' cc');
        SECRETITO.innerHTML = ("Por 2000 = ") + oculto + (' cc');
        SECOND.style.display ='none';
        THIRD.style.display = 'none';
        FIRST.style.display = 'none';
        } 
    
function calc(CALCU){
    resa=0
    exe=0
    valor=CALCU
    if (CALCU >= 1 && CALCU < 11){
        resa = valor * 100 
        }
    if (CALCU > 10 && valor < 21){
        exe = ( valor - 10); 
        resa= (1000) + (exe * 50);
        }
    if (CALCU > 20 && valor < 30){ 
        exe = (valor - 20); 
        resa= (1500) + (450) + (exe * 20);
        }
    return Math.round(resa);
    }
function lala(CALCU){
    valor=CALCU
    resp=0
    exe=0
    exe= (valor * 4 + 7)/(valor + 90);
    resp= exe * 1500;
    return Math.round(resp);
    }
function rita(CALCU){
    valor=CALCU
    exe=0
    respi= 0;
    exe= (valor * 4 + 7)/(valor + 90);
    respi= exe * 2000;
    return Math.round(respi);

    }

let textbtn = document.getElementById('textbtn');
let texto = document.getElementById('texto');
textbtn.addEventListener('click', letex)
function letex() {
    texto.classList.toggle('show');
    if (CALCU>0 && CALCU < 30){
        

    }
let textbtne = document.getElementById('textbtne');
let texte = document.getElementById('texte');
textbtne.addEventListener('click', letexi)
function letexi() {
    texte.classList.toggle('other');
    }
});