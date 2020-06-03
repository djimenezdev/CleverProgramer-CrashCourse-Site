document.getElementById("ResetMe").disabled = true;

//disabled reset button for cat generator
document.getElementById("ResetMeTwo").disabled = true;

//Challenge 1: calc age in days
function CalcAgeDays() {
  var CalcAgeDaysPrompt = prompt("What is Your age?");
  var CalAgeYearsNum = parseInt(CalcAgeDaysPrompt);
  var CalAgeDays = CalAgeYearsNum * 365;
  if (isNaN(CalAgeYearsNum) || CalAgeYearsNum <= 0) {
    while (isNaN(CalAgeYearsNum) || CalAgeYearsNum <= 0) {
      alert("you need to enter a number value");
      CalcAgeDaysPrompt = prompt("What is Your age?");
      CalAgeYearsNum = parseInt(CalcAgeDaysPrompt);
      CalAgeDays = CalAgeYearsNum * 365;
      if (CalAgeYearsNum > 0) {
        var headerMainFour = document.createElement("h1");
        var AgeInDaysAnswer = document.createTextNode(
          "You are " + CalAgeDays + " days old!!"
        );
        headerMainFour.setAttribute("id", "MainDaysTwo");
        headerMainFour.appendChild(AgeInDaysAnswer);
        document
          .getElementById("Age-In-Days-Result")
          .appendChild(headerMainFour);
        document.getElementById("Age-In-Days-Result").style.color = "white";
        document.getElementById("ResetMe").disabled = false;
        document.getElementById("ClickMe").disabled = true;
        break;
      }
    }
  } else {
    var headerMainTwo = document.createElement("h1");
    var AgeInDaysAnswer = document.createTextNode(
      "You are " + CalAgeDays + " days old!!"
    );
    headerMainTwo.setAttribute("id", "ageInDaysh1");
    headerMainTwo.appendChild(AgeInDaysAnswer);
    document.getElementById("Age-In-Days-Result").appendChild(headerMainTwo);
    document.getElementById("Age-In-Days-Result").style.color = "white";
    document.getElementById("ResetMe").disabled = false;
    document.getElementById("ClickMe").disabled = true;
  }
}

function AgeInYears() {
  var Year = new Date();
  var YearMain = Year.getFullYear();
  var AgefromDOB = prompt("Please Enter your year of birth");
  var NumAgefromDOB = parseInt(AgefromDOB);
  var MainAgefromDOB = (YearMain - NumAgefromDOB) * 365;

  if (isNaN(NumAgefromDOB) || NumAgefromDOB <= 0) {
    while (isNaN(NumAgefromDOB) || NumAgefromDOB <= 0) {
      alert("Enter a valid year of birth");
      AgefromDOB = prompt("Please Enter your year of birth");
      NumAgefromDOB = parseInt(AgefromDOB);
      MainAgefromDOB = (YearMain - NumAgefromDOB) * 365;
      if (NumAgefromDOB > 0) {
        var headerMainFive = document.createElement("h1");
        var AgefromDOBAnswer = document.createTextNode(
          "You are " + MainAgefromDOB + " days old!!!!"
        );
        headerMainFive.setAttribute("id", "AgeFromYearsh1");
        headerMainFive.appendChild(AgefromDOBAnswer);
        document
          .getElementById("Age-In-Days-Result")
          .appendChild(headerMainFive);
        document.getElementById("Age-In-Days-Result").style.color = "white";
        document.getElementById("ResetMe").disabled = false;
        document.getElementById("ClickMe").disabled = true;
        break;
      }
    }
  } else {
    var headerMainThree = document.createElement("h1");
    var AgefromDOBAnswer = document.createTextNode(
      "You are " + MainAgefromDOB + " days old!!!!"
    );
    headerMainThree.setAttribute("id", "AgeFromYearsh1");
    headerMainThree.appendChild(AgefromDOBAnswer);
    document.getElementById("Age-In-Days-Result").appendChild(headerMainThree);
    document.getElementById("Age-In-Days-Result").style.color = "white";
    document.getElementById("ResetMe").disabled = false;
    document.getElementById("ClickMe").disabled = true;
  }
}

function BirthorYear() {
  document.getElementById("CatOneButton").disabled = true;
  document.getElementById("CatTwoButton").disabled = true;
  var BirthYearPrompt = prompt(
    "Please enter one of the following to Calculate your age in Days: Year(enter the word 'birth') or Age"
  );
  var LowerCaseprompt = BirthYearPrompt.toLowerCase();
  if (LowerCaseprompt == "age") {
    alert("You choose to enter your age!!!");
    CalcAgeDays();
  } else if (LowerCaseprompt == "birth") {
    alert("You choose to enter your year of birth!!!");
    AgeInYears();
  } else {
    while (LowerCaseprompt != "age" || LowerCaseprompt != "birth") {
      var BirthYearPrompt = prompt(
        "Please enter one of the following to Calculate your age in Days: Year(enter the word 'birth') or Age"
      );
      LowerCaseprompt = BirthYearPrompt.toLowerCase();
      if (LowerCaseprompt == "age") {
        alert("You choose to enter your age!!!");
        CalcAgeDays();
        break;
      } else if (LowerCaseprompt == "birth") {
        alert("You choose to enter your year of birth!!!");
        AgeInYears();
        break;
      }
    }
  }
}

function ResetCalcAgeDays() {
  document.getElementById("ClickMe").disabled = false;
  document.getElementById("ResetMe").disabled = true;
  document.getElementById("Age-In-Days-Result").innerHTML = "";
  document.getElementById("CatOneButton").disabled = false;
  document.getElementById("CatTwoButton").disabled = false;
}

function ResetCalcAgeDaysTwo() {
  document.getElementById("CatMain").innerHTML = "";
  document.getElementById("ResetMeTwo").disabled = true;
  document.getElementById("CatOneButton").disabled = false;
  document.getElementById("CatTwoButton").disabled = false;
  document.getElementById("ClickMe").disabled = false;
}

// Challenge 2: Cat gif
function RandomCatPic() {
  var KittenPicArray = new Array();
  KittenPicArray[0] = new Image();
  KittenPicArray[0].src = "/CleverPictures/CatGifsProjectPics/CatGifFive.gif";

  KittenPicArray[1] = new Image();
  KittenPicArray[1].src = "/CleverPictures/CatGifsProjectPics/CatGifSix.gif";

  KittenPicArray[2] = new Image();
  KittenPicArray[2].src = "/CleverPictures/CatGifsProjectPics/CatGifSeven.gif";

  KittenPicArray[3] = new Image();
  KittenPicArray[3].src = "/CleverPictures/CatGifsProjectPics/CatGifEight.gif";

  var randomKittenPic =
    KittenPicArray[Math.floor(Math.random() * KittenPicArray.length)];
  var img = document.createElement("img");
  var src = document.getElementById("CatMain");
  img = randomKittenPic;
  src.appendChild(img);
}

function MultipleRandomCatPic() {
  document.getElementById("ClickMe").disabled = true;
  document.getElementById("ResetMeTwo").disabled = false;
  var count = 0;
  for (var i = 1; i < 5; i++) {
    RandomCatPic();
  }

  document.getElementById("CatOneButton").onclick = function () {
    for (var i = 1; i < 5; i++) {
      RandomCatPic();
    }
    count++;
    // console.log(count);
    if (count == 4) {
      document.getElementById("CatOneButton").disabled = true;
    }
  };
}

function SpecificCatGifOne() {
  var KittenPicArrayTwo = new Array();
  KittenPicArrayTwo[0] = new Image();
  KittenPicArrayTwo[0].src =
    "/CleverPictures/CatGifsProjectPics/CatGifFive.gif";
  var randomKittenPicTwo = KittenPicArrayTwo[0];
  var imgTwo = document.createElement("img");
  imgTwo = randomKittenPicTwo;
  var srcTwo = document.getElementById("CatMain");
  srcTwo.appendChild(imgTwo);
}

