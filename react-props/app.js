/*global $*/
$(document).ready(function(){
    $("html").show();
    resizeClientServer();
});

$(window).resize(resizeClientServer);

$(".tab").click(function(){
    setTimeout(resizeClientServer, .5)
});

function resizeClientServer(){
    centerSideCard("#client");
    centerSideCard("#server");
}

function centerSideCard(elementId){
    $(elementId).css("margin-top", $(elementId).height()/-2);
    $(elementId).css("top", ($("#request").height() + 30 + $("#response").height()) / 2 );
    // $(elementId).animate({"margin-top": $(elementId).height()/-2}, 50);
    // $(elementId).animate({"top": ($("#request").height() + 30 + $("#response").height()) / 2 }, 50);
}