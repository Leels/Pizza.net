//Back-end logic for pizza order--

function PizzaOrder(size, crust, beverages, meatToppings, veggieToppings) {
  this.size = size,
  this.crust = crust,
  this.beverages = beverages
  this.meatToppings = meatToppings,
  this.veggieToppings = veggieToppings,
  this.price = 0
}

PizzaOrder.prototype.orderPrice = function() {
  if (this.size === 'small') {
    this.price += 8;
  } else if (this.size === 'medium') {
    this.price += 10;
  } else if (this.size === 'large') {
    this.price += 12;
  } else if (this.size === 'x-large') {
    this.price += 14;
  }
console.log(this.price)
  // if (this.crust === "deep-dish") {
  //   this.price += 2;
  // }
  //
  // for (var i = 0; i < this.beverages.length; i++) {
  //   this.price += 3;
  // }
  //
  // for (var i = 0; i < this.meatToppings.length; i++) {
  //   this.price += 2.5;
  // }
  //
  // for (var i = 0; i < this.veggieToppings.length; i++) {
  //   this.price += 1.5;
  // }
  // return (this.price).toFixed(2);
  // console.log(this.price);
}

//frontend logic


$(document).ready(function() {
  $('form#pizza-order').submit(function(event) {
    event.preventDefault();

    var inputSize = $('input[name=size]:checked').val();
    var inputCrust = $('input[name=crust]:checked').val();
    var inputBeverages = $('input:checkbox[name=beverages]:checked').map(function() {
      return this.value;
    }).get();
    var inputMeatToppings = $('input:checkbox[name=meatToppings]:checked').map(function() {
      return this.value;
    }).get();
    var inputVeggieToppings = $('input:checkbox[name=veggieToppings]:checked').map(function() {
      return this.value;
    }).get();
    var newPizzaOrder = new PizzaOrder(inputSize, inputCrust, inputBeverages, inputMeatToppings, inputVeggieToppings);

    newPizzaOrder.orderPrice();

    var totalPrice = newPizzaOrder.orderPrice();
    $("#total").text(totalPrice);





  });


});
