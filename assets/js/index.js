$(document).ready(function() {
    $(".text-body-secondary").click(function() {
        var idBoton = $(this).attr("id");
        $("#detalles" + idBoton).toggle();
        $(".page-content").toggleClass("blurred-background");
    });

    $(".btn-close").click(function() {
        $(this).closest(".detalles").hide();
        $(".page-content").removeClass("blurred-background");
    });
});