function SpecificCatGifTwo() {
  var KittenPicArrayTwo = new Array();
  KittenPicArrayTwo[0] = new Image();
  KittenPicArrayTwo[0].src = "/CleverPictures/CatGifsProjectPics/CatGifSix.gif";
  var randomKittenPicTwo = KittenPicArrayTwo[0];
  var imgTwo = document.createElement("img");
  imgTwo = randomKittenPicTwo;
  var srcTwo = document.getElementById("CatMain");
  srcTwo.appendChild(imgTwo);
}

function SpecificCatGifThree() {
  var KittenPicArrayTwo = new Array();
  KittenPicArrayTwo[0] = new Image();
  KittenPicArrayTwo[0].src =
    "/CleverPictures/CatGifsProjectPics/CatGifSeven.gif";
  var randomKittenPicTwo = KittenPicArrayTwo[0];
  var imgTwo = document.createElement("img");
  imgTwo = randomKittenPicTwo;
  var srcTwo = document.getElementById("CatMain");
  srcTwo.appendChild(imgTwo);
}

function SpecificCatGifFour() {
  var KittenPicArrayTwo = new Array();
  KittenPicArrayTwo[0] = new Image();
  KittenPicArrayTwo[0].src =
    "/CleverPictures/CatGifsProjectPics/CatGifEight.gif";
  var randomKittenPicTwo = KittenPicArrayTwo[0];
  var imgTwo = document.createElement("img");
  imgTwo = randomKittenPicTwo;
  var srcTwo = document.getElementById("CatMain");
  srcTwo.appendChild(imgTwo);
}

function SpecificCatGifsssss() {
  var CatGifArray = new Array();
  CatGifArray.push(0);
  CatGifArray.push(1);
  CatGifArray.push(2);
  CatGifArray.push(3);
  var ranCatGifArray =
    CatGifArray[Math.floor(Math.random() * CatGifArray.length)];
  console.log(CatGifArray);
  console.log(ranCatGifArray);
  document.getElementById("ResetMeTwo").disabled = false;
  var countTwo = 0;
  if (ranCatGifArray === CatGifArray[0]) {
    countTwo = 0;
    for (var ksImL = 0; ksImL < 4; ksImL++) {
      SpecificCatGifOne();
    }
  } else if (ranCatGifArray === CatGifArray[1]) {
    for (var ksImL = 0; ksImL < 4; ksImL++) {
      SpecificCatGifTwo();
    }
  } else if (ranCatGifArray === CatGifArray[2]) {
    for (var ksImL = 0; ksImL < 4; ksImL++) {
      SpecificCatGifThree();
    }
  } else {
    for (var ksImL = 0; ksImL < 4; ksImL++) {
      SpecificCatGifFour();
    }
  }
}

function SpecificCatGifsLoop() {
  document.getElementById("ClickMe").disabled = true;
  var countTwo = 0;
  SpecificCatGifsssss();

  document.getElementById("CatTwoButton").onclick = function () {
    SpecificCatGifsssss();
    countTwo++;
    console.log("Count: " + countTwo);
    // console.log(count);
    if (countTwo == 4) {
      document.getElementById("CatTwoButton").disabled = true;
      document.getElementById("ResetMeTwo").disabled = false;
    }
  };
}

//Code below is for choosing different different options of RPS
function RPSFuncOne() {
  //recreate buttons through this so no null error
  //Start Button
  //find way to change color of text to white
  var StartRPSOneDiv = document.createElement("div");
  var StartRPSOneButton = document.createElement("button");
  StartRPSOneButton.setAttribute("class", "btn btn-warning btn-lg");
  StartRPSOneButton.setAttribute("type", "button");
  StartRPSOneButton.setAttribute("onclick", "welcomeMessage()");
  StartRPSOneButton.setAttribute("id", "StartRPS");
  var StartRPSOneButtonText = document.createTextNode("Start Game");
  StartRPSOneButton.appendChild(StartRPSOneButtonText);
  StartRPSOneDiv.appendChild(StartRPSOneButton);
  document.getElementById("RPSInstructThree").appendChild(StartRPSOneDiv);
  document.getElementById("RPSInstructThree").style.color = "white";
  document.getElementById("RPSInstructThree").style.border = "1px solid red";
  document.getElementById("RPSLinkTwo").onclick = function () {
    document.getElementById("RPSInstructThree").innerHTML = "";
    RPSTwoButtons();
  };

  document.getElementById("RPSLinkThree").onclick = function () {
    document.getElementById("RPSInstructThree").innerHTML = "";
    RPSThreeButtons();
  };
}

//Challenge 3: Rock, paper, or scissors(user vs computer)
// document.getElementById("StartRPS").disabled = false;
//fix images(can't be found)
function welcomeMessage() {
  //Displays Rock Pic
  var RockDivMain = document.createElement("div");
  RockDivMain.setAttribute("id", "RockMainDiv");
  RockDivMain.setAttribute("onclick", "playerRPSGuess()");
  document.getElementById("RPSInstructOne").appendChild(RockDivMain);
  alert("Welcome to the classic game of rock, paper, scissors");
  var RockImg = document.createElement("img");
  RockImg.src = "CleverPictures/RPSProjectPics/Rock.jpg";
  document.getElementById("RockMainDiv").appendChild(RockImg);
  document.getElementById("RockMainDiv").style.border = "15px groove #706c71";
  document.getElementById("RockMainDiv").style.borderRadius = "9px";

  // Displays Paper Pic
  var PaperDivMain = document.createElement("div");
  PaperDivMain.setAttribute("id", "PaperMainDiv");
  PaperDivMain.setAttribute("onclick", "playerRPSGuess()");
  document.getElementById("RPSInstructOne").appendChild(PaperDivMain);
  var PaperImg = document.createElement("img");
  PaperImg.src = "CleverPictures/RPSProjectPics/Paper.jpg";
  document.getElementById("PaperMainDiv").appendChild(PaperImg);
  document.getElementById("PaperMainDiv").style.border = "15px groove #706c71";
  document.getElementById("PaperMainDiv").style.borderRadius = "9px";

  //Displays Scissors Pic
  var ScissorsMainDiv = document.createElement("div");
  ScissorsMainDiv.setAttribute("id", "ScissorsMainDiv");
  ScissorsMainDiv.setAttribute("onclick", "playerRPSGuess()");
  document.getElementById("RPSInstructOne").appendChild(ScissorsMainDiv);
  var ScissorsImg = document.createElement("img");
  ScissorsImg.src = "CleverPictures/RPSProjectPics/Scissors.jpg";
  document.getElementById("ScissorsMainDiv").appendChild(ScissorsImg);
  document.getElementById("ScissorsMainDiv").style.border =
    "15px groove #706c71";
  document.getElementById("ScissorsMainDiv").style.borderRadius = "9px";

  //Displays RPS Instructions for this version of it
  var PicInstructDiv = document.createElement("div");
  PicInstructDiv.setAttribute("id", "PicInstructions");
  var h2Element = document.createElement("h2");
  var h2Text = document.createTextNode(
    "You click the rock pic if you choose rock, you click the paper pic if you choose paper or you choose the scissors pic if you choose scissors"
  );
  h2Element.appendChild(h2Text);
  PicInstructDiv.appendChild(h2Element);
  document.getElementById("RPSInstructTwo").appendChild(PicInstructDiv);
  //Once clicked, button is disabled so that images aren't produce more than once
  document.getElementById("StartRPS").disabled = true;
  document.getElementById("dropdown-id").disabled = true;
}

var scoreCountUser = 0;
var scoreCountComp = 0;
var TotalUserScore = 0;
var TotalCompScore = 0;
var scoreUserMain = 0;
var scoreCompMain = 0;

