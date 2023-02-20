// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  // var containerLG = $("#container-lg");
  // var saveBtn = $("#saveBtn");
  // var textArea = $("#textArea");
  var now = dayjs().format("MMM DD, YYYY");
  var currentDay = dayjs().format("dddd");
  var currentTime = dayjs().format("HH");
  $(".currentDay").text(currentDay);
  $(".currentDate").text(now);

  $(".saveBtn").on("click", function () {
    var SaveBtnSib = $(this).siblings(".text").val(); //grabbing btn sibling
    var selectDiv = $(this).parent("div").attr("id"); //grabbing the id identifier for the parent div
    localStorage.setItem(selectDiv, SaveBtnSib);
  });

  var saveLocal = function () {
    //runs immediately
    for (var i = 9; i < 18; i++) {
      $("#" + "hour-" + i + ".text").val(localStorage.getItem("hour-" + i));
    }
    console.log(localStorage);
  };

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes?

  var pastPresentFuture = function () {
    //call at bottom with local storage save
    var timeBlock = $(".time-block");
    console.log(currentTime);

    //we can iterate over the DOM elements of the jQuery object and can execute a function for every matched element   .each
    //https://www.javatpoint.com/jquery-each-method

    //The parseInt method parses a value as a string and returns the first integer.
    //https://www.w3schools.com/jsref/jsref_parseint.asp

    $(timeBlock).each(function () {
      var blockHour = parseInt($(this).attr("data-hour"));
      console.log(blockHour);

      if (blockHour < currentTime) {
        $(this).addClass("past");
      } else if (blockHour > currentTime) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
    });
  };

  // if (blockHour === currentTime) {
  //   $(this).addClass("present");
  // }

  // $(".text") {
  //   var
  // }

  // saveBtn.on("click", timeBlock());
  pastPresentFuture();
  saveLocal();
});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage.
//HINT: What does `this` reference in the click listener
// function?

//How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
// Add code to display the current date in the header of the page.
// mmm/dd/yyyy day HH:mm:ss
// var pastPresentFuture = function () {
//   var currentTime = dayjs().hour();
//   console.log(currentTime);
//   var hour9 = "#hour-9";
//   if (hour9 == currentTime) {
//   }
// };

//How can Day.js be used to get the current hour in 24-hour time?
