
//create new window for login information
var loginWindow = Ti.UI.currentWindow;
	

var emailLabel = Ti.UI.createLabel({
	text: 'Enter your e-mail and password',
	color: '#515050',
	fontSize: 12,
	top: 30
});

var email = Titanium.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    hintText : 'Email',
    keyboardType: 'Keyboard_Email',
    top : emailLabel.top + 20,
    width : 300, height : 35
});

var password = Titanium.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    hintText : 'Password ',
    passwordMask: true,
    keyboardType: 'Keyboard_Email',
    top : email.top + 35,
    width : 300, height : 35
});









var forgotLabel = Ti.UI.createLabel({
	text: 'Forgot User ID/Password?',
	color: '#515050',
	fontSize: 12,
	top: 250
});

// Add to the parent view.
loginWindow.add(emailLabel,email, password, forgotLabel);


