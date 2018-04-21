
// var playerOne1
var rockPlayerone;
var scissorsPlayerOne;
var paperPlayerOne;
var winsPlayerOne = 0;
var lossesPlayerOne = 0;
var tiesPlayerOne = 0;
var onesPick;

// var playerOne1
var playerTwo;
var rockPlayerTwo;
var scissorsPlayerTwo;
var paperPlayerTwo;
var winsPlayerTwo = 0;
var lossesPlayerTwo = 0;
var tiesPlayerTwo = 0;

var numberOfPlayers = 2
var chat;


//---------------------------------------------------------------------------------
//start of program
$(document).ready(function () {
  $("#startOfgame").click(function () {
    event.preventDefault();
    var playerOne = $("#playerOneEnter").val();
    var oneRock = $(".rockOne").val();
    var onePaper = $(".paperOne").val();
    var oneScissors = $(".scissorsOne").val();

    playerOneLoad(playerOne);
    getMyUserId(playerOne);
    loadPlayerOneDefaults(oneRock, onePaper, oneScissors);
    playerOnesPick(onesPick)


  });
});
//--------------------------------------------------------------------------------
//  sets vas defaults
function loadPlayerOneDefaults(oneRock, onePaper, oneScissors) {
  var playerOne = $("#playerOneEnter").val()
  var oneRock = $(".rockOne").val()
  var onePaper = $(".paperOne").val()
  var oneScissors = $(".scissorsOne").val()
}
//--------------------------------------------------------------------------------
//loads player ones name and choices
function playerOneLoad(playerOne) {
  $("#playerOneEnter").val('')
  console.log(playerOne)
  $("#playerOne").text(playerOne)
  $("#playerOne").append("</br><p class = rockOne>Rock")
  $("#playerOne").append("</br><p class = paperOne>Paper")
  $("#playerOne").append("</br><p class = scissorsOne>Scissors")

}
//-------------------------------------------------------------------------------
//clear choices and set player pick
function clearPlayerOne(pick) {
  $(".rockOne").val('')
  $(".paperOne").val('')
  $(".scissorsOne").val('')
  $(".pickOne").text(pick)

}
//-------------------------------------------------------------------------------
//upate dom to player ones pick
function playerOnesPick(onesPick) {
  $(document).on('click', '.rockOne', function () {
    var pick = $(this).text()
    clearPlayerOne(pick)
  });
  $(document).on('click', '.paperOne', function () {
    var pick = $(this).text()
    clearPlayerOne(pick)
  });
  $(document).on('click', '.scissorsOne', function () {
    var pick = $(this).text()
    clearPlayerOne(pick)
  });
}
//--------------------------------------------------------------------------------
// chat room
function chat(chatRoom) {
  $("#conversation").click(function () {
    event.preventDefault();
    chatRoom = $("#chatRoom").val()
    $("#chat").append(chatRoom + "</br>")
    $("#chatRoom").val('')
  });
}
//--------------------------------------------------------------------------------
//scroll function
x = 0;
$(document).ready(function () {
  $("div").scroll(function () {
    $("span").text(x += 1);
  });
});
//-------------------------------------------------------------------------------

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDwTiHYUYg_sU3iruOfIhm2ueuPoQ4G24c",
  authDomain: "newdata-2c67d.firebaseapp.com",
  databaseURL: "https://newdata-2c67d.firebaseio.com",
  projectId: "newdata-2c67d",
  storageBucket: "newdata-2c67d.appspot.com",
  messagingSenderId: "540963169585"
};
firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
var database = firebase.database();
chat(chatRoom);
//------------------------------------------------------------------------------------
//add choices to the firebase
//having problems calling values from the dom
function getMyUserId(playerOne) {
  database.ref().set({
    Playerone: playerOne,
    oneRock: "Rock",
    onePaper: "Paper",
    oneScissors: "Scissors",
    ChatRoom: "test",
  });
  chat(chatRoom);
  // console.log(chatRoom)
}
// ----------------------------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function (snapshot) {

  // //     // If Firebase has a highPrice and highBidder stored (first case)
  // //     if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
  // console.log(snapshot)
  // //       // Set the variables for highBidder/highPrice equal to the stored values in firebase

  //       // highPrice = (snapshot.val().highPrice);
  //       // highBidder = (snapshot.val().highBidder);


  //       // Change the HTML to reflect the stored values
  // $("#highest-price").text(highPrice);
  // $("#highest-bidder").text(highBidder);

  //       // Print the data to the console.
  // console.log(highBidder, highPrice)

});

// //     // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
// //     else {


// //       // Change the HTML to reflect the initial values
      // $("#highest-price").text(initialBid);
      // $("#highest-bidder").text(initialBidder);

// //       // Print the data to the console.
// //       console.log(initialBid, initialBidder)

// //     }


// //     // If any errors are experienced, log them to console.
// //   }, function (errorObject) {
// //     console.log("The read failed: " + errorObject.code);
// //   });

// //   // --------------------------------------------------------------

// //   // Whenever a user clicks the submit-bid button
// //   $("#submit-bid").on("click", function (event) {
// //     // Prevent form from submitting
// //     event.preventDefault();

// //     // Get the input values
// //     var bidderName = $("#bidder-name").val().trim();
// //     var bidderPrice = parseInt($("#bidder-price").val().trim());


// //     // Log the Bidder and Price (Even if not the highest)
// //     console.log(bidderName);
// //     console.log(bidderPrice);

// //     if (bidderPrice > highPrice) {

// //       // Alert
// //       alert("You are now the highest bidder.");

// //       // Save the new price in Firebase
// //       database.ref().set({
// //         highBidder: bidderName,
// //         highPrice: bidderPrice
// //       });

// //       // Log the new High Price
// //       console.log("New High Price!");
// //       console.log(bidderName);
// //       console.log(bidderPrice);


// //       // Store the new high price and bidder name as a local variable


// //       // Change the HTML to reflect the new high price and bidder

// //     }

// //     else {
// //       // Alert
// //       alert("Sorry that bid is too low. Try again.");
// //     }

// //   });


