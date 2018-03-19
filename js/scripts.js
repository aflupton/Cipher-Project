
  var sentence = prompt("Write a sentence")
  console.log(sentence);
  var char1=sentence.charAt(0);
  var char2=sentence.charAt(sentence.length-1);

  var newstring = (char1 + char2);
  var newnewstring = newstring.toUpperCase();

  // var str = newnewstring.reverse(){
  function reverse(inputString){
      return inputString.split("").reverse().join("");
  }

  alert(reverse(newnewstring));
