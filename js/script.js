// var randomNumber = function newNumber(e) {
//   var number = Math.floor(Math.random(e) * 5 + 1);
//   return number
// }
var bio1 = document.getElementById("bio1");
var bio2 = document.getElementById("bio2");
var bio3 = document.getElementById("bio3");
var bio4 = document.getElementById("bio4");
var bio5 = document.getElementById("bio5");
var bioButton = document.getElementById("bio-button");
var allBios = [ bio1 , bio2 , bio3 , bio4, bio5 ];
var bioRefresh = [ bio1 , bio2 , bio3 , bio4, bio5, bioButton ];

function newBio() {
  allBios.forEach ( function (e) {
    e.setAttribute( "class", "refresh-text display-none" );
  });
  var randomNumber = Math.floor(Math.random() * 5 + 1);

  if (randomNumber == 1) {
    bio1.setAttribute( "class", "refresh-text display-inline" );
  }
  if (randomNumber == 2) {
    bio2.setAttribute( "class", "refresh-text display-inline" );
  }
  if (randomNumber == 3) {
    bio3.setAttribute( "class", "refresh-text display-inline" );
  }
  if (randomNumber == 4) {
    bio4.setAttribute( "class", "refresh-text display-inline" );
  }
  if (randomNumber == 5) {
    bio5.setAttribute( "class", "refresh-text display-inline" );
  }

  console.log("run");
};

window.onload = newBio;

bioRefresh.forEach ( function (e) {
  e.addEventListener("click", newBio);
});