// document.getElementById("ResetRPS").disabled = true;
function playerRPSGuess() {
  var compChoices = ["rock", "paper", "scissors"];
  var randomCompChoice =
    compChoices[Math.floor(Math.random() * compChoices.length)];

  document.getElementById("RockMainDiv").onclick = function () {
    var userChoiceOne = "rock";
    randomCompChoice =
      compChoices[Math.floor(Math.random() * compChoices.length)];
    if (userChoiceOne == "rock" && randomCompChoice == "paper") {
      scoreCountComp++;
      var scoreCompMain = TotalCompScore + scoreCountComp;
      alert("Computer won this round");
      alert("Computer Points: " + scoreCompMain);
      console.log(
        "Computer Points: " + scoreCompMain + " won using " + randomCompChoice
      );
    } else if (userChoiceOne == "rock" && randomCompChoice == "scissors") {
      scoreCountUser++;
      var scoreUserMain = TotalUserScore + scoreCountUser;
      alert("User won this round");
      alert("User Points: " + scoreUserMain);
      console.log(
        "User Points: " + scoreUserMain + " won using " + userChoiceOne
      );
    } else if (userChoiceOne == "rock" && randomCompChoice == "rock") {
      alert("No One won this round!!!!");
    }
    if (scoreCompMain === 7) {
      alert("Computer Won!!!");
      console.log("Computer really won!!!");
      document.getElementById("RockMainDiv").innerHTML = "";
      document.getElementById("PaperMainDiv").innerHTML = "";
      document.getElementById("ScissorsMainDiv").innerHTML = "";

      //Reset Button
      var EndRPSOneDiv = document.createElement("div");
      var EndRPSOneButton = document.createElement("button");
      EndRPSOneButton.setAttribute("id", "ResetRPS");
      EndRPSOneButton.setAttribute("onclick", "ResetRPSOne()");
      EndRPSOneButton.setAttribute("type", "button");
      EndRPSOneButton.setAttribute("class", "btn btn-danger btn-lg");
      var EndRPSOneButtonText = document.createTextNode("Reset");
      EndRPSOneButton.appendChild(EndRPSOneButtonText);
      EndRPSOneDiv.appendChild(EndRPSOneButton);
      document.getElementById("RPSInstructThree").appendChild(EndRPSOneDiv);
      document.getElementById("RPSInstructThree").disabled = true;
    } else if (scoreUserMain === 7) {
      alert("User won!!!!");
      alert("The user is amazing!!!!!!");
      document.getElementById("RockMainDiv").innerHTML = "";
      document.getElementById("PaperMainDiv").innerHTML = "";
      document.getElementById("ScissorsMainDiv").innerHTML = "";

      //Reset Button
      var EndRPSOneDiv = document.createElement("div");
      var EndRPSOneButton = document.createElement("button");
      EndRPSOneButton.setAttribute("id", "ResetRPS");
      EndRPSOneButton.setAttribute("onclick", "ResetRPSOne()");
      EndRPSOneButton.setAttribute("type", "button");
      EndRPSOneButton.setAttribute("class", "btn btn-danger btn-lg");
      var EndRPSOneButtonText = document.createTextNode("Reset");
      EndRPSOneButton.appendChild(EndRPSOneButtonText);
      EndRPSOneDiv.appendChild(EndRPSOneButton);
      document.getElementById("RPSInstructThree").appendChild(EndRPSOneDiv);
      document.getElementById("RPSInstructThree").disabled = true;
    }
  };

  document.getElementById("PaperMainDiv").onclick = function () {
    var userChoiceTwo = "paper";
    randomCompChoice =
      compChoices[Math.floor(Math.random() * compChoices.length)];
    if (userChoiceTwo == "paper" && randomCompChoice == "scissors") {
      scoreCountComp++;
      var scoreCompMain = TotalCompScore + scoreCountComp;
      alert("Computer won this round");
      alert("Computer Points: " + scoreCompMain);
      console.log(
        "Computer Points: " + scoreCompMain + " won using " + randomCompChoice
      );
    } else if (userChoiceTwo == "paper" && randomCompChoice == "rock") {
      scoreCountUser++;
      var scoreUserMain = TotalUserScore + scoreCountUser;
      alert("User won this round");
      alert("User Points: " + scoreUserMain);
      console.log(
        "User Points: " + scoreUserMain + " won using " + userChoiceTwo
      );
    } else if (userChoiceTwo == "paper" && randomCompChoice == "paper") {
      alert("No One won this round!!!!");
    }
    if (scoreCompMain === 7) {
      alert("Computer Won!!!");
      console.log("Computer really won!!!");
      document.getElementById("RockMainDiv").innerHTML = "";
      document.getElementById("PaperMainDiv").innerHTML = "";
      document.getElementById("ScissorsMainDiv").innerHTML = "";

      //Reset Button
      var EndRPSOneDiv = document.createElement("div");
      var EndRPSOneButton = document.createElement("button");
      EndRPSOneButton.setAttribute("id", "ResetRPS");
      EndRPSOneButton.setAttribute("onclick", "ResetRPSOne()");
      EndRPSOneButton.setAttribute("type", "button");
      EndRPSOneButton.setAttribute("class", "btn btn-danger btn-lg");
      var EndRPSOneButtonText = document.createTextNode("Reset");
      EndRPSOneButton.appendChild(EndRPSOneButtonText);
      EndRPSOneDiv.appendChild(EndRPSOneButton);
      document.getElementById("RPSInstructThree").appendChild(EndRPSOneDiv);
      document.getElementById("RPSInstructThree").disabled = true;
    } else if (scoreUserMain === 7) {
      alert("User won!!!!");
      alert("The user is amazing!!!!!!");
      document.getElementById("RockMainDiv").innerHTML = "";
      document.getElementById("PaperMainDiv").innerHTML = "";
      document.getElementById("ScissorsMainDiv").innerHTML = "";

      //Reset Button
      var EndRPSOneDiv = document.createElement("div");
      var EndRPSOneButton = document.createElement("button");
      EndRPSOneButton.setAttribute("id", "ResetRPS");
      EndRPSOneButton.setAttribute("onclick", "ResetRPSOne()");
      EndRPSOneButton.setAttribute("type", "button");
      EndRPSOneButton.setAttribute("class", "btn btn-danger btn-lg");
      var EndRPSOneButtonText = document.createTextNode("Reset");
      EndRPSOneButton.appendChild(EndRPSOneButtonText);
      EndRPSOneDiv.appendChild(EndRPSOneButton);
      document.getElementById("RPSInstructThree").appendChild(EndRPSOneDiv);
      document.getElementById("RPSInstructThree").disabled = true;
    }
  };

  document.getElementById("ScissorsMainDiv").onclick = function () {
    var userChoiceThree = "scissors";
    randomCompChoice =
      compChoices[Math.floor(Math.random() * compChoices.length)];
    if (userChoiceThree == "scissors" && randomCompChoice == "rock") {
      scoreCountComp++;
      var scoreCompMain = TotalCompScore + scoreCountComp;
      alert("Computer won this round");
      alert("Computer Points: " + scoreCompMain);
      console.log(
        "Computer Points: " + scoreCompMain + " won using " + randomCompChoice
      );
    } else if (userChoiceThree == "scissors" && randomCompChoice == "paper") {
      scoreCountUser++;
      var scoreUserMain = TotalUserScore + scoreCountUser;
      alert("User won this round");
      alert("User Points: " + scoreUserMain);
      console.log(
        "User Points: " + scoreUserMain + " won using " + userChoiceThree
      );
    } else if (
      userChoiceThree == "scissors" &&
      randomCompChoice == "scissors"
    ) {
      alert("No One won this round!!!!");
    }
    if (scoreCompMain === 7) {
      alert("Computer Won!!!");
      console.log("Computer really won!!!");
      document.getElementById("RockMainDiv").innerHTML = "";
      document.getElementById("PaperMainDiv").innerHTML = "";
      document.getElementById("ScissorsMainDiv").innerHTML = "";

      //Reset Button
      var EndRPSOneDiv = document.createElement("div");
      var EndRPSOneButton = document.createElement("button");
      EndRPSOneButton.setAttribute("id", "ResetRPS");
      EndRPSOneButton.setAttribute("onclick", "ResetRPSOne()");
      EndRPSOneButton.setAttribute("type", "button");
      EndRPSOneButton.setAttribute("class", "btn btn-danger btn-lg");
      var EndRPSOneButtonText = document.createTextNode("Reset");
      EndRPSOneButton.appendChild(EndRPSOneButtonText);
      EndRPSOneDiv.appendChild(EndRPSOneButton);
      document.getElementById("RPSInstructThree").appendChild(EndRPSOneDiv);
      document.getElementById("RPSInstructThree").disabled = true;
    } else if (scoreUserMain === 7) {
      alert("User won!!!!");
      alert("The user is amazing!!!!!!");
      document.getElementById("RockMainDiv").innerHTML = "";
      document.getElementById("PaperMainDiv").innerHTML = "";
      document.getElementById("ScissorsMainDiv").innerHTML = "";

      //Reset Button
      var EndRPSOneDiv = document.createElement("div");
      var EndRPSOneButton = document.createElement("button");
      EndRPSOneButton.setAttribute("id", "ResetRPS");
      EndRPSOneButton.setAttribute("onclick", "ResetRPSOne()");
      EndRPSOneButton.setAttribute("type", "button");
      EndRPSOneButton.setAttribute("class", "btn btn-danger btn-lg");
      var EndRPSOneButtonText = document.createTextNode("Reset");
      EndRPSOneButton.appendChild(EndRPSOneButtonText);
      EndRPSOneDiv.appendChild(EndRPSOneButton);
      document.getElementById("RPSInstructThree").appendChild(EndRPSOneDiv);
      document.getElementById("RPSInstructThree").disabled = true;
    }
  };
}

