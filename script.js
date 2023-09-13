const FIRST = document.getElementById('calpri');
const SECOND = document.getElementById('calsec');
const THIRD = document.getElementById('calter');
const mal = document.getElementById('mal');
const PUSH = document.getElementById('ingresar');

PUSH.addEventListener('click', () => {
    const CALCU = document.getElementById('valor').value;
    if (CALCU >0){
        let calpri = calc(CALCU);
        let volumen = CALCU;
        let medio = volumen;
        FIRST.innerHTML = calpri + ' cc';
        THIRD.innerHTML = volumen /24 + ' cc/hr';
        SECOND.innerHTML = medio * 1.5 +' cc/hr: ' +' (m+m/2)';
        SECOND.style.display = 'block';
        THIRD.style.display = 'block';
        FIRST.style.display = 'block';
        } 
    else {
        mal.style.display = 'block';
        SECOND.style.display = 'none';
        THIRD.style.display = 'none';
        FIRST.style.display = 'none';
        }
function calc(CALCU){
    resp=1
    exe=1
    valor=CALCU
    if (valor > 29 ) {
        respi = (valor * 4 + 7)/(valor + 90);
        resp = 'Por 1500 y ' + (respi *1500 )+ 'Por 2000' + (respi * 2000);
        }
    if (CALCU >= 1 && CALCU < 11){
        resp = valor * 100 
        }
    if (CALCU > 10 && valor < 21){
        exe = ( valor - 10); 
        resp= (1000) + (exe * 50);
        }
    if (CALCU > 20 && valor < 30){ 
        exe = (valor - 20); 
        resp= (1500) + (450) + (exe * 20);
        }
    return Math.round(resp);
    }
let textbtn = document.getElementById('textbtn');
let texto = document.getElementById('texto');
textbtn.addEventListener('click', letex)
function letex() {
    texto.classList.toggle('show');

    }
let textbtne = document.getElementById('textbtne');
let texte = document.getElementById('texte');
textbtne.addEventListener('click', letexi)
function letexi() {
    texte.classList.toggle('other');
    }
});