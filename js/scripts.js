//Back-end logic for pizza order

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
  if (this.size === "Small") {
    this.price += 8;
  } else if (this.size === "Medium") {
    this.price +=10;
  } else if (this.size === "Large") {
    this.price +=12;
  } else if (this.size === "X-large") {
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

//Front End logic for customer information form
$(document).ready(function(){
  $("form#customer-info").submit(function(event){
    event.preventDefault();

    let nameInput = $("input#customerName").val();
    let pickUpDelivery = $('input[name=delivery]:checked').val();

    $("#customer-info").hide();
    $("#pizza-order").slideDown("slow");
    $(".name").text(nameInput).val();

    //Front-end logic for pizza order
    $(document).ready(function(){
      $("form#pizza-order").submit(function(event){
        event.preventDefault();

        let inputSize = $('input[name=size]:checked').val();
        let inputCrust = $('input[name=crust]:checked').val();
        let inputBeverages = $('input:checkbox[name=beverages]:checked').map(function() {
          return this.value;}).get();
        let inputCombo = $('input[name=combo]:checked').val();
        let inputMeatToppings = $('input:checkbox[name=meats]:checked').map(function() {
          return this.value;}).get();
        let inputVeggieToppings = $('input:checkbox[name=veggies]:checked').map(function() {
          return this.value;}).get();
        let newPizzaOrder = new PizzaOrder(inputSize, inputCrust, inputBeverages, inputCombo, inputMeatToppings, inputVeggieToppings);
        let totalPrice = newPizzaOrder.orderPrice();

        $("#orderSizeCrust").text(inputSize + " " + inputCrust);
        
        if (inputCombo) {
          $("#orderCombo").text(inputCombo + ".");
        }
        if (inputMeatToppings) {
          $("#orderMeatToppings").text(inputMeatToppings);
        }
        if (inputVeggieToppings) {
          $("#orderVeggieToppings").text(inputVeggieToppings);
        }
        if (inputBeverages) {
          $("#orderBeverages").text(" " + inputBeverages);
        }
        $("#orderPrice").text("$" + totalPrice);
        $("#confirmation").show();
        $(".submit-btn").hide();
        $("#initially-hidden").show();

        if (pickUpDelivery === "delivery") {
          $(".delivery-confirmation").show();
        } else if (pickUpDelivery === "pick-up") {
          $(".pickup-confirmation").show();
        }

        $(".send-order-btn").click(function(){
          $("#pizza-order").hide();
          $(".final").slideDown("slow");
        });

      });
    });

  });
});
