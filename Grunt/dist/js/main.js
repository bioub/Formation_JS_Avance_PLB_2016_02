!function(){"use strict";var a=document.querySelector("#resultats");document.querySelector("#carre").addEventListener("click",function(){var b=new Carre(10,20,4);a.innerHTML="Aire du carré : "+b.aire()}),document.querySelector("#cercle").addEventListener("click",function(){var b=new Cercle(10,20,4);a.innerHTML="Aire du cercle : "+b.aire()})}();