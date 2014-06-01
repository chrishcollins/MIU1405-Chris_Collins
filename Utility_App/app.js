
Titanium.UI.setBackgroundImage('images/orange.png');

// create tab group
var tabGroup = Ti.UI.createTabGroup();


// Create our main window
var mainWindow = Ti.UI.createWindow({
	title: 'Monterrey',
	navBarHidden:true,
	statusBarStyle:Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
	tabBarHidden:true //Hide the tab bar for the window
});


var mainTab = Titanium.UI.createTab({  //tab 0
    icon:"KS_nav_views.png",
    title:"Main Tab",
    window:mainWindow
});


// Create an ImageView.
var logoView = Ti.UI.createImageView({
	image : 'images/Monterrey.png',
	width : 280,	
	height : 224,
	top : 60
});


// Add to the parent view.
mainWindow.add(logoView);

//var loadLogin = require('login');

// Create a Button.
var enterButton = Ti.UI.createButton({
	title : 'Enter',
	font:{
		fontFamily:'Helvetica',
		fontWeight:'bold',
		fontSize:16
	},
	backgroundImage: 'images/Green-Button.png',
	height : 50,
	width : 200,
	top : logoView.top + 320
});



// Restaurant's physical address.
var address1 = Ti.UI.createLabel({
	text : '154 Ridgeview Rd, SW',
	color : '##000000',
	font : {fontSize:14},
	height : 50,
	width : 300,
	bottom : 65,
	textAlign : 'center'
});

var address2 = Ti.UI.createLabel({
	text : ' Ste 6',
	color : '##000000',
	font : {fontSize:14},
	height : 50,
	width : 300,
	bottom : 50,
	textAlign : 'center'
});

var address3 = Ti.UI.createLabel({
	text : 'Wise, VA 24293',
	color : '##000000',
	font : {fontSize:14},
	height : 50,
	width : 300,
	bottom : 35,
	textAlign : 'center'
});

var address4 = Ti.UI.createLabel({
	text : '276-679-5850',
	color : '##000000',
	font : {fontSize:14},
	height : 50,
	width : 300,
	bottom : 20,
	textAlign : 'center'
});

// Add to the parent view.
mainWindow.add(enterButton, address1, address2, address3, address4);




// Create our login window
var loginWin = Ti.UI.createWindow({
	barColor:"#000000",
	title: 'Log In',
	statusBarStyle:Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
	tabBarHidden: true,
	backgroundImage: "images/orange.png",
	color: "#ffffff",
	url: 'login.js'
});

var loginTab = Titanium.UI.createTab({  //tab 1  
    icon:"KS_nav_views.png",
    title:"Login Tab",
    window:loginWin
});


// Create a Button.
var backButtonOne = Ti.UI.createButton({
	title : L('Back'),
	style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
	top: -50
});

loginWin.setLeftNavButton(backButtonOne);

// Add to the parent view.
loginWin.add(backButtonOne);

// Create a Button.
var logInButton = Ti.UI.createButton({
	title : 'Log In',
	font:{
		fontFamily:'Helvetica',
		fontWeight:'bold',
		fontSize:16
	},
	backgroundImage: 'images/Blue-Button.png',
	height : 60,
	width : 300,
	top : 190
});


// Create a Button.
var joinButton = Ti.UI.createButton({
	title : 'Join',
	font:{
		fontFamily:'Helvetica',
		fontWeight:'bold',
		fontSize:16
	},
	backgroundImage: 'images/Green-Button.png',
	height : 60,
	width : 300,
	top : logInButton.top + 150
});

// Add to the parent view.
loginWin.add(backButtonOne, logInButton, joinButton);








// Create our account window
var accountWin = Ti.UI.createWindow({
	barColor:"#000000",
	title: 'Create Account',
	statusBarStyle:Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
	tabBarHidden: true,
	backgroundImage: "images/orange.png",
	color: "#ffffff",
	url: 'account.js'
});

var accountTab = Titanium.UI.createTab({  //tab 2  
    icon:"KS_nav_views.png",
    title:"Account Tab",
    window:accountWin
});

// Create a Button.
var backButtonTwo = Ti.UI.createButton({
	title : L('Back'),
	style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
	top: -50
});

accountWin.setLeftNavButton(backButtonTwo);

// Add to the parent view.
accountWin.add(backButtonTwo);


// Create a Button.
var accountButton = Ti.UI.createButton({
	title : 'Create Account',
	font:{
		fontFamily:'Helvetica',
		fontWeight:'bold',
		fontSize:16
	},
	backgroundImage: 'images/Green-Button.png',
	height : 60,
	width : 300,
	top : 400
});

// Add to the parent view.
accountWin.add(accountButton);






// Create our account window
var menuWin = Ti.UI.createWindow({
	barColor:"#000000",
	title: 'Menu',
	statusBarStyle:Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK,
	tabBarHidden: true,
	backgroundImage: "images/orange.png",
	color: "#ffffff",
	url: 'menu.js'
});

var menuTab = Titanium.UI.createTab({  //tab 3  
    icon:"KS_nav_views.png",
    title:"Menu Tab",
    window:menuWin
});

// Create a Button.
var backButtonThree = Ti.UI.createButton({
	title : L('Home'),
	style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
	top: -50
});

menuWin.setLeftNavButton(backButtonThree);

// Add to the parent view.
menuWin.add(backButtonThree);





// Listen for click events.
enterButton.addEventListener("click", function(e){
	tabGroup.setActiveTab(1);
});

backButtonOne.addEventListener('click', function() {
	tabGroup.setActiveTab(tabGroup.tabs[0]);
});


logInButton.addEventListener('click', function() {
	tabGroup.setActiveTab(tabGroup.tabs[3]);
});

joinButton.addEventListener('click', function() {
	tabGroup.setActiveTab(tabGroup.tabs[2]);
});

backButtonTwo.addEventListener('click', function() {
	tabGroup.setActiveTab(tabGroup.tabs[1]);
});

accountButton.addEventListener('click', function() {
	alert('Thank you for registering.');
	tabGroup.setActiveTab(tabGroup.tabs[3]);
});

backButtonThree.addEventListener('click', function() {
	tabGroup.setActiveTab(tabGroup.tabs[0]);
});

//Add tabs to main tabGroup
tabGroup.addTab(mainTab);
tabGroup.addTab(loginTab);
tabGroup.addTab(accountTab);
tabGroup.addTab(menuTab);

// open tab group
tabGroup.open();
