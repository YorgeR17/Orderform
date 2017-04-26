/*
   JavaScript: Exercise 5

   Author:
   Date:

   Filename: payment.js



   Functions List:
   startForm()
      Sets up and initializes the form2 Web form.

   checkForm3()
      Checks the form to ensure that all required fields have been
      entered by the user.

   selectedCard()
      Returns the index number of the selected credit card

   checkNumber()
      Returns a Boolean value indicating whether the credit card
      number is valid

   luhn()
      Returns a Boolean value indicating whether the credit card
      number satisfies the Luhn formula


*/

window.onload = startForm;

function startForm() {
    document.forms[0].onsubmit = checkForm3;
}

function checkForm3() {
    if (selectedCard() == -1) {
        alert("You must select a credit card");
        return false;
    } else if (document.forms[0].cname.value.length == 0) {
        alert("You must enter the name on your credit card");
        return false;
    }
    else if (checkNumber() == false) {
      alert("Your card number is invalid");
      return false;}
       else return true;

}


function selectedCard() {
    var card = -1;
    for (var i = 0; i < document.forms[0].ccard.length; i++) {
        if (document.forms[0].ccard[i].checked) card = i;
    }
    return card;
}

function checkNumber(){
  var wsregx = /\s/g;
  var cnum = document.forms[0].cnumber.value.replace(wsregx, "");
  switch (selectedCard()) {
case 0: cregx = /^3[47]\d{13}$/; break;
case 1: cregx = /^30[0-5]\d{11}$|^3[68]\d{12}$/; break;
case 2: cregx = /^6011\d{12}$/; break;
case 3: cregx = /^5[1-5]\d{14}$/; break;
case 4: cregx = /^4(\d{12}|\d{15})$/; break;



  }
  return (cregx.test(cnum) && luhn(cnum));
}


function luhn(num) {
    var luhnTotal = 0;
    for (var i = num.length - 1; i >= 0; i--) {
        luhnTotal += parseInt(num.charAt(i));
        i--;
        num2 = new String(num.charAt(i) * 2);
        for (var j = 0; j < num2.length; j++) {
            luhnTotal += parseInt(num2.charAt(j));
        }
    }
    return (luhnTotal % 10 == 0);
}
