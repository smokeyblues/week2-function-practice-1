var fiver = [];

function tripleFive () {
  for (var i = 0; i < 3; i++) {
    fiver.push("Five!");
  }  console.log(fiver.join(" ✋  "));
}

function lastLetter (string) {
  return string.charAt(string.length - 1);
}

function square (num) {
  return num * num;
}

function negate (num) {
  return num * -1;
}

function toArray (a, b, c) {
  return [a, b, c]
}

function startsWithA (str) {
  return str[0].toLowerCase() == 'a';
}

function excite (str) {
  return str + "!!!"
}

function sun (str) {
  return str.toLowerCase().indexOf('sun') !== -1;
}

function tiny (num) {
  return num > 0 && num < 1;
}

function getSeconds (str) {
  timeArray =str.split(":")
  hours = parseInt(timeArray[0])
  minutes = parseInt(timeArray[1])
  if (str.split(":").length !== 2) {
    console.log("Please enter a valid time in 'MM:SS' format")
  } if ( isNaN(hours) || isNaN(minutes) ) {
    console.log("Please enter a valid time in 'MM:SS' format and make sure the 'MM' and the 'SS' are integers ")
  } else {
    return (hours * 60) + minutes
  }
}
























