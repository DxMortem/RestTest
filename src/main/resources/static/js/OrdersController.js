


var order1 ={
	{"2":{"orderAmountsMap":{"PIZZA":2,"HOTDOG":1,"COKE":5},"tableNumber":1}}
};



function addNewOrder(orden) {
	
	var tope = new Array();
	tope.push("Product");
	tope.push("Quantity");
	//tope.push("Price");
	
	for(ele in orden){
		var table = document.createElement("TABLE");
		table.border = "1";
		table.setAttribute("id","Table"+ele);
	 
		var columnCount = 2;
			
		var row = table.insertRow(-1);
		var headerTable = document.createElement("TH");
		headerTable.setAttribute("colspan","3");
		headerTable.innerHTML = "Table "+ele;
		row.appendChild(headerTable);

		var row = table.insertRow(-1);
		for (var i = 0; i < columnCount; i++) {
			var headerCell = document.createElement("TH");
			headerCell.innerHTML = tope[i];
			row.appendChild(headerCell);
		}
	 
		for (prod in orden[ele].orderAmountsMap) {
			row = table.insertRow(-1);
			var cell = row.insertCell(-1);
			cell.innerHTML = prod;
			var cell = row.insertCell(-1);
			cell.innerHTML = orden[ele].orderAmountsMap[prod];
			//var cell = row.insertCell(-1);
			//cell.innerHTML = orden.products[i].price;
		}
	 
		var dvTable = document.getElementById("dvTables");
		dvTable.appendChild(document.createElement("BR"));
		dvTable.appendChild(table);
	}
}

function loadOrders(){
	addNewOrder(order1);
	axios.get("/orders")
	.then(function (response){
		var orders = response.data;
		for(var i=0;i<orders.length;i++){
				addNewOrder(orders[i]);
		}
	})
	.catch(function (error){
		console.log("There is a problem with our servers. We apologize for the inconvince, please try again later");
	});		        
}

function removeOrderById(id){
    var _table = document.getElementById("Table"+id);
    if(_table) _table.parentNode.removeChild(_table);
}
