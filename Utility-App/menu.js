//create new window for account information
var menuWindow = Ti.UI.currentWindow;


//1. Store data in an array
var data = [
	{imgs:"images/chimichanga.jpg",title:"Chimichanga",price: 6.49},
	{imgs:"images/nacho.jpg", title:"Nacho Supreme", price: 5.99},
	{imgs:"images/fajita.jpg", title: "Fajitas", price: 8.49},
	{imgs:"images/Food1.jpg", title: "Special Mexico", price: 7.79},
	{imgs:"images/quesadilla.jpg", title: "Cheese Quesadilla", price: 1.99},
	{imgs:"images/Guac.jpg", title: "Guacamole", price: 2.79},
	{imgs:"images/Tacos.jpg", title: "Tacos", price: 4.59}	
];

var rowData = []; //Array to hold row objects created by createTableViewRow

//Make array in a for loop to create TableViewRows from views
for(var i = 0; i < data.length; i++){
	
	//Create rows to insert in the table row
	var imgs = Titanium.UI.createImageView({
		image:data[i].imgs,//The imgs property of the data array
		height:180,
		width:320
	});
	
	var bgBar = Titanium.UI.createView({
		height:36,
		width:"100%",
		bottom:0,
		left:0,
		backgroundColor:"#000",
		opacity:0.6
	});
	
	var title = Titanium.UI.createLabel({
		text:data[i].title,//The title property of the data array
		height:36,
		width:"75%", 
		bottom:0,
		left:0,
		color:"#FFFFFF",
		textAlign:"left"
	});

	var price = Titanium.UI.createLabel({
		text:"$" + data[i].price,//The price property of the data array
		height:36,
		width:"25%",
		bottom:0,
		right:0,
		color:"#FFFFFF",
		textAlign:"right"
	});
	
	//Create the row
	var row = Titanium.UI.createTableViewRow({
		height:"auto"//Set the height of the row to auto so that it expands freely in the vertical direction
	});
	
	//Add the views to the row
	row.add(imgs);
	row.add(bgBar);
	row.add(title);
	row.add(price);
	
	
	imgs.addEventListener("click", function(e){
		alert("You tapped the image");
	});
	

	//push the row into the array
	rowData.push(row);
}

//rows created by tableView
var tableView = Titanium.UI.createTableView({
	//4. Set the new array as the data source for our TableView
	data:rowData
});

menuWindow.add(tableView);

