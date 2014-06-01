//create new window for account information
var accountWindow = Ti.UI.currentWindow;
	
var nameLabel = Ti.UI.createLabel({
	text: 'Enter your full name.  Ex. John Smith',
	color: '#515050',
	fontSize: 11,
	top: 30
});

var name = Titanium.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    hintText : 'Name',
    keyboardType: 'Keyboard_Email',
    top : nameLabel.top + 20,
    width : 300, height : 35
});

var phone = Titanium.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    hintText : 'Phone Number ',
    keyboardType: 'Keyboard_Email',
    top : name.top + 30,
    width : 300, height : 35
});


var phoneLabel = Ti.UI.createLabel({
	text: 'Enter phone #. Ex. 276-555-1234',
	color: '#515050',
	fontSize: 11,
	top: phone.top +35
});


var emailLabelTwo = Ti.UI.createLabel({
	text: 'Enter your e-mail & password',
	color: '#515050',
	fontSize: 11,
	top: phoneLabel.top + 40
});

var emailTwo = Titanium.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    hintText : 'Email',
    keyboardType: 'Keyboard_Email',
    top : emailLabelTwo.top + 20,
    width : 300, height : 35
});

var passwordTwo = Titanium.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    hintText : 'Password ',
    passwordMask: true,
    keyboardType: 'Keyboard_Email',
    top : emailTwo.top + 35,
    width : 300, height : 35
});


var passwordLabelTwo = Ti.UI.createLabel({
	text: 'Password should contain 6-10 characters minimum.' + '  It must include one upper case letter and one number.',
	textAlign: 'center',
	color: '#515050',
	fontSize: 11,
	top: passwordTwo.top +35,
	width: 300
});

var birthDateLabel = Ti.UI.createLabel({
	text: 'Enter your date of birth',
	color: '#515050',
	fontSize: 11,
	top: passwordLabelTwo.top + 80
});

var birthDate = Titanium.UI.createTextField({
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    hintText : 'Date of birth',
    keyboardType: 'Keyboard_Email',
    top : birthDateLabel.top + 20,
    width : 300, height : 35
});

// Add to the parent view.
accountWindow.add(nameLabel,name, phone, phoneLabel, emailLabelTwo, emailTwo, passwordTwo, passwordLabelTwo, birthDateLabel, birthDate);
