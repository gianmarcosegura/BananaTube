function init() {
    console.log("DOM Cargado Jquery");

    $("#onboarding-spanish").click(function () {
        console.log("clicked-on-spanish");
        $("#onboarding2").removeClass("hidden");
        $("#onboarding1").addClass("hidden");
    });

    $("#onboarding-british").click(function () {
        console.log("clicked-on-british");
        $("#onboarding2").removeClass("hidden");
        $("#onboarding1").addClass("hidden");
    });

     $("#onboarding-fun").click(function () {
        console.log("clicked-on-fun");
        $("#onboarding3").removeClass("hidden");
        $("#onboarding2").addClass("hidden");
    });

    $("#onboarding-learn").click(function () {
        console.log("clicked-on-learn");
        $("#onboarding3").removeClass("hidden");
        $("#onboarding2").addClass("hidden");
    });


     $("#onboarding-music").click(function () {
        console.log("clicked-on-music");
    });
     $("#onboarding-cinema").click(function () {
        console.log("clicked-on-cinema");
    });


}

$('document').ready(init);
