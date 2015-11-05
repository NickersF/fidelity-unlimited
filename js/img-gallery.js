// Purpose: Basic responsive image viewing controls
// Author: Nenad Pantic, Nicholas Fazzolari
// Date: 11/2/2015

function changeVis() {
    'use strict';
    document.getElementById("imgoverlay").className = "gal-overlay-active";
}

function changeHid() {
    'use strict';
    document.getElementById("imgoverlay").className = "gal-overlay-hidden";
}

// toggle visibility
document.getElementById("tnsm").addEventListener('click', changeVis);

document.getElementById("imgoverlay").addEventListener('click', changeHid);

// append divs to each row this function needs to be more extensible
(function () {
    'use strict';
    //function body
    function createDiv() {
        var imageContainer = document.createElement("div");
        
        imageContainer.className = "col-md-3";
        imageContainer.textContent = "Automatically Generated div Element";
        
        return imageContainer;
    }
    
    function createAndModifyDivs() {
        var row = document.getElementById("row1"), // replace with function argument value
            newDivs = [],
            i = 0,
            numOfDivs = 4; // replace with argument value
        
        for (i; i < numOfDivs; i += 1) {
            newDivs.push(createDiv());
            row.appendChild(newDivs[i]);
        }
        
        newDivs.textContent = "Edited Via Function";
    }
    
    createAndModifyDivs();
    
}());