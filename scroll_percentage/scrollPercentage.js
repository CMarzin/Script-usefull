// Need jquery
$('#about').on("scroll", function(event) {
    var scrollPercent = 100 * $('#about').scrollTop() / ($(document).height() - $('#about').height());
    console.log(scrollPercent,'%');
});
