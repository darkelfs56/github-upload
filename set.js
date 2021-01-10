document.getElementById("setlist").style.display = "block";

const btn = document.querySelector("button.submit");

btn.onclick = function() {
  var e = document.getElementById("pc");
  var budgetValue = e.value;
  var $table = $('<table/>');
  $('#setlist').empty();
  $('#note').empty();
  var $thead = $table.append('<thead/>').children('thead');
  var $tbody = $table.append('<tbody/>').children('tbody');

  $thead.append('<tr/>').children('tr:last')
    .append("<td>Product Type</td>")
    .append('<td>Product Name</td>')
    .append('<td>Price</td>')

  if (budgetValue < 0) {
    alert("Please input a positive number.");
  } else if (budgetValue >= 0 && budgetValue < 2500) {
    alert("Sorry we don't have any suggestion for your budget range.");
  } else if (budgetValue >= 2500 && budgetValue < 5000) {

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>GPU</td>")
      .append("<td>RX560</td>")
      .append("<td>RM525</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>CPU</td>")
      .append("<td>R3 3100</td>")
      .append("<td>RM450</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>CPU Cooler</td>")
      .append("<td>None</td>")
      .append("<td>RM0</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>Motherboard</td>")
      .append("<td>MSI B450M Pro</td>")
      .append("<td>RM325</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>RAM</td>")
      .append("<td>4GB DDR4</td>")
      .append("<td>RM75</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>HDD</td>")
      .append("<td>2TB</td>")
      .append("<td>RM250</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>SSD</td>")
      .append("<td>240GB</td>")
      .append("<td>RM125</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>PSU</td>")
      .append("<td>Corsair 450W</td>")
      .append("<td>RM250</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>Case</td>")
      .append("<td>Arcadia II</td>")
      .append("<td>RM175</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td><b>Total</b></td>")
      .append("<td><b>RM2175</b></td>")

    $table.appendTo('.setlist');
    $('#note').append("Note: The remaining money can be used to buy monitor, mouse and keyboard as they are not listed in the list.");

  } else if (budgetValue >= 5000 && budgetValue < 10000) {

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>GPU</td>")
      .append("<td>RTX 2060</td>")
      .append("<td>RM1300</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>CPU</td>")
      .append("<td>R5 3600</td>")
      .append("<td>RM975</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>CPU Cooler</td>")
      .append("<td>Pure Rock 2</td>")
      .append("<td>RM175</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>Motherboard</td>")
      .append("<td>MSI X570-A PRO</td>")
      .append("<td>RM725</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>RAM</td>")
      .append("<td>8GB DDR4</td>")
      .append("<td>RM175</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>HDD</td>")
      .append("<td>2TB</td>")
      .append("<td>RM250</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>SSD</td>")
      .append("<td>500GB</td>")
      .append("<td>RM275</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>PSU</td>")
      .append("<td>SeaSonic 620W</td>")
      .append("<td>RM325</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>Case</td>")
      .append("<td>H510</td>")
      .append("<td>RM325</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td><b>Total</b></td>")
      .append("<td><b>RM4525</b></td>")

    $table.appendTo('.setlist');
    $('#note').append("Note: The remaining money can be used to buy monitor, mouse and keyboard as they are not listed in the list.");

  } else {

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>GPU</td>")
      .append("<td>RTX 3070</td>")
      .append("<td>RM3300</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>CPU</td>")
      .append("<td>R5 5600X</td>")
      .append("<td>RM1700</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>CPU Cooler</td>")
      .append("<td>Dark Rock 4</td>")
      .append("<td>RM300</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>Motherboard</td>")
      .append("<td>GIGABYTE X570 Elite</td>")
      .append("<td>RM925</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>RAM</td>")
      .append("<td>16GB DDR4</td>")
      .append("<td>RM325</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>HDD</td>")
      .append("<td>2TB</td>")
      .append("<td>RM250</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>SSD</td>")
      .append("<td>1TB</td>")
      .append("<td>RM675</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>PSU</td>")
      .append("<td>Corsair 750W</td>")
      .append("<td>RM525</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td>Case</td>")
      .append("<td>H710i</td>")
      .append("<td>RM725</td>")

    $tbody.append('<tr/>').children('tr:last')
      .append("<td><b>Total</b></td>")
      .append("<td><b>RM8725</b></td>")

    $table.appendTo('.setlist');
    $('#note').append("Note: The remaining money can be used to buy monitor, mouse and keyboard as they are not listed in the list.");

  }
}
