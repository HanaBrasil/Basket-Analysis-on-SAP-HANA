var connection;
var procedureCall;
//var proc_src;
// Request process 
function processRequest() {
	connection = $.db.getConnection();
//	procedureCall = connection.prepareCall('call  "DM_PAL"."br.com.hanabrasil.basket_analysis.logic::runApriori"() with overview');


//	proc_src = "delete from \"DM_PAL\".\"br.com.hanabrasil.basket_analysis.data::basket_analysis.tt_pal_apriori_result\"\n";
	//proc_src += "delete from 'br.com.hanabrasil.basket_analysis.data::basket_analysis.tt_pal_apriori_pmml'";

	var delete1 = connection.prepareStatement("delete from \"DM_PAL\".\"br.com.hanabrasil.basket_analysis.data::basket_analysis.tt_pal_apriori_result\"");
	delete1.execute();
	
	var delete2 = connection.prepareStatement("delete from \"DM_PAL\".\"br.com.hanabrasil.basket_analysis.data::basket_analysis.tt_pal_apriori_pmml\"");
	delete2.execute();
	
	var pal_call = connection.prepareCall("CALL \"_SYS_AFL\".DM_PAL_APRIORI( " +
			"\"DM_PAL\".\"br.com.hanabrasil.basket_analysis.data::basket_analysis.header_item\"," + 
			"\"DM_PAL\".\"br.com.hanabrasil.basket_analysis.data::basket_analysis.tt_pal_apriori_control\","  + 
			"\"DM_PAL\".\"br.com.hanabrasil.basket_analysis.data::basket_analysis.tt_pal_apriori_result\", "  +
			"\"DM_PAL\".\"br.com.hanabrasil.basket_analysis.data::basket_analysis.tt_pal_apriori_pmml\") with overview");
	pal_call.execute();
	
	connection.commit();
	connection.close();
	$.response.contentType = "text/html";
	$.response.setBody( "PAL Apriori executed!" );
	$.response.status = $.net.http.ACCEPTED;
	
}
// Call request processing  
processRequest();
