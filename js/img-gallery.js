// Purpose: Basic responsive image viewing controls
// Author: Nicholas Fazzolari
// Date: 11/2/2015

function changeVis() {
    document.getElementById("imgover").className = "gal-overlay-active";
}

function changeHid() {
    document.getElementById("imgover").className = "gal-overlay-hidden";
}

// toggle visibility
document.getElementById("tnsm").addEventListener('click', changeVis);

document.getElementById("imgover").addEventListener('click', changeHid);