// This sets the background image of the master UI View
Ti.UI.setBackgroundImage('Images/Orange.png');

var loadFile = require("artistWin");

//Create a tab group
var tabGroup = Ti.UI.createTabGroup();

//Create a window
var win = Ti.UI.createWindow({
	statusBarStyle: Ti.UI.iPhone.StatusBar.OPAQUE_BLACK,
	title: "Artist List",
	backgroundColor:'translucent',
	barImage:'Images/Metal.png',
	tabBarHidden:true
});

var tab = Ti.UI.createTab({
	icon: "KS_nav_ui.png",
	title:"Main Tab",
	window:win
});

//JSON data array
var artists = [
	{title: "Lecrae", 
	className: "tableRow", 
	hasChild: true,
	artistImage: "Images/LECRAE.png", 
	album: "Album: Church Clothes 2", 
	artist: "Artist: Lecrae", 
	releaseDate: "Released: Nov 08, 2013",
	record: "Label: Reach Records", 
	avgRating: "Average Rating: 5 out of 5",
	genres: "Genres: Hip-Hop " +  "Rap " + "Christian Rap",
	band: "Band Members: Lecrae",
	bioHeader: "Bio",
	born: "Born: Oct. 9, 1979 in Houston, TX",
	genre: "Genre: Hip-Hop & Rap",
	year: "Years Active: 00s, 10s",
	//bio: "For the typical music fan, Lecrae'/s hard demeanor and crunk beats might belie what his lyrics are really about, his adoration of Jesus Christ. The main tenet influencing his mission and music is taken from Romans 1 ch 16 of the Bible, /"For I am not ashamed of the gospel./" Although he was born on Houston/'s south side, Lecrae grew up in Denver, Colorado, and San Diego, California. It was at the age of 19 that he decided to give his life to Christ. Using conventional methods to spread the Gospel, he has worked for ministerial services, including his presidency of ReachLife Ministries, conducting Bible studies and many other projects. However, Lecrae's success has come from his up-and-coming Christian rap career. In 2005, on Reach Records, he released his debut album, Real Talk, and as a part of the 116 Clique, he put out 116 Clique: The Compilation Album. The following year, Lecrae dropped the acclaimed After the Music Stops in July. It debuted at number one on the Christian Music Trade Association's R&B/Hip-Hop chart and peaked at number five on Billboard's Gospel Albums chart. His 2008 effort, Rebel, would top that same chart for two weeks while his 2010 release, Rehab, would top it for one. The latter would be nominated for Best Rock or Rap Gospel Album at the 53rd Grammy Awards. A sequel album, Rehab: The Overdose, arrived in 2011, and was followed in 2012 by the rapper/'s chart-topping sixth album, Gravity."
	},
	
	{title: "Derek Minor", 
	className: "tableRow", 
	hasChild: true,
	artistImage: "Images/MINOR.png", 
	album: "Album: Minorville", 
	artist: "Artist: Derek Minor", 
	releaseDate: "Released: April 09, 2014",
	record: "Label: Reach Records", 
	avgRating: "Average Rating: 5 out of 5",
	genres: "Genres: Hip-Hop, Rap",
	band: "Band Members: Derek Minor"
	},
	
	{title: "The Fray", 
	className: "tableRow", 
	hasChild: true,
	artistImage: "Images/FRAY.png", 
	album: "Album: Helios", 
	artist: "Artist: The Fray", 
	releaseDate: "Released: Jan 14, 2014",
	record: "Label: Epic Records", 
	avgRating: "Average Rating: 4 out of 5",
	genres: "Genres: Pop",
	band: "Band Members: Isaac Slade " + "Joe King " +  "Dave Welsh " + "& Ben Wysocki"
	},
	
	{title: "Switchfoot", 
	className: "tableRow", 
	hasChild: true,
	artistImage: "Images/SWITCHFOOT.png", 
	album: "Album: Fading West", 
	artist: "Artist: Switchfoot", 
	releaseDate: "Released: Jan 10, 2014",
	record: "Label: Atlantic Recording Corp.", 
	avgRating: "Average Rating: 4.5 out of 5",
	genres: "Genres: Pop",
	band: "Band Members: Jon Foreman " + "Tim Foreman " + "Chad Butler " + "Jerome Fontamillas " + "& Drew Shirley"
	},
	
	{title: "Red", 
	className: "tableRow", 
	hasChild: true,
	artistImage: "Images/Red.png", 
	album: "Album: Release The Panic", 
	artist: "Artist: Red", 
	releaseDate: "Released: Feb 01, 2013",
	record: "Label: Provident Label Group LLC", 
	avgRating: "Average Rating: 4.5 out of 5",
	genres: "Genres: Rock, Music, Metal,Christian Rock.",
	band: "Band Members: Michael Barnes " + "Anthony Armstrong " + "Randy Armstrong " + "Joe Ricland" 
	},
	
	{title: "Tedashii", 
	className: "tableRow", 
	hasChild: true,
	artistImage: "Images/TEDASHII.png", 
	album: "Album: Below Paradise", 
	artist: "Artist: Tedashii", 
	releaseDate: "Released: May 27, 2014",
	record: "Label: Reach Records", 
	avgRating: "Average Rating: 5 out of 5",
	genres: "Genres: Hip-Hop, Rap",
	band: "Band Members: Tedashii"
	},
	
	{title: "Trip Lee", 
	className: "tableRow", 
	hasChild: true,
	artistImage: "Images/TRIP.png", 
	album: "Album: The Good Life", 
	artist: "Artist: Trip Lee", 
	releaseDate: "Released: April 10, 201",
	record: "Label: Reach Records", 
	avgRating: "Average Rating: 4.5 out of 5",
	genres: "Genres: Hip-Hop, Rap, Music, Christian & Gospel",
	band: "Band Members: Trip Lee"
	},
	
	{title: "Andy Mineo", 
	className: "tableRow", 
	hasChild: true,
	artistImage: "Images/Andy_Mineo.png", 
	album: "Album: Never Land", 
	artist: "Artist: Andy Mineo", 
	releaseDate: "Released: April 09, 2014",
	record: "Label: Reach Records", 
	avgRating: "Average Rating: 4.5 out of 5",
	genres: "Genres: Hip-Hop, Rap, Music, Christian & Gospel",
	band: "Band Members: Andy Mineo"
	},
	
	{title: "Lifehouse", 
	className: "tableRow", 
	hasChild: true,
	artistImage: "Images/Lifehouse.png", 
	album: "Album: Almeria", 
	artist: "Artist: Lifehouse", 
	releaseDate: "Released: Dec 11, 2012",
	record: "Label: Provident Label Group LLC", 
	avgRating: "Average Rating: 4 out of 5",
	genres: "Genres: Pop",
	band: "Band Members: Lifehouse"
	},
	
	{title: "Paper Tongues", 
	className: "tableRow", 
	hasChild: true,
	artistImage: "Images/tongues.jpg", 
	album: "Album: Paper Tongues", 
	artist: "Artist: Paper Tongues", 
	releaseDate: "Released: March 30, 2010",
	record: "Label: Interscope Records", 
	avgRating: "Average Rating: 4.5 out of 5",
	genres: "Genres: Alternative",
	band: "Band Members: Aswan North " + "Devin Forbes " + "Jeoy Signa " + "Daniel Santell " + "Luke Anderson."
	}
];
/*
var topView = Ti.UI.createImageView({
	backgroundColor:'translucent',
	height: 15,
	top: 0,
	width: "100%" 
});  */