function RPSFuncNone() {
  document.getElementById("RPSInstructThree").innerHTML = "";
}

function ResetRPSOne() {
  scoreCountUser = 0;
  scoreCountComp = 0;
  TotalUserScore = 0;
  TotalCompScore = 0;
  scoreUserMain = 0;
  scoreCompMain = 0;
  document.getElementById("ResetRPS").disabled = true;
  document.getElementById("StartRPS").disabled = false;
  document.getElementById("RPSInstructOne").innerHTML = "";
  document.getElementById("RPSInstructTwo").innerHTML = "";
  document.getElementById("RPSInstructThree").innerHTML = "";
  document.getElementById("dropdown-id").disabled = false;
}

function ResetRPSTwo() {
  document.getElementById("dropdown-id").disabled = false;
  document.getElementById("ResetRPSTwo").disabled = true;
  document.getElementById("RPSInstructOne").innerHTML = "";
  document.getElementById("RPSInstructThree").innerHTML = "";
  document.getElementById("RPSTwoHeader").innerHTML = "";
}

function ResetRPSThree() {
  document.getElementById("dropdown-id").disabled = false;
  document.getElementById("ResetRPSThree").disabled = true;
  document.getElementById("RPSInstructOne").innerHTML = "";
  document.getElementById("RPSInstructThree").innerHTML = "";
  document.getElementById("RPSTwoHeader").innerHTML = "";
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//Challenge 4: Rock, Paper or scissors: user vs computer but allowed to type answer choice instead of using pictures
//Create Start/Reset Button for RPS Two
function RPSTwoButtons() {
  var StartRPSTwoDiv = document.createElement("div");
  var StartRPSTwoButton = document.createElement("button");
  StartRPSTwoButton.setAttribute("class", "btn btn-lg btn-dark");
  StartRPSTwoButton.setAttribute("type", "button");
  StartRPSTwoButton.setAttribute("onclick", "RPSFuncTwo()"); //change func
  StartRPSTwoButton.setAttribute("id", "StartRPSTwo");
  var StartRPSTwoButtonText = document.createTextNode("Start Game");
  StartRPSTwoButton.appendChild(StartRPSTwoButtonText);
  StartRPSTwoDiv.appendChild(StartRPSTwoButton);
  document.getElementById("RPSInstructThree").appendChild(StartRPSTwoDiv);
  document.getElementById("RPSInstructThree").style.color = "white";
  document.getElementById("RPSLinkOne").onclick = function () {
    document.getElementById("RPSInstructThree").innerHTML = "";
    RPSFuncOne();
  };
  document.getElementById("RPSLinkThree").onclick = function () {
    document.getElementById("RPSInstructThree").innerHTML = "";
    RPSThreeButtons();
  };
}

//Score of user and character start at 0
var playerScore = 0;
var compScore = 0;

//Alerts players with info about the game they are going to play
function welcomeMessageTwo() {
  alert(
    "Welcome the good ol' fashion game of Rock, Paper, Scissors! Remember the rules are simple!\nRock Beats Scissors\nScissors Beats Paper\nPaper Beats Rock"
  );
}

//Allows for user to enter choice of rock, paper or scissors
function playerGuess() {
  var playerChoice = prompt("Choose rock, paper, or scissors.");
  var playerChoiceLower = playerChoice.toLowerCase();
  if (
    playerChoiceLower === "rock" ||
    playerChoiceLower === "paper" ||
    playerChoiceLower === "scissors"
  ) {
    alert("Good job");
    return playerChoiceLower;
  }
  alert(
    "You typed something else or did not spell your choice correctly please try again!"
  );
  playerGuess();
}

//Next function gives computer ability to choose between the options
function computerGuess() {
  var choice = Math.random();
  if (choice < 0.34) {
    return "rock";
  }
  if (choice <= 0.67) {
    return "paper";
  }
  return "scissors";
}

//Function compares the guesses of the user and the computer
function compareGuesses(guess1, guess2) {
  //Create an alert message detailing the results
  alert("Player chose: " + guess1 + " and the computer chose: " + guess2 + "!");
  //First check for equality
  if (guess1 === guess2) {
    alert(
      "You and the computer guessed the same thing! Go again, no score added!"
    );
    return 0;
  }
  //No check for guess1 winning
  if (
    (guess1 === "rock" && guess2 === "scissors") ||
    (guess1 === "paper" && guess2 === "rock") ||
    (guess1 === "scissors" && guess2 === "paper")
  ) {
    alert("Player wins the round!");
    return 1;
  }
  alert("Computer wins the round!");
  return 2;
}

//Function updates the scoreboard for the game
function updateScores(result, points) {
  if (result === 1) {
    playerScore += points;
    console.log("User score: " + playerScore);
  }
  if (result === 2) {
    compScore += points;
    console.log("Computer Score: " + compScore);
  }
  if (result === 0) {
    compScore += 0;
    playerScore += 0;
  }
}

//Clears Scores
function clearScores() {
  playerScore = 0;
  compScore = 0;
}

//Playgame function that runs it all
function playGame(numOfRounds) {
  document.getElementById("dropdown-id").disabled = true;
  welcomeMessageTwo();
  do {
    var player = playerGuess();
    var computer = computerGuess();
    var result = compareGuesses(player, computer);
    updateScores(result, 5);
    if (result !== 0) {
      numOfRounds--;
    }
  } while (numOfRounds > 0);

  if (playerScore > compScore) {
    alert(
      "The player has " +
        playerScore +
        " points compared to the computer's " +
        compScore +
        " points. So the player wins!"
    );

    //Inputs Scores into text Box
  } else {
    alert(
      "The computer has " +
        compScore +
        " points compared to the player's " +
        playerScore +
        " points. So the computer wins!"
    );
  }

  //Reset Button
  var EndRPSTwoDiv = document.createElement("div");
  var EndRPSTwoButton = document.createElement("button");
  EndRPSTwoButton.setAttribute("id", "ResetRPSTwo");
  EndRPSTwoButton.setAttribute("onclick", "ResetRPSTwo()");
  EndRPSTwoButton.setAttribute("type", "button");
  EndRPSTwoButton.setAttribute("class", "btn btn-danger btn-lg");
  var EndRPSTwoButtonText = document.createTextNode("Reset");
  EndRPSTwoButton.appendChild(EndRPSTwoButtonText);
  EndRPSTwoDiv.appendChild(EndRPSTwoButton);
  document.getElementById("RPSInstructThree").appendChild(EndRPSTwoDiv);

  //Final Scores Text box
  var scoresDiv = document.createElement("div");
  var scoreHeader = document.createElement("h1");
  var userScoreDiv = document.createElement("div");
  var compScoreDiv = document.createElement("div");
  var userScoreh3 = document.createElement("h3");
  var compScoreh3 = document.createElement("h3");
  scoresDiv.setAttribute("id", "finalScoresDiv");
  scoreHeader.setAttribute("id", "scoreHeaderAlign");
  userScoreDiv.setAttribute("id", "userScoreDivMain");
  compScoreDiv.setAttribute("id", "compScoreDivMain");
  var scoreHeaderText = document.createTextNode("Final Score!!");
  var UserScore = playerScore;
  var CompScore = compScore;
  var userScoreText = document.createTextNode("User Score: " + UserScore);
  var compScoreText = document.createTextNode("Computer Score: " + CompScore);
  scoreHeader.appendChild(scoreHeaderText);
  userScoreh3.appendChild(userScoreText);
  compScoreh3.appendChild(compScoreText);
  userScoreDiv.appendChild(userScoreh3);
  compScoreDiv.appendChild(compScoreh3);
  scoresDiv.appendChild(scoreHeader);
  scoresDiv.appendChild(userScoreDiv);
  scoresDiv.appendChild(compScoreDiv);
  document.getElementById("RPSTwoHeader").appendChild(scoreHeader);
  document.getElementById("RPSInstructOne").appendChild(scoresDiv);
  document.getElementById("scoreHeaderAlign").style.textAlign = "center";
  document.getElementById("finalScoresDiv").style.color = "white";
  document.getElementById("scoreHeaderAlign").style.color = "white";
  clearScores();
}

function RPSFuncTwo() {
  playGame(7); //test val 4 set to 7 if it works
}

//Challenge 5: Rock, Paper or scissors but for two users instead of user vs computer

//Create Start/Reset Button for RPS Three(link has id of RPSLinkThree)
function RPSThreeButtons() {
  var StartRPSThreeDiv = document.createElement("div");
  var StartRPSThreeButton = document.createElement("button");
  StartRPSThreeButton.setAttribute("class", "btn btn-lg btn-success");
  StartRPSThreeButton.setAttribute("type", "button");
  StartRPSThreeButton.setAttribute("onclick", "RPSFuncThree()"); //change func to RPSFuncThree()
  StartRPSThreeButton.setAttribute("id", "StartRPSThree");
  var StartRPSThreeButtonText = document.createTextNode("Start Game");
  StartRPSThreeButton.appendChild(StartRPSThreeButtonText);
  StartRPSThreeDiv.appendChild(StartRPSThreeButton);
  document.getElementById("RPSInstructThree").appendChild(StartRPSThreeDiv);
  document.getElementById("RPSInstructThree").style.color = "white";
  document.getElementById("RPSLinkOne").onclick = function () {
    document.getElementById("RPSInstructThree").innerHTML = "";
    RPSFuncOne();
  };
  document.getElementById("RPSLinkTwo").onclick = function () {
    document.getElementById("RPSInstructThree").innerHTML = "";
    RPSTwoButtons();
  };
}

//Score of user and character start at 0
var playerScore = 0;
var playerTwoScore = 0;

//Alerts players with info about the game they are going to play
function welcomeMessageThree() {
  alert(
    "Welcome the good ol' fashion game of Rock, Paper, Scissors! Remember the rules are simple!\nRock Beats Scissors\nScissors Beats Paper\nPaper Beats Rock\nGood Luck!!"
  );
}

//Allows for user to enter choice of rock, paper or scissors
function playerOneGuess() {
  var playerChoice = prompt("Player One: Choose rock, paper, or scissors.");
  var playerChoiceLower = playerChoice.toLowerCase();
  if (
    playerChoiceLower === "rock" ||
    playerChoiceLower === "paper" ||
    playerChoiceLower === "scissors"
  ) {
    alert("Good job");
    return playerChoiceLower;
  }
  alert(
    "You typed something else or did not spell your choice correctly please try again!"
  );
  playerOneGuess();
}

//Next function gives computer ability to choose between the options
function playerTwoGuess() {
  var playerTwoChoice = prompt("Player Two: Choose rock, paper, or scissors.");
  var playerTwoChoiceLower = playerTwoChoice.toLowerCase();
  if (
    playerTwoChoiceLower === "rock" ||
    playerTwoChoiceLower === "paper" ||
    playerTwoChoiceLower === "scissors"
  ) {
    alert("Good job");
    return playerTwoChoiceLower;
  }
  alert(
    "You typed something else or did not spell your choice correctly please try again!"
  );
  playerTwoGuess();
}

//Function compares the guesses of the user and the computer
function compareTwoGuesses(guess1, guess2) {
  //Create an alert message detailing the results
  alert("Player chose: " + guess1 + " and Player Two chose: " + guess2 + "!");
  //First check for equality
  if (guess1 === guess2) {
    alert(
      "You and the computer guessed the same thing! Go again, no score added!"
    );
    return 0;
  }
  //No check for guess1 winning
  if (
    (guess1 === "rock" && guess2 === "scissors") ||
    (guess1 === "paper" && guess2 === "rock") ||
    (guess1 === "scissors" && guess2 === "paper")
  ) {
    alert("Player wins the round!");
    return 1;
  }
  alert("Player Two wins the round!");
  return 2;
}

//Function updates the scoreboard for the game
function updateTwoScores(result, points) {
  if (result === 1) {
    playerScore += points;
    console.log("Player score: " + playerScore);
  }
  if (result === 2) {
    playerTwoScore += points;
    console.log("Player Two Score: " + playerTwoScore);
  }
  if (result === 0) {
    playerScore += 0;
    playerTwoScore += 0;
  }
}

//Clears Scores
function clearTwoScores() {
  playerScore = 0;
  playerTwoScore = 0;
}

//Playgame function that runs it all
function playGameTwo(numOfRounds) {
  document.getElementById("dropdown-id").disabled = true;
  welcomeMessageThree();
  do {
    var playerRPS = playerOneGuess();
    var playerTwoRPS = playerTwoGuess();
    var resultRPS = compareTwoGuesses(playerRPS, playerTwoRPS);
    updateTwoScores(resultRPS, 5);
    if (resultRPS !== 0) {
      numOfRounds--;
    }
  } while (numOfRounds > 0);

  if (playerScore > playerTwoScore) {
    alert(
      "The player has " +
        playerScore +
        " points compared to the computer's " +
        playerTwoScore +
        " points. So the player wins!"
    );

    //Inputs Scores into text Box
  } else {
    alert(
      "Player Two has " +
        playerTwoScore +
        " points compared to the player's " +
        playerScore +
        " points. So the Player Two wins!"
    );
  }

  //Reset Button
  var EndRPSThreeDiv = document.createElement("div");
  var EndRPSThreeButton = document.createElement("button");
  EndRPSThreeButton.setAttribute("id", "ResetRPSThree");
  EndRPSThreeButton.setAttribute("onclick", "ResetRPSThree()"); // make sure to add func ResetRPSThree()
  EndRPSThreeButton.setAttribute("type", "button");
  EndRPSThreeButton.setAttribute("class", "btn btn-danger btn-lg");
  var EndRPSThreeButtonText = document.createTextNode("Reset");
  EndRPSThreeButton.appendChild(EndRPSThreeButtonText);
  EndRPSThreeDiv.appendChild(EndRPSThreeButton);
  document.getElementById("RPSInstructThree").appendChild(EndRPSThreeDiv);

  //Final Scores Text box
  var scoresTwoDiv = document.createElement("div");
  var scoreHeaderTwo = document.createElement("h1");
  var userOneScoreDiv = document.createElement("div");
  var userTwoScoreDiv = document.createElement("div");
  var userOneScoreh3 = document.createElement("h3");
  var userTwoScoreh3 = document.createElement("h3");
  scoresTwoDiv.setAttribute("id", "finalScoresTwoDiv");
  scoreHeaderTwo.setAttribute("id", "scoreHeaderAlignTwo");
  userOneScoreDiv.setAttribute("id", "userScoreDivMainTwo");
  userTwoScoreDiv.setAttribute("id", "compScoreDivMain");
  var scoreHeaderTextTwo = document.createTextNode("Final Score!!");
  var userOneScore = playerScore;
  var userTwoScore = playerTwoScore;
  var userOneScoreText = document.createTextNode(
    "Player Score: " + userOneScore
  );
  var userTwoScoreText = document.createTextNode(
    "Player Two Score: " + userTwoScore
  );
  scoreHeaderTwo.appendChild(scoreHeaderTextTwo);
  userOneScoreh3.appendChild(userOneScoreText);
  userTwoScoreh3.appendChild(userTwoScoreText);
  userOneScoreDiv.appendChild(userOneScoreh3);
  userTwoScoreDiv.appendChild(userTwoScoreh3);
  scoresTwoDiv.appendChild(scoreHeaderTwo);
  scoresTwoDiv.appendChild(userOneScoreDiv);
  scoresTwoDiv.appendChild(userTwoScoreDiv);
  document.getElementById("RPSTwoHeader").appendChild(scoreHeaderTwo);
  document.getElementById("RPSInstructOne").appendChild(scoresTwoDiv);
  document.getElementById("scoreHeaderAlignTwo").style.textAlign = "center";
  document.getElementById("finalScoresTwoDiv").style.color = "white";
  document.getElementById("scoreHeaderAlignTwo").style.color = "white";
  clearTwoScores();
}

function RPSFuncThree() {
  playGameTwo(5); //test val 4 set to 7 if it works
}

//Clever Programmer Version of Rock, Paper, or Scissors
var roundCounter = 0;
var UserScoreMain = 0;
var BotScoreMain = 0;
/* Need to create div with a button at the center that has 
a transparent background over the game so that until, the button
is clicked, the user can't start the game and when the game ends, that div
with the button reappears and hence must be clicked to start
playing the game again */

//set opacity of container to low value
//have button display in center of container
//once button clicked, it allows or rps game function to run and sets opacity value to original value
var cleverDivHover = $("#clever-start-container-div");
function cleverRemove() {
  document.getElementById("clever-start-container-div").remove();
}

function clearScores() {
  roundCounter = 0;
  UserScoreMain = 0;
  BotScoreMain = 0;
}

/* function cleverRPSStart() {
  //sets up button
  var startDiv = document.createElement("div");
  var startButton = document.createElement("button");
  var buttonText = document.createTextNode("Start Game!!!");
  //button attributes
  startButton.setAttribute("class", "btn btn-lg btn-success");
  startButton.setAttribute("type", "button");
  startButton.setAttribute("id", "startCleverRPS");
  startButton.setAttribute("onclick", "initRPS()");
  //brining everything together
  startButton.appendChild(buttonText);
  startDiv.appendChild(startButton);
  document.getElementById("clever-start-container-div").appendChild(startDiv);
} */
// cleverRPSStart();

function initRPS() {
  //removable display images
  // document.getElementById("flex-container-4-div").innerHTML = "";
  //restore flex div opacity to default and background to white
  /*  document.getElementById("flex-container-4-div").style = "opacity:1;";
  document.getElementById("flex-container-4-div").style.backgroundColor =
    "white"; */
  //remove cleverRPSStart div
  //  cleverRemove();
  //display clickable images once button clicked
  var cleverHtml = "";
  cleverHtml += `
  <div class = "cleverRPSStartHover" id = "clever-start-container-div"><button class = "btn  btn-success" type = "button" id = "startCleverRPS" onclick = "cleverRemove()">Start Game!!</button></div>
  <div
    class="flex-container-4-Pt1 finalMessage"
    id="flex-container-4-div"
    style="background-color: white;"
  >
    <div>
      <img
        id="rock"
        src="CleverPictures/RPSProjectPics/CleverRock.png"
        width="150"
        height="150"
        alt
        onclick = "rpsGame(this);"
      />
    </div>
    <div>
      <img
        id="paper"
        src="CleverPictures/RPSProjectPics/PaperClever.png"
        width="150"
        height="150"
        alt
        onclick = "rpsGame(this);"
      />
    </div>
    <div>
      <img
        id="scissors"
        src="CleverPictures/RPSProjectPics/HandClever.png"
        width="150"
        height="150"
        alt
       onclick = "rpsGame(this);"
      />
    </div>
  </div>`;

  document.querySelector(".cleverRPSContainer").innerHTML = cleverHtml;
  document.getElementById("startCleverRPS").onclick = function () {
    document.getElementById("flex-container-4-div").style.opacity = "1";
    document.getElementById("clever-start-container-div").remove();
  };
  /* document.getElementById("flex-container-4-div").appendChild(rockDiv);
  document.getElementById("flex-container-4-div").appendChild(paperDiv);
  document.getElementById("flex-container-4-div").appendChild(scissorsDiv); */
}
initRPS();

function rpsGame(yourChoice) {
  roundCounter++;
  var HumanChoice, BotChoice, results, message;

  /* Sets Human choice equal to id of either rock, paper, or scissors depending on
  what the user selects as their choice */
  HumanChoice = yourChoice.id;
  console.log("Human Choice: ", HumanChoice);
  BotChoice = numberToChoice();
  console.log("Bot Choice: ", BotChoice);
  results = decideWinner(HumanChoice, BotChoice); // [0, 1] = human lost, bot one

  message = individualMessage(results); // {'message': 'You won!', 'color':'green'}
  finalMessage = finalScoreSystem(results);
  // console.log(message);
  rpsFrontEnd(yourChoice.id, BotChoice, message, finalMessage);
}

//randomizes computer choice
function numberToChoice() {
  var ran = Math.floor(Math.random() * 3);
  var compChoiceMain = ["rock", "paper", "scissors"][ran];
  return compChoiceMain;
}

//decides who won based upon their choice
function decideWinner(yourChoice, computerChoice) {
  var rpsDataBase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  var yourScore = rpsDataBase[yourChoice][computerChoice];
  var computerScore = rpsDataBase[computerChoice][yourChoice];
  return [yourScore, computerScore];
}

//sends out a message of who won individual round

function individualMessage([yourScore, computersScore]) {
  if (yourScore === 0) {
    return { message: "You Lost", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "It's a draw!", color: "yellow" };
  } else {
    return { message: "You won!", color: "green" };
  }
}

function finalScoreSystem([yourScore, computerScore]) {
  UserScoreMain += yourScore;
  BotScoreMain += computerScore;
  if (roundCounter < 5) {
    document.getElementById("flex-container-4-div").style.opacity = "1";
    /* console.log("User Score: ", UserScoreMain);
    console.log("Bot Score: ", BotScoreMain); */
  } else if (roundCounter === 5 && UserScoreMain < BotScoreMain) {
  /*   console.log("Bot is King!!!!");
    console.log("User final score: ", UserScoreMain);
    console.log("Bot final score: ", BotScoreMain); */
    return { messageFinal: "Bot is king!!!", colorFinal: "purple" };
  } else if (roundCounter === 5 && UserScoreMain > BotScoreMain) {
    /* console.log("User final score: ", UserScoreMain);
    console.log("Bot final score: ", BotScoreMain); */
    return { messageFinal: "User is king!!!", colorFinal: "turquoise" };
  } else if (roundCounter === 5 && UserScoreMain === BotScoreMain) {
   /*  
    */

    return { messageFinal: "Game ends in tie!!!", colorFinal: "orange" };
  }
}

//what the user sees once they click an option
function rpsFrontEnd(
  HumanImageChoice,
  BotImageChoice,
  individualMessage,
  finalMessage
) {
 /*  endGameCounter++;
  console.log(endGameCounter); */
  var imagesDataBase = {
    //change to actual src's
    rock: "CleverPictures/RPSProjectPics/CleverRock.png",
    paper: "CleverPictures/RPSProjectPics/PaperClever.png",
    scissors: "CleverPictures/RPSProjectPics/HandClever.png",
  };
  //remove images after option picked
  document.getElementById("flex-container-4-div").innerHTML = "";

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");
  // var finalMessageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src ='" +
    imagesDataBase[HumanImageChoice] +
    "' height= 150 width = 150 style= 'box-shadow: -2px 2px 5px 7px rgba(0, 0, 255, 1);'>";

  botDiv.innerHTML =
    "<img src = '" +
    imagesDataBase[BotImageChoice] +
    "'height= 150 width = 150 style =  'box-shadow:-2px 2px 5px 7px red;'>";

  messageDiv.innerHTML =
    "<h1 style = 'color:" +
    individualMessage["color"] +
    "; font-size:60px;padding:30px;'>" +
    individualMessage["message"] +
    "</h1>";

  if (roundCounter === 5) {
    messageDiv.innerHTML =
      "<h1 style = 'color:" +
      finalMessage["colorFinal"] +
      "; font-size:50px;padding:30px;'>" +
      finalMessage["messageFinal"] +
      "</h1>";

    document.getElementById("flex-container-4-div").appendChild(humanDiv);
    document.getElementById("flex-container-4-div").appendChild(messageDiv);
    document.getElementById("flex-container-4-div").appendChild(botDiv);

    /*   var startContainerDiv = document.createElement("div");
    startContainerDiv.setAttribute("id", "clever-start-container-div");
    document.getElementById("flex-container-4-div").append(startContainerDiv); */
    // messageCounter = 0;
    // cleverRPSStart();
    setTimeout(function finalDisplay() {
      initRPS();
      clearScores();
    }, 3000);
  } else {
    document.getElementById("flex-container-4-div").appendChild(humanDiv);
    document.getElementById("flex-container-4-div").appendChild(messageDiv);
    document.getElementById("flex-container-4-div").appendChild(botDiv);
  }
  /*  after 3 seconds passed once winner is decided, it loads the 
 options again for the user to play another */

  /*but need to find a way to create a points system so once a certain point
 limit is reached, the king(winner overall) is given they're crown, then a
 button will be created if they want to play a new game. Once
 I am able to finish adding the extras to the game, I'll add it to the dropdown
 of rps games */

  setTimeout(function CleverRound() {
    document.getElementById("flex-container-4-div").innerHTML = "";
    var imagesDataBaseMain = {
      rock: {
        img: "CleverPictures/RPSProjectPics/CleverRock.png",
        height: "150",
        width: "150",
        id: "rock",
        onclick: "rpsGame(this)",
      },
      paper: {
        img: "CleverPictures/RPSProjectPics/PaperClever.png",
        height: "150",
        width: "150",
        id: "paper",
        onclick: "rpsGame(this)",
      },
      scissors: {
        img: "CleverPictures/RPSProjectPics/HandClever.png",
        height: "150",
        width: "150",
        id: "scissors",
        onclick: "rpsGame(this)",
      },
    };
    var rockDiv = document.createElement("div");
    var paperDiv = document.createElement("div");
    var scissorsDiv = document.createElement("div");
    rockDiv.innerHTML =
      "<img src='" +
      imagesDataBaseMain["rock"]["img"] +
      "' height= " +
      imagesDataBaseMain["rock"]["height"] +
      " width= " +
      imagesDataBaseMain["rock"]["width"] +
      " id= " +
      imagesDataBaseMain["rock"]["id"] +
      " onclick= " +
      imagesDataBaseMain["rock"]["onclick"] +
      ">";
    paperDiv.innerHTML =
      "<img src='" +
      imagesDataBaseMain["paper"]["img"] +
      "' height= " +
      imagesDataBaseMain["paper"]["height"] +
      " width= " +
      imagesDataBaseMain["paper"]["width"] +
      " id= " +
      imagesDataBaseMain["paper"]["id"] +
      " onclick= " +
      imagesDataBaseMain["paper"]["onclick"] +
      ">";
    scissorsDiv.innerHTML =
      "<img src='" +
      imagesDataBaseMain["scissors"]["img"] +
      "' height= " +
      imagesDataBaseMain["scissors"]["height"] +
      " width= " +
      imagesDataBaseMain["scissors"]["width"] +
      " id= " +
      imagesDataBaseMain["scissors"]["id"] +
      " onclick= " +
      imagesDataBaseMain["scissors"]["onclick"] +
      ">";

    document.getElementById("flex-container-4-div").appendChild(rockDiv);
    document.getElementById("flex-container-4-div").appendChild(paperDiv);
    document.getElementById("flex-container-4-div").appendChild(scissorsDiv);
  }, 4000);
}

//Challenge 4:Change button color
var all_buttons = document.getElementsByTagName("button");
var x = 0;
console.log(all_buttons);
var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  if(all_buttons[i].classList[1] == "dropdown-toggle" || all_buttons[i].classList[1] == "mr-2"){
    copyAllButtons.push(all_buttons[i].classList[2]);
  }
  else{
  copyAllButtons.push(all_buttons[i].classList[1]);
  }
}
console.log(copyAllButtons);

