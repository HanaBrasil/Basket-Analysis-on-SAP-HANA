sap.ui.controller("view.user_details", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf view.user_details
	 */
	// onInit : function() {		

	// },

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf view.user_details
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf view.user_details
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf view.user_details
	 */
	// onExit: function() {
	//
	// }
	

	onPressBack: function(){
		// var back = sap.ui.getCore().byId("user_details");
		// sap.ui.getCore().byId("main_container").back(back,"slide");
	},

	onPressNext: function(){

		if (this.validateInput()) {
			var next = sap.ui.getCore().byId("view_file_input");
			sap.ui.getCore().byId("main_container").to(next,"slide");

		};
		
	},

	validateInput: function(){
		var name = sap.ui.getCore().byId("txf_name").getValue();
		var email = sap.ui.getCore().byId("txf_email").getValue();


		if (name != "" &&
			email != "") {
			return true;
		}else{
			return false;
		};
		
	},

});