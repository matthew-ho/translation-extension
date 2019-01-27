document.body.addEventListener('dblclick', function(e) {
	var translation = cToE[window.getSelection().toString().trim()];
	console.log(translation);
	console.log(e.clientX);
	console.log(e.clientY);
	if (translation !== undefined) {
		var clickX = event.clientX + document.body.scrollLeft;
		var clickY = event.clientY + document.body.scrollTop;
		console.log(clickX);
		console.log(clickY);
		var translationWindowHTML = '<translationWindow style="top: ' + clickY + 'px; left: ' + clickX + 'px;"'+ '>';
		translationWindowHTML += '<p>' + translation + '</p>';
		translationWindowHTML += '</translationWindow>';

		document.body.innerHTML += translationWindowHTML;
	}

});

document.body.addEventListener('click', function() {
	var translationWindows = document.getElementsByTagName("translationWindow");
	if (translationWindows.length !== 0) {
		var lastTranslationWindow = translationWindows[translationWindows.length - 1];
		lastTranslationWindow.parentNode.removeChild(lastTranslationWindow);
	}
}, true);
