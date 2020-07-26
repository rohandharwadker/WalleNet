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

	var WNPWC_Select =  document.getElementById('select-WNPWC');
	var WNPWC_Price = document.getElementById('price-WNPWC');
	if (WNPWC_Select.value == "Black"){
		WNPWC_Price.innerHTML = "$1.99";
		console.log("updated price of WNPWC to Black");
	}
	else{
		WNPWC_Price.innerHTML = "$0.99";
		console.log("updated price of WNPWC to White");
	}
}