var restDisabled = document.getElementById("resetColor");
restDisabled.setAttribute("disabled", true);
function buttonColorChange(colorChoice) {
  var resetButtonColors = document.getElementById("resetColor");
  var optionC = colorChoice.value;
  if (optionC == "red") {
    buttonRed();
    restDisabled.removeAttribute("disabled");
  } else if (optionC == "green") {
    buttonGreen();
    restDisabled.removeAttribute("disabled");
  } else if (optionC == "random") {
    buttonColorRandom();
    resetButtonColors.removeAttribute("disabled");
    restDisabled.removeAttribute("disabled");
  } else if (optionC == "reset") {
    buttonColorReset();
    restDisabled.setAttribute("disabled", true);
  } else if (optionC == "colorAnimation") {
    colorAnimation();
    restDisabled.removeAttribute("disabled");
  }
}
function buttonGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    //This grabs the second class name of each button and removes that class
    if (all_buttons[i].classList[1] == "dropdown-toggle" || all_buttons[i].classList[1] == "mr-2") {
      all_buttons[i].classList.remove(all_buttons[i].classList[2]);
      all_buttons[i].classList.add("btn-success");
    } 
    
    else {
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add("btn-success"); //This immediately adds the class btn-danger to all the buttons to make them green
    }
  }
}

function buttonRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    //This grabs the second class name of each button and removes that class
    if (all_buttons[i].classList[1] == "dropdown-toggle" || all_buttons[i].classList[1] == "mr-2") {
      all_buttons[i].classList.remove(all_buttons[i].classList[2]);
      all_buttons[i].classList.add("btn-danger");
    }  else {
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add("btn-danger"); //This immediately adds the class btn-success to all the buttons to make them red
    }
  }
}

var aniInt;
function buttonColorReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    //This grabs the second class name of each button and removes that class
    if (all_buttons[i].classList[1] == "dropdown-toggle" || all_buttons[i].classList[1] == "mr-2") {
      all_buttons[i].classList.remove(all_buttons[i].classList[2]);
      all_buttons[i].classList.add(copyAllButtons[i]);
  
    } else {
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add(copyAllButtons[i]); //This immediately resets buttons to original colors
    }

    console.log(all_buttons);
  }
  clearInterval(aniInt);
}

function buttonColorRandom() {
  var choice = ["btn-danger", "btn-primary", "btn-success", "btn-warning"];
  for (let i = 0; i < all_buttons.length; i++) {
    //This grabs the second class name of each button and removes that class
    if (all_buttons[i].classList[1] == "dropdown-toggle" || all_buttons[i].classList[1] == "mr-2") {
      all_buttons[i].classList.remove(all_buttons[i].classList[2]);
      all_buttons[i].classList.add(choice[Math.floor(Math.random() * 4)]);

    }
    
    else {
      all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      all_buttons[i].classList.add(choice[Math.floor(Math.random() * 4)]);
    }
  }
}

