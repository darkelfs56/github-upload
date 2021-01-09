document.getElementById("setlist").style.display = "block";

const btn = document.querySelector("button");

btn.onclick= function (){
  var e = document.getElementById("pc");
  var strUser = e.value;

  var $table = $('<table/>');
  $('#setlist').empty();

  var $thead = $table.append('<thead/>').children('thead');
  var $tbody = $table.append('<tbody/>').children('tbody');

  $thead.append('<tr/>').children('tr:last')
  .append("<td>Product Type</td>")
  .append('<td>Product Name</td>')
  .append('<td>Price</td>')

  if(strUser < 2500){
    alert("Sorry we don't have any suggestion for your budget range");
  }else if(strUser >= 2500 && strUser < 5000){
    //alert("GPU\tRX560\tRM525\nCPU\tR3 3100\tRM450\ncpucooler\tStock\tRM0\nMotherboard\tMSI B450M\tRM325\nRAM\t4GB DDR4\tRM75\nstorage\t2TB HDD\tRM250\nstorageOS\t240GB SSD\tRM125\nPSU\tCorsair 450W\tRM250\nCase\tArcadia 2\tRM175");

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
  }else if(strUser>= 5000 && strUser < 10000){
    //alert("GPU\tRTX2060\tRM1300\nCPU\tR5 3600\tRM975\ncpucooler\tPure Rock 2\tRM175\nMotherboard\tMSIX570-A Pro\tRM725\nRAM\t8GB DDR4\tRM175\nstorage\t2TB HDD\tRM250\nstorageOS\t500GB SSD\tRM275\nPSU\tSeasonic 620W\tRM325\nCase\tH510\tRM325");

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
  }else {

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
    //alert("GPU \t RTX 3070 \t RM3300 \nCPU \t AMD Ryzen 5 5600X \t RM1700 \nCPU Cooler \t Dark Rock 4 \t RM300 \nMotherboard \t GIGABYTE X570 AORUS ELITE \t RM925 \nRAM \t Corsair Vengeance LPX 16GB \t RM325 \nHDD \t Seagate BarraCuda 2TB \t RM250 \nSSD \t Crucial P1 1TB \t RM675 \nPower Supply \t Corsair 750W (G) \t RM525 \nCase \t H710i \t RM725");
  }


}
