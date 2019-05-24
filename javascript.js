function aloo() {
alert("aloooo");
}
function dropdownMenu(){
  var menu = document.getElementById("dropdownClick");
  if(menu.style.display === "none"){
    menu.style.display = "block";
  }
  else {
    menu.style.display = "none";
  }
}
function highContrast(){

  var highContrastLink = document.getElementById("highContrastLink");

  if(highContrastLink.innerText === "Активирай режим на висок контраст")
   {
     highContrastOn();
   }

   /*И така научих ОГРОМНАТА разлика между if и else
   else се изпълнява САМО АКО предходното if условие не е изпълнено. За else не се прави отделна проверка. Както го бях направил първо (с 2 if-a) ставаше безкраен цикъл, защото първия if се изпълнява и променя boolean-a, след което и втория if се изпълнява заради променения boolean. И така до безкрай...*/
  else
   {
     highContrastOff();
   }
}

   function highContrastOn(){
   var motto = document.querySelectorAll(".motto");
   var header = document.querySelectorAll(".header");
   var textOnPicture = document.querySelectorAll(".text-on-picture");

    for( var i = 0; i < motto.length; i++){
    motto[i].className += " high-contrast";
    }
    for( var i = 0; i < header.length; i++){
    header[i].className += " high-contrast";
    }
    for( var i = 0; i < textOnPicture.length; i++){
    textOnPicture[i].className += " high-contrast";
    }

    var highContrastLink = document.getElementById("highContrastLink");
    highContrastLink.innerText = "Деактивирай режим на висок контраст";
  }

  function highContrastOff(){
  var motto = document.querySelectorAll(".motto");
  var header = document.querySelectorAll(".header");
  var textOnPicture = document.querySelectorAll(".text-on-picture");

  for( var i = 0; i < motto.length; i++){
  motto[i].className = "motto";
  }
  for( var i = 0; i < header.length; i++){
  header[i].className = "header";
  }

  textOnPicture[0].className = "text-on-picture top";
  textOnPicture[1].className = "text-on-picture bottom";

  var highContrastLink = document.getElementById("highContrastLink");
  highContrastLink.innerText = "Активирай режим на висок контраст";
}

 function dropdownBag(){
   var bag = document.getElementById("shoppingBag");
   bag.style.display = "block";
 }
 function delay(){
   setTimeout(function () {
     var bag = document.getElementById("shoppingBag");
     bag.style.display = "none";
   }, 500);
 }

  function showSigninMenu(){
    var signInMenu = document.getElementById("SigninMenu");

    if(signInMenu.style.display === "none")
     {
      signInMenu.style.display = "block";
     }
     else
     {
      signInMenu.style.display = "none";
     }
  }

 function togglePasswordVisibility() {
   var button = document.getElementById("passwordVisibilityButton");
   var password = document.getElementById("signinPassword");
   if (password.type === "password") {
     password.type = "text";
     button.innerText = "СКРИЙ";
   }
   else {
     password.type = "password";
     button.innerText = "ПОКАЖИ";
   }
 }

  function expandFooter(){
    var shoppingItems = document.querySelectorAll(".shopping.item");
    if(document.getElementById("shoppingFooter").getAttribute("aria-expanded") === "false")
    {
    for( var i = 0; i < shoppingItems.length; i++)
     {
     shoppingItems[i].className += " responsive";
     }
     document.getElementById("shoppingFooter").setAttribute("aria-expanded", "true");
     document.getElementById("footerPanel").className += " responsive";
   }
   else {
     for( var i = 0; i < shoppingItems.length; i++)
      {
      shoppingItems[i].className = "shopping item";
      }
      document.getElementById("shoppingFooter").setAttribute("aria-expanded", "false");
      document.getElementById("footerPanel").className = "footer-panel";
   }
  }
