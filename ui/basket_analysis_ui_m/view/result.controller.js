sap.ui.controller("view.result", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf view.result
	 */
	onInit : function() {		
		this.model = sap.ui.getCore().getModel();
		sap.ui.getCore().byId("tab_result").setModel(this.model);
		this.model.refresh();
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf view.result
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf view.result
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf view.result
	 */
	// onExit: function() {
	//
	// }

	model: null,

	runAprioriUrl : "../../services/runApriori.xsjs",

	onPressBack: function(){
		var back = sap.ui.getCore().byId("options");
		sap.ui.getCore().byId("main_container").back(back,"slide");
	},

	onPressNext: function(){
		// var next = sap.ui.getCore().byId("view_result");
		// sap.ui.getCore().byId("main_container").to(next,"slide");
	},

	onPressRunBasketAnalysis : function() {
		jQuery.get(
			this.runAprioriUrl, 
			{},
			jQuery.proxy(
				function(data, textStatus, jqXHR) {
					// sap.ui.getCore().byId("txv_response").setText(data);
					this.model.refresh();	
				},
			this)
		);
		
	},
	
});