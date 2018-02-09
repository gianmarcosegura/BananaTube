
      
var imagenSeleccionada;
    
function almacenaDato(event){
    imagenSeleccionada = $(event.target).attr('id');
    $(".avatar img").removeClass("bordeRojo");
    $(event.target).addClass("bordeRojo");
    //window.localStorage.setItem("avatar",imagenSeleccionada);
    console.log(imagenSeleccionada);
    $("#avatarSeleccionado").val(imagenSeleccionada);
}
function init(){
    if(window.localStorage.getItem("avatar")){
        //el usuario ya ha seleccionado un avatar
        console.log("oculta");
        //$("#avatares").hide();
        $("#avatarSeleccionado").val(window.localStorage.getItem("avatar"));
    }else{
        //el usuario tiene que seleccionar un avatar
        $(".avatar img").click(almacenaDato);
        //$( "ul" ).click( handler ).find( "ul" ).hide();
    }
}
$(document).ready(init);