sap.ui.controller("basket_analysis_ui_upload.main", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf upload.main
	 */
	onInit : function() {
		this.model.refresh();
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf upload.main
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf upload.main
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf upload.main
	 */
	// onExit: function() {
	//
	// }
	model : new sap.ui.model.odata.ODataModel(
			"../../../model/header_item.xsodata"),

	uploadUrl : "../../../services/upload_csv.xsjs",

	resetUrl : "../../../services/resetHeaderItem.xsjs",

	runAprioriUrl : "../../../services/runApriori.xsjs",

	onFileChanged : function() {

	},

	onUploadComplete : function(oControlEvent) {
		sap.ui.getCore().byId("txv_response").setText(oControlEvent.getParameters().response);
		this.model.refresh();
	},

	onPressUpload : function() {
		var file_uploader = sap.ui.getCore().byId("fup_csv");
		file_uploader.upload();
	},

	onPressReset : function() {
		jQuery.get(this.resetUrl, {}, function(data, textStatus, jqXHR) {
			sap.ui.getCore().byId("txv_response").setText(data);
			
		});
		this.model.refresh();
	},

	onPressRunBasketAnalysis : function() {
		jQuery.get(this.runAprioriUrl, {}, jQuery.proxy(
				function(data, textStatus, jqXHR) {
					sap.ui.getCore().byId("txv_response").setText(data);
					this.model.refresh();	
				},
				this));
		
	},

});