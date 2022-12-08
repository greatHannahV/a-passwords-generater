const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


let genPassword = document.getElementById("generatePassword")
var password1 = document.getElementById("firstPassword");
var password2 = document.getElementById("secondPassword");
let firstPass = ""
let secPass = ""
let customerNum 
//abylity to set password length
document.getElementById("myButton").onclick=function(){
 customerNum = document.getElementById("passLength").value;
 
}
//
/*try to filter characters*/

genPassword.addEventListener("click", function () {


    for (i = 0; i < customerNum ;i++) {
        let randomFirstPass = Math.floor(Math.random() * characters.length)
        firstPass += characters[randomFirstPass]
        let randomSecPass = Math.floor(Math.random() * characters.length)
        secPass += characters[randomSecPass]
    }

    password1.textContent = firstPass
    password2.textContent = secPass
    firstPass = ""
    secPass = ""

})
//copy passwords by a click
password1.addEventListener('click', function () {
  var text = password1.textContent;
  // Copy the text inside the text field:
  navigator.clipboard.writeText(text);
  // Alert the copied text:
  alert('Copied : ' + text);
});

password2.addEventListener('click', function () {
  var text = password2.textContent;
  navigator.clipboard.writeText(text);
  alert('Copied : ' + text);
})
/*let filterByNum = password1.replace(/[0-9]/g, '');
let filterByCharacters = password1.replace(/[^\w ]/g, '');*/ //I cannot do sorting by el and num

