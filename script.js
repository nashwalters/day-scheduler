//Have everything on page when loaded.
$(document).ready(function() {
$("#currentDay").text(moment().format("LL")); 

//Function to display clock.
function displayTime() {
    var time = moment().format('hh:mm A');
    $('#clock').html(time);
    setTimeout(displayTime, 1000);
}
displayTime();
})