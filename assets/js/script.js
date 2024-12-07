/**
 * @description fonction pour apparraître le formulaire
 * @author Emile Lucas Wilson
 */

// Variable globale



// Selecteur HTML

const oRepFormHTML = document.querySelector(".btn-group button:first-child");
const oFiniFormHTML = document.querySelector(".btn-group button:last-child");
const oFormHTML = document.querySelector("form");
console.log(oRepFormHTML, oFiniFormHTML);

function initialiser(){
    oRepFormHTML.addEventListener("click", popUpForms);
    oFiniFormHTML.addEventListener("click", removePopUpForms);
}


function popUpForms(){
    oFormHTML.classList.remove("invisible");
}

function removePopUpForms(){
    oFormHTML.classList.add("invisible");
}

initialiser();