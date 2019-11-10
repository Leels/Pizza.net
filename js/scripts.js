//Back-end logic for pizza order--

function PizzaOrder(size, crust, beverages, combo, meatToppings, veggieToppings) {
  this.size = size,
  this.crust = crust,
  this.beverages = beverages,
  this.combo = combo,
  this.meatToppings = meatToppings,
  this.veggieToppings = veggieToppings,
  this.price = 0
}

PizzaOrder.prototype.orderPrice = function() {
  if (this.size === "small") {
     this.price += 8;
  } else if (this.size === "medium") {
     this.price +=10;
  } else if (this.size === "large") {
     this.price +=12;
  } else if (this.size === "x-large") {
     this.price +=14;
  }

  if (this.crust === "deep-dish") {
    this.price +=2;
  }

  if (this.combo === "meat-combo") {
    this.price +=6;
  } else if (this.combo === "veggie-combo") {
    this.price +=4;
  }

  for (var i = 0; i < this.beverages.length; i++) {
      this.price += 3;
    }

  for (var i = 0; i < this.meatToppings.length; i++) {
      this.price += 2.5;
    }

  for (var i = 0; i < this.veggieToppings.length; i++) {
      this.price += 1.5;
    }

    return this.price.toFixed(2);
}

//Front-end logic for pizza order

$(document).ready(function(){
  $("form#pizza-order").submit(function(event){
    event.preventDefault();

    var inputSize = $('input[name=size]:checked').val();
    var inputCrust = $('input[name=crust]:checked').val();
    var inputBeverages = $('input:checkbox[name=beverages]:checked').map(function() {
      return this.value;}).get();
    var inputCombo = $('input[name=combo]:checked').val();
    var inputMeatToppings = $('input:checkbox[name=meats]:checked').map(function() {
      return this.value;}).get();
    var inputVeggieToppings = $('input:checkbox[name=veggies]:checked').map(function() {
      return this.value;}).get();
    var newPizzaOrder = new PizzaOrder(inputSize, inputCrust, inputBeverages, inputCombo, inputMeatToppings, inputVeggieToppings);
    var totalPrice = newPizzaOrder.orderPrice();

    $("#orderSize").text(inputSize);
    $("#orderCrust").text(inputCrust);
    $("#orderToppings").text(inputCombo + inputMeatToppings + inputVeggieToppings);
    $("#orderBeverages").text(inputBeverages);
    $("#orderPrice").text("$" + totalPrice);

    $("#confirmation").show();

  });
});
