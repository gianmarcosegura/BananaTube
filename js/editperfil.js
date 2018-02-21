function showAvatar (){
    console.log("Estoy cambiando el avatar");
    var newAvatar = $(this).attr("src");
    console.log(newAvatar);
    $("#avatarActual").attr("src",newAvatar);
};
$(".eligeAvatar").click(showAvatar);