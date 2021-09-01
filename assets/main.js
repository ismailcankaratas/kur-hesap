let data = fetch("https://finans.truncgil.com/today.json")
.then(response=>response.json())
.then(veri=>{
$(".guncel").html("Güncelleme Tarihi : " + veri["Update_Date"]);

$(".miktar").keyup(function() {
var miktar = $(".miktar").val();
var dolar = veri["USD"].Alış.replace(",",".");
var dolarHesap = parseFloat(miktar) * parseFloat(dolar) ;
$(".dolar").html(parseFloat(dolarHesap));

})
});