function colorAnimation() {
  var choicesColors = [
    "btn-danger",
    "btn-primary",
    "btn-success",
    "btn-warning",
  ];
  var count = 0;
  aniInt = setInterval(AniOn, 3000);
  function AniOn() {
    var newColour = choicesColors[count];
    count++;
    console.log("Count", count)
    console.log(newColour)
    for (let i = 0; i < all_buttons.length; i++) {
      if (all_buttons[i].classList[1] == "dropdown-toggle" || all_buttons[i].classList[1] == "mr-2") {
        all_buttons[i].classList.remove(all_buttons[i].classList[2]);
      } else {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
      }
      all_buttons[i].classList.add(newColour);
    }
    if (count > 3) {
      count = 0;
      for (let i = 0; i < all_buttons.length; i++) {
        if (all_buttons[i].classList[1] == "dropdown-toggle" || all_buttons[i].classList[1] == "mr-2") {
          all_buttons[i].classList.remove(all_buttons[i].classList[2]);
        } else {
          all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        }
        all_buttons[i].classList.add(newColour);
        
      }
    }

    
  }
}
//Challenge tbd:Tic Tac Toe(this challenge may be changed)

//Initialize Score
let BJGame = {
  you: { scoreSpan: "#your-blackjack-result", div: "#your-box", score: 0 },
  bot: { scoreSpan: "#bot-blackjack-result", div: "#Bot-Box", score: 0 },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"],
  cardsMap: {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    K: 10,
    J: 10,
    Q: 10,
    A: [1, 11],
  },
  wins: 0,
  losses: 0,
  draws: 0,
};

