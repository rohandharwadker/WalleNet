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

	try{
		var WNPNM_Title = document.getElementById('WNPNM_Title');
		var WNPNM_Select =  document.getElementById('WNPNM_Select');
		var WNPNM_Price = document.getElementById('WNPNM_Price');
		var WNPNM_Image = document.getElementById('WNPNM_Image');
		var WNPNM_LED = document.getElementById('WNPNM_LED');
		var WNPNM_FAN = document.getElementById('WNPNM_FAN');
		/*
		<option value="Mini 2GB RAM">Mini 2GB RAM $109.00 USD</option>
		<option value="Mini 4GB RAM">Mini 4GB RAM $119.00 USD</option>
		<option value="Mini+ 2GB RAM">Mini+ 2GB RAM $119.00 USD</option>
		<option value="Mini+ 4GB RAM">Mini+ 4GB RAM $129.00 USD</option>
		<option value="Mini Pro 2GB RAM">Mini Pro 2GB RAM $164.00 USD</option>
		<option value="Mini Pro 4GB RAM">Mini Pro 4GB RAM $174.00 USD</option>
		<option value="Mini Pro 8GB RAM">Mini Pro 8GB RAM $184.00 USD</option>
		*/
		if (WNPNM_Select.value == "Mini 2GB RAM"){
			WNPNM_Title.innerHTML = "Net Mini";
			WNPNM_Price.innerHTML = "$109";
			WNPNM_Image.src = "../pics/Products/netmini-clipart.png";
			WNPNM_LED.innerHTML = "LED Power Circle";
			WNPNM_FAN.innerHTML = "No Cooling Fan";
		}
		else if (WNPNM_Select.value == "Mini 4GB RAM"){
			WNPNM_Title.innerHTML = "Net Mini"
			WNPNM_Price.innerHTML = "$119";
			WNPNM_Image.src = "../pics/Products/netmini-clipart.png";
			WNPNM_LED.innerHTML = "LED Power Circle";
			WNPNM_FAN.innerHTML = "No Cooling Fan";
		}
		else if (WNPNM_Select.value == "Mini+ 2GB RAM"){
			WNPNM_Title.innerHTML = "Net Mini+";
			WNPNM_Price.innerHTML = "$119";
			WNPNM_Image.src = "../pics/Products/netmini+-clipart.png";
			WNPNM_LED.innerHTML = "LED Power Circle";
			WNPNM_FAN.innerHTML = "30mm Cooling Fan";
		}
		else if (WNPNM_Select.value == "Mini+ 4GB RAM"){
			WNPNM_Title.innerHTML = "Net Mini+";
			WNPNM_Price.innerHTML = "$129";
			WNPNM_Image.src = "../pics/Products/netmini+-clipart.png";
			WNPNM_LED.innerHTML = "LED Power Circle";
			WNPNM_FAN.innerHTML = "30mm Cooling Fan";
		}
		else if (WNPNM_Select.value == "Mini Pro 2GB RAM"){
			WNPNM_Title.innerHTML = "Net Mini Pro";
			WNPNM_Price.innerHTML = "$164";
			WNPNM_Image.src = "../pics/Products/netminipro-clipart.png";
			WNPNM_LED.innerHTML = "LED Power Circle";
			WNPNM_FAN.innerHTML = "30mm Ultra Cooling Fan";
		}
		else if (WNPNM_Select.value == "Mini Pro 4GB RAM"){
			WNPNM_Title.innerHTML = "Net Mini Pro";
			WNPNM_Price.innerHTML = "$174";
			WNPNM_Image.src = "../pics/Products/netminipro-clipart.png";
			WNPNM_LED.innerHTML = "LED Power Circle";
			WNPNM_FAN.innerHTML = "30mm Ultra Cooling Fan";
		}
		else if (WNPNM_Select.value == "Mini Pro 8GB RAM"){
			WNPNM_Title.innerHTML = "Net Mini Pro";
			WNPNM_Price.innerHTML = "$184";
			WNPNM_Image.src = "../pics/Products/netminipro-clipart.png";
			WNPNM_LED.innerHTML = "LED Power Circle";
			WNPNM_FAN.innerHTML = "30mm Ultra Cooling Fan";
		}
	}
	catch{
		console.log("itemnotfound: WNPNM")
	}

}
function checkText(){
	var WNPCN_Name = document.getElementById('WNPCN_Name');
	var WNPCN_Submit = document.getElementById('WNPCN_Submit');
	var WNPCN_Warning = document.getElementById('WNPCN_Warning');
	var nametext = WNPCN_Name.value;
	if (nametext.length < 1){
		console.log('textlength 0');
		WNPCN_Warning.style.display = 'inline-block';
		WNPCN_Submit.style.display = 'none';
	}
	else{
		console.log('textlength > 0');
		WNPCN_Warning.style.display = 'none';
		WNPCN_Submit.style.display = 'inline-block';
	}
}