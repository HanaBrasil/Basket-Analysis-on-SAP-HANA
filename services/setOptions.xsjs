var min_support;
var min_confidence;
var min_lift;

var connection;
var procedureCall;

//Implementation of POST call
function handlePost() {
	
	connection = $.db.getConnection();
	procedureCall = connection.prepareCall('call "DM_PAL"."br.com.hanabrasil.basket_analysis.logic::setOptions"(?,?,?)');
	
	procedureCall.setDouble(1,parseFloat(min_support));
	procedureCall.setDouble(2,parseFloat(min_confidence));
	procedureCall.setDouble(3,parseFloat(min_lift));
	
	procedureCall.execute();
	
	connection.commit();
	connection.close();
	
}

// Check Content type headers and parameters
function validateInput() {
	
	var is_input_valid = false;
	
	if ($.request.method === $.net.http.POST ){
		is_input_valid = true;
	}else {
//		is_input_valid = false;
		return false;
	}
	
	// Extract parameters and process them
	min_support = $.request.parameters.get("min_support");
	min_confidence = $.request.parameters.get("min_confidence");
	min_lift = $.request.parameters.get("min_lift");
	
	if(min_support === undefined || min_confidence === undefined || min_lift === undefined){
		return false;
	}
	
	return is_input_valid;

}
// Request process 
function processRequest(){
	if (validateInput()){
		
		handlePost();
		
		$.response.setBody("Changes saved!" + 
				" Support: " + min_support + 
				" Confidence: " + min_confidence +
				" Lift: " + min_lift
		);
		
		$.response.contentType = "text/html";
		$.response.status = $.net.http.ACCEPTED;
	} else{
		$.response.contentType = "text/html";
		$.response.status = $.net.http.BAD_REQUEST;
		$.response.setBody("ERROR!" + 
				" Support: " + min_support + 
				" Confidence: " + min_confidence +
				" Lift: " + min_lift
		);
	}
}

// Call request processing  
processRequest();
