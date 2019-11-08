//Back-end logic for pizza order--

function PizzaOrder(size, crust) {
  this.size = size,
  this.crust = crust,
  this.beverages = [],
  this.meatToppings = [],
  this.veggieToppings = [],
  this.price = 0
}

PizzaOrder.prototype.orderPrice = function() {
  if (this.size === "small") {
    this.price +=8;
  } else if (this.size === "medium") {
    this.price +=10;
  } else if (this.size === "large") {
    this.price +=12;
  } else { (this.size === "x-large")
    this.price +=14;
  };

  if (this.crust === "deep-dish") {
    this.price +=2;
  };

  if (this.beverages.length >= 1) {
    this.beverages.forEach(function(beverage) {
      this.price += 2;
    })
  };

  if (this.meatToppings.length >= 1) {
    this.meatToppings.forEach(function(meatTopping) {
      this.price += 2.5;
    })
  };

  if (this.veggieToppings.length >= 1) {
    this.veggieToppings.forEach(function(veggieTopping) {
      this.price += 1.5;
    })
  };
  return this.price.toFixed(2);
}
