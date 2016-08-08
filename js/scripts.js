  inputWords = localStorage.getItem(prompt("Enter sentence with more than two words."));
jQuery("h2").click(function() {
  var reFirst = new RegExp("/./")
  var reLast = new RegExp("/^/")
  var firstLetter = inputWords.match(reFirst);
  var lastLetter = inputWords.match(reLast);
  alert(firstLetter + lastLetter);
});
