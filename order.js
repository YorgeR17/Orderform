/*
   JavaScript: Exercise 5

   Author: george
   Date:

   Filename: order.js



   Functions List:
   todayTxt()
      Displays the current date in the format mm/dd/yyyy.

   startForm()
      Sets up and initializes the form1 Web form.

   resetForm1()
      Reloads the current Web page, resetting the form.

   calcPrice()
      Calculates the price of the customer order by
      multiplying the product price by the quantity ordered.

   calcShipping()
      Calculates the shipping cost of the item

   calcTotal()
      Calculates the total cost of the order including the sales price,
      shipping cost, and sales tax.

   checkForm1()
      Checks the form to ensure that all required fields have been
      entered by the user.

*/

window.onload = startForm;

function todayTxt() {
    var Today = new Date();
    return Today.getMonth() + 1 + "-" + Today.getDate() + "-" + Today.getFullYear();
}
function startForm() {
  document.forms[0].date.value = todayTxt();
  document.forms[0].prod.focus();
  document.forms[0].prod.onchange = calcPrice;
document.forms[0].qty.onchange = calcPrice;

for (var i = 0; i < document.forms[0].shipType.length; i++) {
  document.forms[0].shipType[i].onclick = calcShipping;
  }
  document.forms[0].onsubmit = checkForm1;

  document.forms[0].onreset = resetForm1;

}
function resetForm1() {
  location.reload();
}
function calcPrice() {
  var product = document.forms[0].prod;
  var pIndex = product.selectedIndex;
  var productPrice = product.options[pIndex].value;

  var quantity = document.forms[0].qty;
  var qIndex = quantity.selectedIndex;
  var quantityOrdered = quantity.options[qIndex].value;

  document.forms[0].price.value = (productPrice * quantityOrdered).toFixed(2);

  calcTotal();
}


function calcShipping() {
document.forms[0].ship.value = this.value;

calcTotal();

}

function calcTotal(){
  var priceVal = parseFloat(document.forms[0].price.value);
  var shipVal = parseFloat(document.forms[0].price.value);
  document.forms[0].sub.value = (priceVal + shipVal).toFixed(2);
  var taxVal = 0.05 * (priceVal + shipVal);
  document.forms[0].tax.value = taxVal.toFixed(2);
  document.forms[0].tot.value = (priceVal + shipVal + taxVal).toFixed(2);
}
function checkForm1(){
  if (document.forms[0].prod.selectedIndex ==0) {
    alert("Must select a GPS-ware product");
    return false;}
    else if (document.forms[0].qty.selectedIndex == 0) {
        alert("Must select a quantity to order");
      return false;}
      else if (document.forms[0].ship.value == "0.00") {
          alert("Must select a shipping method");
        return false;}
    else return true;

}
