var quoteArray = [
    ["You can't eat jalepeno seeds because they burn holes in your intestine.", "-Zac Sliker"],
    ["Cane sugar is good for you because it's not processed and doesn't have bleach like other sugar.", "-Zac Sliker"],
    ["Baking soda and vinegar melts hair.", "-Zac Sliker"],
    ["Pesto is a plant.", "-Zac Sliker"],
    ["I thought jalapenos grownon trees?", "-Zac Sliker"],
    ["I heard the salmonfly hatch starts next week. Wanna go catch some salmon?", "-Zac Sliker"],
    ["It hurts to jack off with toothpaste.", "-Zac Sliker"],
    ["Is that a rock or an asphalt?", "-Zac Sliker"],
    ["If you get the rice wet we'll get rats.", "-Zac Sliker"],
    ["Jim Carry is the main character of The Office.", "-Zac Sliker"],
    ["If coconut oil melts at 75 does it have to get down to 50 to solidify again?", "-Zac Sliker"],
    ["Bill gates founded Google.", "-Zac Sliker"],
    ["The freeway is 45 through Bozeman.", "-Zac Sliker"],
    ["I know it happens, I read it online. Not everything you read online isn't true. You think a government sponsored website would lie?", "-Zac Sliker"],
    ["If we could control the weather with chem trails then why is the earth warming?", "-Zac Sliker"],
    ["It can't rain if it's hot that's why it doesn't rain in the desert?", "-Zac Sliker"],
    ["There is no such thing as waterproof clothing. Waders aren't even water proof.", "-Zac Sliker"],
    ["You need to lube the pistons in electric cars.", "-Zac Sliker"],
    ["You don't need to oil a pan for eggs, they are supposed to stick.", "-Zac Sliker"],
    ["It's crazy to think slavery was abolished only 50 years ago.", "-Zac Sliker"],
    ["I found a chili pepper on my nut I'm concerned now.", "-Zac Sliker"],
    ["I can't believe the butter in the freezer hasn't gone bad yet.", "-Zac Sliker"],
    ["Wait, who's Kurt Cobain?", "-Zac Sliker"],
    ["Go get some bacon grease so we can start this fire.", "-Zac Sliker"],
    ["Do they make candles out of bacon grease?", "-Zac Sliker"],
    ["The water in this lake is probably about -10 degrees huh?", "-Zac Sliker"],
    ["The sun moves a lot faster in the mountains.", "-Zac Sliker"],
    ["Beef broth doesnt have water in it.", "-Zac Sliker"],
    ["Chicken is basically just carbs.", "-Zac Sliker"],
    ["There is nothing gross about spitting on your carpet.", "-Zac Sliker"],
    ["Kurt Cobain is the host of To Catch a Predator.", "-Zac Sliker"],
    ["Zyn cans aren't water proof, I pissed myself and now all my Zyns are yellow.", "-Zac Sliker"],
    ["There are no bugs in Montana, it gets too cold.", "-Zac Sliker"],
    ["Articulate isn't even a word, idiot!", "-Zac Sliker"],
    ["I looked it up guys, turns out mermaids aren't real.", "-Zac Sliker"],
    ["Metal cant scratch non-stick.", "-Zac Sliker"]
];

var colorArray = [
  "#FF99FF", // pinkish-purple
  "#9999FF", // blue
  "#00CC00", // green
  "#FF6633", // orange
  "#FFCC00", // yellow
  "#FF999B", // Salmon
];

var numQuotes = quoteArray.length;
var numColors = colorArray.length;

var randomNum;

var randomColor;
var newRandomColor;

var randomColorNumber = 0;

// arrays each containing
// text at index 0
// and author at index 1
var quote;
var newQuote;

var twitterQuote = "";

$(document).ready(function() {
  // initialize quote to a random one
  randomNum = newRandomNumber();
  randomColor = newRandomColor();

  quote = newQuote(randomNum);
  twitterQuote = quote[0] + " " + quote[1];

  $("#quote-text").text(
    quote[0]);
  $("#quote-author").text(
    quote[1]);

  $("body").css("background-color", randomColor);
  $("#quote-text").css("color", randomColor);
  $("#quote-author").css("color", randomColor);
  $("#quote-box button").css("background-color", randomColor);
  $("i").css("color", randomColor);

  // whenever #new-quote-icon is clicked
  $("#new-quote-icon").on("click", function() {

    randomNum = newRandomNumber();
    randomColor = newRandomColor();

    quote = newQuote(randomNum);
    twitterQuote = quote[0] + " " + quote[1];

    $("#quote-text").text(
      quote[0]);
    $("#quote-author").text(
      quote[1]);

    $("body").css("background-color", randomColor);
    $("#quote-text").css("color", randomColor);
    $("#quote-author").css("color", randomColor);
    $("#quote-box button").css("background-color", randomColor);
    $("i").css("color", randomColor);

  }); // end of new quote function

  // when twitter icon is clicked
  $("#twitter-icon").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + twitterQuote);
  }); // end of twitter click function

}); // end of document ready function

// returns quote with index randomNum
function newQuote(randomNum) {
  return quoteArray[randomNum];
}

// returns number corresponding to
// quoteArray indices
function newRandomNumber() {
  var num = Math.floor(Math.random() * (numQuotes - 1));
  if (num >= randomNum) {
    num++;
  }
  return num;
}

// returns a new random color
// that is different than
// the current one
function newRandomColor() {
  var num = Math.floor(Math.random() * (numColors - 1));

  if (num >= randomColorNumber) {
    num++;
  }

  randomColorNumber = num;
  return colorArray[num];
}