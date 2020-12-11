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

//Function to colour code time blocks.
function hourUpdater() {
    var  currentHour = moment().format('H')
    $('.colour').each(function() {
    var blockTime = parseInt($(this).prop('id'));
    if (blockTime == currentHour) {
        $(this).addClass("present");
    //  $(this).removeClass("future");
    //  $(this).removeClass("past");
    } else if (blockTime < currentHour){
        $(this).addClass("past");
    //  $(this).removeClass("present");
    //  $(this).removeClass("future");
    }else {
        $(this).addClass("future");
    //  $(this).removeClass("present");
    //  $(this).removeClass("past");
    }
});
}
hourUpdater();
var checkTime = setInterval(hourUpdater, 15000);



})