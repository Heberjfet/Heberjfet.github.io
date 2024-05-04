import * as mdb from 'mdb-ui-kit'; // lib
window.mdb = mdb;

import { Tab, initMDB } from "mdb-ui-kit";

initMDB({ Tab });
import { Ripple, initMDB } from "mdb-ui-kit";
// libreria de MDA
initMDB({ Ripple });

//codigo del aside
document.addEventListener('DOMContentLoaded', (event) => {
    const boton = document.getElementById('boton');
    const aside = document.getElementById('lateral');
    const subHead = document.getElementById('sub-head');

    //evento del boton
    boton.addEventListener('click', function () {
        aside.classList.toggle('activo');
    });

    //evento del subHead
    subHead.addEventListener('click', function () {
        aside.classList.remove('activo');
    });
});