//using objects make it easier to access score
const You = BJGame["you"];
const Bot = BJGame["bot"];
const cardSound = new Audio("blackjack_assets/sounds/swish.m4a");
const winSound = new Audio("blackjack_assets/sounds/cash.mp3");
const lossSound = new Audio("blackjack_assets/sounds/aww.mp3");

//Buttons initial states at start
document.getElementById("BJ-Hit").disabled = false;
document.getElementById("BJ-Stand").disabled = true;
document.getElementById("BJ-Deal").disabled = true;
//better way of selecting something instead of using element id or onclick
document.querySelector("#BJ-Hit").addEventListener("click", BJHit);
document.querySelector("#BJ-Stand").addEventListener("click", BJStand);
document.querySelector("#BJ-Deal").addEventListener("click", BJDeal);

function BJHit() {
  let card = randomCard();
  showCard(card, You);
  updateScore(card, You);
  showScore(You);
  //Once function is called, make stand button clickable
  document.getElementById("BJ-Stand").disabled = false;
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  console.log(BJGame["cards"][randomIndex]);
  return BJGame["cards"][randomIndex];
}

function showCard(card, activePlayer) {
  //only will display cards if score is < 21
  if (activePlayer["score"] <= 21) {
    //create card image
    let cardImage = document.createElement("img");
    cardImage.src = `blackjack_assets/images/${card}.png`;
    cardImage.setAttribute("width", "100px");
    cardImage.setAttribute("height", "200px");
    document.querySelector(activePlayer["div"]).appendChild(cardImage);

    //play sound when hit button clicked
    cardSound.play();
  }
}

//Deal Button to clear board
function BJDeal() {
  let yourImages = document.querySelector("#your-box").querySelectorAll("img"); //selects all images within your-box div
  let botImages = document.querySelector("#Bot-Box").querySelectorAll("img"); //selects all images within Bot-box div
  for (let i = 0; i < yourImages.length; i++) {
    yourImages[i].remove();
  }
  for (let s = 0; s < botImages.length; s++) {
    botImages[s].remove();
  }
  ResetScore(You);
  ResetScore(Bot);
  //sets buttons to initial stats so another game can be played
  document.getElementById("BJ-Hit").disabled = false;
  document.getElementById("BJ-Stand").disabled = true;
  document.getElementById("BJ-Deal").disabled = true;
}

function ResetScore(activePlayer) {
  activePlayer["score"] = 0;
  document.querySelector(activePlayer["scoreSpan"]).textContent =
    activePlayer["score"];
  document.querySelector(activePlayer["scoreSpan"]).style.color = "white";

  document.querySelector("#blackjack-result").textContent = "Let's Play";
  document.querySelector("#blackjack-result").style.color = "black";
}

function updateScore(card, activePlayer) {
  //if adding 11 keeps me below 21, then add 11. Otherwise, add 1
  if (card == "A") {
    if (activePlayer["score"] + BJGame["cardsMap"][card][1] <= 21) {
      activePlayer["score"] += BJGame["cardsMap"][card][1];
    } else {
      activePlayer["score"] += BJGame["cardsMap"][card][0];
    }
  } else {
    activePlayer["score"] += BJGame["cardsMap"][card];
  }
}

function showScore(activePlayer) {
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function BJStand() {
  //Once this button is clicked, allow for deal button to be clickable and disables hit button so that you can't place down more cards
  document.getElementById("BJ-Deal").disabled = false;
  document.getElementById("BJ-Hit").disabled = true;
  document.getElementById("BJ-Stand").disabled = true;
  while (Bot["score"] < 16) {
    let cardBot = randomCard();
    showCard(cardBot, Bot);
    updateScore(cardBot, Bot);
    showScore(Bot);
    await sleep(1000);
  }
  if (Bot["score"] > 16) {
    var BJresults = finalWLD();
    showResults(BJresults);
  }
}

function finalWLD() {
  let winner;
  //higher score than dealer and doesn't bust, You win
  if (You["score"] <= 21) {
    if (You["score"] > Bot["score"] || Bot["score"] > 21) {
      console.log("You won!!!!");
      BJGame["wins"]++;
      winner = You;
    } else if (You["score"] < Bot["score"]) {
      console.log("You Lost!!!");
      BJGame["losses"]++;
      winner = Bot;
    } else if (You["score"] === Bot["score"]) {
      console.log("Game ends in draw!");
      BJGame["draws"]++;
    }
  }
  //If You Bust
  else if (You["score"] > 21 && Bot["score"] <= 21) {
    console.log("You Lost!!!");
    BJGame["losses"]++;
    winner = Bot;
  }
  //when both You and dealer(bot) bust
  else if (You["score"] > 21 && Bot["score"] > 21) {
    console.log("Game ends in draw!!!");
    BJGame["draws"]++;
  }

  console.log("Winner is: ", winner);
  return winner;
}

function showResults(winner) {
  let message, messageColor;
  if (winner === You) {
    document.querySelector("#your-Wins").textContent = BJGame["wins"];
    message = "You Won!!!";
    messageColor = "turquoise";
    winSound.play();
  } else if (winner === Bot) {
    document.querySelector("#your-losses").textContent = BJGame["losses"];
    message = "You Lost!!!";
    messageColor = "red";
    lossSound.play();
  } else {
    document.querySelector("#your-draws").textContent = BJGame["draws"];
    message = "Game ended in Draw!!!";
    messageColor = "orange";
  }
  document.querySelector("#blackjack-result").textContent = message;
  document.querySelector("#blackjack-result").style.color = messageColor;
}
