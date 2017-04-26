/*

   JavaScript: Exercise #5
   Author:
   Date:

   Filename: contact.js



   Functions List:
   startForm()
      Sets up and initializes the form2 Web form.

   checkForm2()
      Checks the form to ensure that all required fields have been
      entered by the user.

   checkZipRE()
      Checks that a proper zip code has been entered by the user
      with regular expressions

   checkZip()
      Checks that a proper zip code has been entered by the user

   isNonNumeric()
      Returns a Boolean value indicating whether a text string
      contains non-numeric characters


*/

window.onload = startForm;
function startForm(){
  document.forms[0].onsubmit = checkForm2;
}
function checkForm2(){
  if (document.forms[0].fname.value.length == 0){
    alert("You must enter a first name");
    return false;
  }
 else if (document.forms[0].lname.value.length==0) {
    alert("You must enter a last name");
    return false;
}
  else if (document.forms[0].street.value.length==0) {
    alert("You must enter a street adress");
    return false;
  }

  else if (document.forms[0].city.value.length==0) {
      alert("You must enter a city name");
      return false;
}
else if (checkZipRE(document.forms[0].zip.value.length) ==0) {
    alert("Invalid zip code");
    return false;
}

else return true;}






function checkZipRE(zip){
  regx = /^\d{5}(-\d{4})?$|^$/;

  return regx.test(zip);

}




function checkZip(zip){
  if (zip.length!= 0 && zip.length != 5 ){
    return false;}

  else if (isNonNumeric(zip)) return false;{
else {


    return true;}


}
function isNonNumeric(tString){
   var validchars = "0123456789";


  for (var i = 0; i < tString.length; i++) {
 char = tString.charAt(i);
    if (validchars.indexOf(char) == -1)
    return true;

  }

  return false;
}
