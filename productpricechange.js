function updatePrice(){
	try{
		var WNPPS1_Select =  document.getElementById('WNPPS1_Select');
		var WNPPS1_Price = document.getElementById('WNPPS1_Price');
		var WNPPS1_Image = document.getElementById('WNPPS1_Image');
		if (WNPPS1_Select.value == "Black"){
			WNPPS1_Price.innerHTML = "$6.99";
			WNPPS1_Image.src = "../pics/Products/PhoneStandRound-Black.png"
			console.log("updated price of WNPPS1 to Black");
		}
		else{
			WNPPS1_Price.innerHTML = "$4.99";
			WNPPS1_Image.src = "../pics/Products/PhoneStandRound.png"
			console.log("updated price of WNPPS1 to White");
		}
	}
	catch{
		console.log("itemnotfound: WNPPS1")
	}


	try{
		var WNPWC_Select =  document.getElementById('WNPWC_Select');
		var WNPWC_Price = document.getElementById('WNPWC_Price');
		var WNPWC_Image = document.getElementById('WNPWC_Image');
		if (WNPWC_Select.value == "Black"){
			WNPWC_Price.innerHTML = "$2.99";
			WNPWC_Image.src = "../pics/Products/webcamCover-Black.png"
			console.log("updated price of WNPWC to Black");
		}
		else{
			WNPWC_Price.innerHTML = "$1.99";
			WNPWC_Image.src = "../pics/Products/webcamCover.png"
			console.log("updated price of WNPWC to White");
		}
	}
	catch{
		console.log("itemnotfound: WNPWC")
	}


	try{
		var WNPCN_Select =  document.getElementById('WNPCN_Select');
		var WNPCN_Price = document.getElementById('WNPCN_Price');
		var WNPCN_Image = document.getElementById('WNPCN_Image');
		var WNPCN_Name = document.getElementById('WNPCN_Name');
		if (WNPCN_Select.value == "Black"){
			WNPCN_Price.innerHTML = "$5.49";
			WNPCN_Image.src = "../pics/Products/customNameplate-Black.png"
			console.log("updated price of WNPCN to Black");
		}
		else{
			WNPCN_Price.innerHTML = "$3.99";
			WNPCN_Image.src = "../pics/Products/customNameplate.png"
			console.log("updated price of WNPCN to White");
		}
		console.log(WNPCN_Name.value)
	}
	catch{
		console.log("itemnotfound: WNPCN")
	}

}