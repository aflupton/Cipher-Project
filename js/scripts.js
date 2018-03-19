
  var sentence = prompt("Write a sentence")
  alert(sentence);
  var char1=sentence.charAt(0);
  alert(char1);
  var char2=sentence.charAt(sentence.length-1);

  alert(char2);
  alert(char1 + char2);

  var newstring = (char1 + char2);
  var newnewstring = newstring.toUpperCase();

  alert(newnewstring);

  // var str = newnewstring.reverse(){
    function reverse(newnewstring){
      return newnewstring.split("").reverse().join("");
  }

  alert(reverse);
