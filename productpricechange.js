function updatePrice(){
	var WNPPS1_Select =  document.getElementById('select-WNPPS1');
	var WNPPS1_Price = document.getElementById('price-WNPPS1');
	if (WNPPS1_Select.value == "Black"){
		WNPPS1_Price.innerHTML = "$6.99";
		console.log("updated price of WNPPS1 to Black");
	}
	else{
		WNPPS1_Price.innerHTML = "$4.99";
		console.log("updated price of WNPPS1 to White");
	}
}