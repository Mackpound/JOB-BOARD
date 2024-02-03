'use strict';

var buttons = document.querySelectorAll("button")
    buttons.forEach((button) => {
        button.onclick = function(){
            button.classList.toggle('isClicked');
        }
    })