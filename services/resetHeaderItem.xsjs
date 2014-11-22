var connection;
var procedureCall;

// Request process 
function processRequest() {
	connection = $.db.getConnection();
	procedureCall = connection.prepareCall('call "DM_PAL"."br.com.hanabrasil.basket_analysis.logic::resetHeaderItem"');
	procedureCall.execute();
	connection.commit();
	connection.close();
	$.response.contentType = "text/html";
	$.response.setBody( "Table reseted!" );
	$.response.status = $.net.http.ACCEPTED;
	
}
// Call request processing  
processRequest();
