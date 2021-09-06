let data = fetch("https://finans.truncgil.com/today.json")
.then(response=>response.json())
.then(veri=>{
$(".guncel").html("Güncelleme Tarihi : " + veri["Update_Date"]);
$(".usd").html("Dolar " + veri["USD"].Alış + "₺");
$(".eur").html("Euro " + veri["EUR"].Alış + "₺");
$(".gram-altin").html("Gran Altın " + veri["gram-altin"].Alış + "₺");

 $("#doviz").on("change", function() {
  var secilenDoviz = $("#doviz").val();
  var miktar = $(".miktar").val();
  var dolar = veri[secilenDoviz].Alış.replace(",",".");
  var dolarHesap = parseFloat(miktar) * parseFloat(dolar).toFixed(2);
  $(".dolar").html(parseFloat(dolarHesap) + "₺").toFixed(2);

 })
$(".miktar").keyup(function() {
var secilenDoviz = $("#doviz").val();
var miktar = $(".miktar").val();
var dolar = veri[secilenDoviz].Alış.replace(",",".");
var dolarHesap = parseFloat(miktar) * parseFloat(dolar).toFixed(2);
$(".dolar").html(parseFloat(dolarHesap) + "₺");

})
});
