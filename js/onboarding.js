   var idioma;
   var objetivo;
   var gusto;


   function init() {
       console.log("DOM Cargado Jquery");



       $("#onboarding-spanish").click(function () {
           console.log("clicked-on-spanish");
           $("#onboarding2").removeClass("hidden");
           $("#onboarding1").addClass("hidden");
           idioma = $("#onboarding-spanish").attr("name");
           console.log(idioma)
       });

       $("#onboarding-british").click(function () {
           console.log("clicked-on-british");
           $("#onboarding2").removeClass("hidden");
           $("#onboarding1").addClass("hidden");
           idioma = $("#onboarding-british").attr("name");
           console.log(idioma)
       });

       $("#onboarding-fun").click(function () {
           console.log("clicked-on-fun");
           $("#onboarding3").removeClass("hidden");
           $("#onboarding2").addClass("hidden");
           objetivo = $("#onboarding-fun").attr("name");
           console.log(objetivo)
       });

       $("#onboarding-learn").click(function () {
           console.log("clicked-on-learn");
           $("#onboarding3").removeClass("hidden");
           $("#onboarding2").addClass("hidden");
           objetivo = $("#onboarding-learn").attr("name");
           console.log(objetivo)
       });


       $("#onboarding-music").click(function () {
           console.log("clicked-on-music");
           gusto = $("#onboarding-music").attr("name");
           console.log(gusto)
       });
       $("#onboarding-cinema").click(function () {
           console.log("clicked-on-cinema");
           gusto = $("#onboarding-cinema").attr("name");
           console.log(gusto)
       });


   }

   $('document').ready(init);