const SECOND = document.getElementById('calsec');
const FIRST = document.getElementById('calpri');
const THIRD = document.getElementById('calter');
const PUSH = document.getElementById('ingresar');
const mal = document.getElementById('mal');

PUSH.addEventListener('click', () => {
    const CALCU = document.getElementById('valor').value;

    if (CALCU >0){
        let calpri = calcFlujo(CALCU);
        let volumen = calpri / 24;
        let medio = volumen * 1.5;
        FIRST.innerHTML = calpri + ' cc';
        THIRD.innerHTML = volumen + ' cc/hr';
        SECOND.innerHTML = medio + ' cc/hr: ' +' (m+m/2)';
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
        
    function calcFlujo(CALCU){
        if (CALCU >= 1 && CALCU <= 10){
           respo = CALCU * 100 
            }
        if (CALCU >= 11 && CALCU <= 20){
            respo = (CALCU - 10) * 50 + (10 * 100);
            }
        if (CALCU >= 21 && CALCU <= 29){ 
            resp = (CALCU - 20) * 20 + (9 * 50) + (10 * 100);
            }
        if (CALCU >= 30 ) {
            supfi = ((CALCU * 4) + 7) / (CALCU + 90);
            respo = "Por 1500" + supfi *1500;
            resp = "Por 2000" + supfi * 2000;
            }
        return Math.round(resp);
        }
});
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