//Have everything on page when loaded.
$("#currentDay").text(moment().format("dddd")); 
$("#currentDay").append("<p class=date></p>"); 
$(".date").text(moment().format("LL")); 
$(".date").append("<p id=clock></p>"); 
$("p").css("line-height","150%");

//Function to display clock.
function displayTime() {
  var time = moment().format('hh:mm:ss A');
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
  setInterval(hourUpdater, 90000);
   

//Save information entered.
var events = [];                                                    //Saving events as an array.

$(".saveBtn").on("click", function() {                              //Event listener for the save button.
    var task = $(this).siblings(".description").val();
    var timeslot = $(this).parent().attr("id");
    events.push({timeslot:timeslot, task:task})
    localStorage.setItem("events", JSON.stringify(events));         //Saving events array into local storage.
    
  });

//Display Events after saved to local storage.
var storedEvents = JSON.parse(localStorage.getItem("events"));

  if (storedEvents !== null) {
    events = storedEvents;
  }

  for(var i = 0; i < events.length; i++) {
    var userDescription = events[i].task;
    $("#" + events[i].timeslot).children(".description").text(userDescription);
  }



})