var tableView = Ti.UI.createTableView({
	data:artists,
	backgroundImage:'Images/Orange.png',
	backgroundColor: 'transparent',
	top: 0,
	color: '#000'
});

win.add(tableView);

tableView.addEventListener("click", function(e){
	if(e.source.hasChild){
		//if(e.source.js){//Does the row have a pointer to an external js file?
			//It does: Load that file
			var artistWin = Titanium.UI.createWindow({
				title:e.source.title,//Take the title from the row
				statusBarStyle: Ti.UI.iPhone.StatusBar.OPAQUE_BLACK,
				backgroundColor:'translucent',
				barImage:'Images/Metal.png',
				tabBarHidden:true
			});
			
			
			var artistView = Ti.UI.createScrollView({
			  contentWidth: 'auto',
			  contentHeight: 'auto',
			  showVerticalScrollIndicator: true,
			  showHorizontalScrollIndicator: true,
			  height: '100%',
			  width: '100%'
			});
			
			artistWin.add(artistView);
			
			var subView = Ti.UI.createView({
			  backgroundColor:'#000000',
			  opacity: .1,
			  borderRadius: 10,
			  top: 0,
			  height: 1800,
			  width: 310
			});
			
			artistView.add(subView); 
			
			
			
			
			// Create an ImageView.
			var artImgView = Ti.UI.createImageView({
				image : e.source.artistImage,
				width : 300,
				height : 300,
				top : 20,
				left : 10
			});
			
			artistView.add(artImgView);
		
			
			// Add to the parent view.
			//artistWin.add(artImgView);
			
			var label = Titanium.UI.createLabel({
				text:e.source.title,
				width:"auto",
				height:"auto",
				top: 297,
				right: 12,
				backgroundColor: "#000000",
				textAlign:"center",
				color: "white",
			});
		
			artistView.add(label);
			
			
			  
			
			// Create a Label.
			var albumInfo = Ti.UI.createLabel({ 
				text: e.source.album,
				width:"auto",
				height:"auto",
				top: 350,
				left: 10,
				textAlign:"left",
				color: "white",
			});
			
			var artistInfo = Ti.UI.createLabel({ 
				text: e.source.artist,
				width:"auto",
				height:"auto",
				top: albumInfo.top + 15,
				left: 10,
				textAlign:"left",
				color: "white",
			});
			
			var releaseInfo = Ti.UI.createLabel({
				text: e.source.releaseDate,
				width:"auto",
				height:"auto",
				top: artistInfo.top + 15,
				left: 10,
				textAlign:"left",
				color: "white",
			});
			
			var recordInfo = Ti.UI.createLabel({
				text: e.source.record,
				width:"auto",
				height:"auto",
				top: releaseInfo.top + 15,
				left: 10,
				textAlign:"left",
				color: "white",
			});
			
				var avgInfo = Ti.UI.createLabel({
				text: e.source.avgRating,
				width:"auto",
				height:"auto",
				top: recordInfo.top + 15,
				left: 10,
				textAlign:"left",
				color: "white",
			});
			
				var genreInfo = Ti.UI.createLabel({
				text: e.source.genres,
				width:"auto",
				height:"auto",
				top: avgInfo.top + 15,
				left: 10,
				textAlign:"left",
				color: "white",
			});
			
			var bandInfo = Ti.UI.createLabel({
				text: e.source.band,
				width:"auto",
				height: genreInfo.top + 15,
				left: 10,
				textAlign:"left",
				color: "white",
			}); 
			
			var bioHeadInfo = Ti.UI.createLabel({ 
				text: e.source.bioHeader,
				width:"auto",
				height: bandInfo.top + 15,
				left: 10,
				textAlign:"Center",
				textWeight: "Bold",
				color: "white",
			}); 
			
			// Add to the parent view.
			artistView.add(albumInfo, artistInfo, releaseInfo, recordInfo, avgInfo, genreInfo, bioHeadInfo);
		/*	
			
	born: "Born: Oct. 9, 1979 in Houston, TX",
	genre: "Genre: Hip-Hop & Rap",
	year: "Years Active: 00s, 10s",
	bio: "For the typical music fan, Lecrae's hard demeanor and crunk beats might belie what his lyrics are really about, his adoration of Jesus Christ. The main tenet influencing his mission and music is taken from Romans 1:16 of the Bible, "For I am not ashamed of the gospel." Although he was born on Houston's south side, Lecrae grew up in Denver, Colorado, and San Diego, California. It was at the age of 19 that he decided to give his life to Christ. Using conventional methods to spread the Gospel, he has worked for ministerial services, including his presidency of ReachLife Ministries, conducting Bible studies and many other projects. However, Lecrae's success has come from his up-and-coming Christian rap career. In 2005, on Reach Records, he released his debut album, Real Talk, and as a part of the 116 Clique, he put out 116 Clique: The Compilation Album. The following year, Lecrae dropped the acclaimed After the Music Stops in July. It debuted at number one on the Christian Music Trade Association's R&B/Hip-Hop chart and peaked at number five on Billboard's Gospel Albums chart. His 2008 effort, Rebel, would top that same chart for two weeks while his 2010 release, Rehab, would top it for one. The latter would be nominated for Best Rock or Rap Gospel Album at the 53rd Grammy Awards. A sequel album, Rehab: The Overdose, arrived in 2011, and was followed in 2012 by the rapper's chart-topping sixth album, Gravity."
	
			*/
			
			/*
			var w = Titanium.UI.createWindow({
				title:e.source.title,//Take the title from the row
				backgroundColor:"#FFFFFF",
				dataToPass:e.source.dataToPass,
				url:e.source.js//The url property of a window will load an external .js file for window contents (be sure that external file is properly formatted!)
			});
		 }else{
			//It doesn't: Create a window from scratch
			var w = Titanium.UI.createWindow({
				title:e.source.title,//Take the title from the row
				backgroundColor:"#FFFFFF",
			}); */
			//Create some views for our window
			
			
		// }
		//Slide-open the window
		tab.open(artistWin,{animated:true});//Try it without the animated:true and see what happens
	}else{//Row doesn't have a window to open
		//alert("No window to open":(");
	}
});

//var loadFile = require("/artistWin");
//var loadFile = require("ui/common/DetailView");
//var loadFile = require("ui/common/MasterView");

win.add(tableView);

tabGroup.addTab(tab);  

// open tab group
tabGroup.open();

