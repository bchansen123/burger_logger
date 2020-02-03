$(function() {
    $(".submitBurger").on("submit", function(event){
        var createBurger = {
            b_name = $("burger").val(),
            eaten = 0
        };

    });

    $.ajax("/api/burgers" + id, {
        type: "PUT",
        data: eaten
    }).then {
        
    }
});