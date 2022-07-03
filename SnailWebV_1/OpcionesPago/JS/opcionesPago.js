//Ocultar cuadro de la tarjeta
$(document).ready(function() {
    $("input[type=radio]").click(function(event){
        var valor = $(event.target).val();
        if(valor =="tarjeta"){
            $("#div").show();
        } else if(valor == "Paypal") {
            $("#div").hide();
        } else { 
            $("#div").hide();
        }
    });
});

function toggle(elemento) {
    if(elemento.value=="tarjeta") {
        document.getElementById("div").style.display = "block";
     }else{
         if(elemento.value=="Paypal"){
             document.getElementById("div").style.display = "block";
             document.getElementById("div").style.display = "none";
         }else{
             if(elemento.value=="pagEfectivo"){
                  document.getElementById("div").style.display = "block";
                  document.getElementById("div").style.display = "none";
              }  
          }
      }
}