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
function checkText(){
	var WNPCN_Name = document.getElementById('WNPCN_Name');
	var WNPCN_Submit = document.getElementById('WNPCN_Submit');
	var WNPCN_Warning = document.getElementById('WNPCN_Warning');
	var nametext = WNPCN_Name.value;
	if (nametext.length < 1){
		console.log('textlength 0');
		WNPCN_Warning.style.display = 'block';
		WNPCN_Submit.style.display = 'none';
	}
	else{
		console.log('textlength > 0');
		WNPCN_Warning.style.display = 'none';
		WNPCN_Submit.style.display = 'block';
	}
}