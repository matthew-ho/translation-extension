//import {translations} from './translations.js'
function translate(translations) {
  var translationsList = Object.entries(translations);
  for (var i = 0; i < translationsList.length; i++){
    var regex = "\\b" + translationsList[i][0] + "\\b";
    var re = new RegExp(regex, "ig");
    findAndReplaceDOMText(document.body, {
      find: re,
      replace: translationsList[i][1]
    });
  }
}


chrome.storage.sync.get('color', function(data) {
  //changeColor.style.backgroundColor = data.color;
  //changeColor.setAttribute('value', data.color);
  console.log(data.color);
  if (data.color == "#3aa757"){
    translate(eToC1);
  }
  else if(data.color == "#f9bb2d"){
    translate(eToC2);
  }
  else if(data.color == "#e8453c"){
    translate(eToC3);
  }

});


//
// //var translations = {"狗": "dog", "狼": "wolf"};
// translate(eToC);
