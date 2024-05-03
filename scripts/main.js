import * as mdb from 'mdb-ui-kit'; // lib
window.mdb = mdb;

import { Tab, initMDB } from "mdb-ui-kit";

initMDB({ Tab });
import { Ripple, initMDB } from "mdb-ui-kit";
// libreria de MDA

//codigo del aside
initMDB({ Ripple });
const boton = document.getElementById('boton');
const aside = document.getElementById('lateral');
const subHead = document.getElementById('sub-head');
var isActive = false;

//evento del boton
boton.addEventListener('click', function () {
    if (!isActive) {
        aside.classList.add('activo');
        isActive = !isActive;
    }
    else {
        aside.classList.remove('activo');
        isActive = !isActive;
    }
});
subHead.addEventListener('click', function () {
    if (isActive) {
        aside.classList.remove('activo');
        isActive = !isActive;
    }
});

