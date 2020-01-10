
/*Define array called characters with letters, numbers, and symbols
Join function to remove commas from output*/

var characters = [
    "A","B","C","D","E","F","G","H","I","J",'K','L','M','N','O','P','Q','R','S','T',
    'U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
    'p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6',
    '7','8','9','0'
  ].join('') ;

  var symbols = [
    "!","#","$","%","*","<","=",">","?","@","&","+"
 
 ].join('') ;

var array3 = characters.concat(symbols);


console.log(array3);


/*Define function genPassword to link click from HTML button
Link with ID "password" to return in text box of HTML*/

function genPassword(hello) {
    var digits = window.prompt("How many characters would you like to enter?");
    while (digits < 7 || digits > 180 || isNaN(digits)) {
      alert("Please try again");
      var digits = window.prompt("How many?");
  
  }

  var yes = confirm("Would you like to include symbols?");

if (yes == true) {
  var hello = array3;
}
else {
  var hello = characters;
}

  var result =[];
    for (var i = 0; i < digits; i++){
        result.push(hello[Math.floor(Math.random() * hello.length)]);
    }
    
   // return result.join('');

    document.getElementById("password").innerHTML = result.join('');


  }
//Copy to Clipboard function - for extra credit

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


