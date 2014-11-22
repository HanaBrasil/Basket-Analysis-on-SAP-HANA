var contentType;
var fileContent;

var connection;
var procedureCall;

function insertRow(row){	
	
	if (row === undefined) {
		return;
	}
	
	var params = row.split(';');
	
	var header_id = params[0].toString();
	var item_id = params[1].toString();
	
	procedureCall.setNString(1,header_id);
	procedureCall.setNString(2,item_id);
	
	procedureCall.execute();
}

function loadDataFromFile(file_content){
	var row_index;
	var file_rows = file_content.split('\r');
	
	connection = $.db.getConnection();
	procedureCall = connection.prepareCall('call "DM_PAL"."br.com.hanabrasil.basket_analysis.logic::insertHeaderAndItem"(?,?)');
	
	for (row_index = 0; row_index < file_rows.length; row_index++) { // no header
		insertRow(file_rows[row_index]);
	}
	
	connection.commit();
	connection.close();
	
	$.response.setBody("File imported!!"); // assuming it's in the correct format! 
}



// Check Content type headers and parameters
function validateInput() {
	
	if ($.request.method !== $.net.http.POST) {
		$.response.status = $.net.http.NOT_ACCEPTABLE;
		$.response.setBody("Only POST is supported!!");
		return false;
	}
	
	var file_entity_index;
	
	// Get entity header which contains the file content
	for (file_entity_index = 0; file_entity_index < $.request.entities.length; file_entity_index++) {
		if ($.request.entities[file_entity_index].headers.get("~content_name") === "fup_csv") {
			contentType = $.request.entities[file_entity_index].headers.get("content-type");
			if (contentType === 'text/csv') {
				$.response.status = $.net.http.ACCEPTED;
				fileContent = $.request.entities[0].body.asString();
				return true;
			}
		}
	}

	$.response.status = $.net.http.NOT_ACCEPTABLE;
	$.response.setBody("File is NOT a CSV!");
	return false;

}

// Request process 
function processRequest() {
//	$.response.contentType = "text/html";
//	$.response.setBody( "Upload service called!" );
//	$.response.status = $.net.http.ACCEPTED;
	if (validateInput()) {
		loadDataFromFile(fileContent);
	}
}
// Call request processing  
processRequest();
