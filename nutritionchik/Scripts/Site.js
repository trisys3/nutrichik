$("nav").on("mouseenter", ".dropDown a", function () {
    $(this).siblings(".dropDown").toggle();
});
$("nav").on("mouseleave", ".dropDown .dropDown", function () {
    $(this).toggle();
});