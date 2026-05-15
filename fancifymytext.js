function makeBigger() {
  alert("Hello World");
  document.getElementById("textInput").style.fontSize = "24pt";
}

function changeStyle() {
  var text = document.getElementById("textInput");

  if (document.getElementById("fancy").checked) {
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline";
  }

  if (document.getElementById("boring").checked) {
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none";
  }
}

function moo() {
  var text = document.getElementById("textInput");
  var words = text.value;

  words = words.toUpperCase();

  var parts = words.split(".");
  words = parts.join("-Moo.");

  text.value = words;
}