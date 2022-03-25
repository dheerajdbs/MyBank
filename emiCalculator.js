function fdMaturityCalculator(){
	debugger;
	var pAmt = parseInt(document.getElementById("amount").value);
	var tenure = document.getElementById("tenure").value;
	if(!pAmt){
		alert("Please enter amount");
		return false;
	}
	if(tenure == "zeroToTwo")
		var duration = 2;
	else if( tenure == "TwoToFive")
		var duration = 5;
	else 
		var duration = 10;
	
	var roi = parseInt(document.getElementById("roi").value);
	var maturityValue = pAmt + pAmt*roi*duration/100;
	document.getElementById("maturityVal").value= parseInt(maturityValue).toFixed(2);
	
}

function loanEMICalculator(){
	var principalAmt = document.getElementById("amountLent").value;
	var roi = document.getElementById("roi").value;
	var tenure = document.getElementById("duration").value;
	if(!principalAmt){
		alert("Please enter Priciple amount");
		return false;
	}
	else if(!tenure){
		alert("Please enter Duration");
		return false;
	}
	tenure = tenure*12;
	var monthlyROI = roi/(12*100);
	console.log(monthlyROI);
	var resultEMI = principalAmt*monthlyROI*(Math.pow( (1+monthlyROI), tenure)/ ( Math.pow( (1+monthlyROI), tenure) - 1) )
	document.getElementById("emi").value= resultEMI.toFixed(2);
}