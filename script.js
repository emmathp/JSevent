// fonctionnalité 1 - cliquer sur le footer (portant le tag <footer>) --> afficher le mot "clique" en console.//

var footer = document.getElementsByTagName('footer')[0];

footer.addEventListener("click", function(){ 
  onClick = console.log("clique");
});

//Fonctionnalité 1-bis - cliquer sur le footer (portant le tag <footer>) ---> afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.//


var clicCount = document.getElementsByTagName('footer')[0];
  count = 0;
  
clicCount.onclick = function() {
  count += 1;
  console.log(`clic numéro ${count}`);
};



// Fonctionnalité 2 : "Hamburger Menu"  -  si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse + et si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader 


  // document.querySelectorAll("button.navbar-toggler")[0].addEventListener("click", function (event) {
  //   var target = this.getAttribute("data-target");
  //   var subbar = document.querySelectorAll(target)[0];
  //   subbar.className = (subbar.className + " show").replace(/ show show/, "");
  // });

  let navbar = document.querySelector('button');
  let humburgerMenu = document.getElementById('navbarHeader');
  
  
  navbar.addEventListener("click", toggleHamburger);
  
  function toggleHamburger(){
    humburgerMenu.classList.toggle("collapse")
  }

// Fonctionnalité 3 : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page).  //


var editRow1 = document.getElementsByClassName("card-text")[0] ;
console.log(editRow1)
var btnEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0] ;
console.log(btnEdit)

btnEdit.addEventListener('click', function(){
  editRow1.style.color = 'orange';
});


// Fonctionnalité 4 : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! 
// indice :  faire un "toggle" sur le style du texte. //

var editRow2 = document.getElementsByClassName("card-text")[1] ;
console.log(editRow2)
var btnEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1] ;
console.log(btnEdit)

btnEdit.addEventListener('click', function(){
    if (editRow2.style.color !== 'green'){
      editRow2.style.color = "green" ;
    }
    else { 
      editRow2.style.color = "";
    }
});


// Fonctionnalité 5 :si un utilisateur double clique sur la navbar en haut, 
//tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).//



var  navbar = document.getElementsByTagName('header')[0];
console.log(navbar);
var cdnBootstrap = document.getElementsByTagName('head')[0].getElementsByTagName('link')[0];
console.log(cdnBootstrap);

navbar.addEventListener('dblclick',function(){
  if (cdnBootstrap.disabled === false){
    cdnBootstrap.disabled = true;
  }
  else {
    cdnBootstrap.disabled = false;
  }
});



// T'as demandé la reponse ahah T'es forte = Jai demandé comment faire le if pcq yavait laction au dessus. Et ils mont dit : ba tas fait pareil au dessus. Et jai dit : ah oui

// JE PUSH
// Fonctionnalité 6 : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !



  
  // function toggleHamburger(){
  //   humburgerMenu.classList.toggle("collapse")
  // }
