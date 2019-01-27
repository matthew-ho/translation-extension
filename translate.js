//import {translations} from './translations.js'

function translate(translations) {
  var translationsList = Object.entries(translations);
  for (var i = 0; i < translationsList.length; i++){
    var regex = "\\b" + translationsList[i][0] + "\\b";
    var re = new RegExp(regex, "g");
    findAndReplaceDOMText(document.body, {
      find: re,
      replace: translationsList[i][1]
    });
  }
}

//var translations = {"狗": "dog", "狼": "wolf"};
translate(eToC);
