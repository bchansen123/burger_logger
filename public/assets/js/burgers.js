$(function() {

    $(".eatTheBurger").on("click", function(event){
        var id = $(this).data("id");
        event.preventDefault();
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
        }).then (function() {
            location.reload();
        });
    });


    
    $(".submitBurger").on("submit", function(event){
        event.preventDefault();
        var createBurger = {
            burger_name: $(".burger").val(),
            eaten_state: 0
        };

        $.ajax("api/burgers", {
            type: "POST",
            data: createBurger
        }).then (
            function () {
                location.reload();
            })
    });    
});