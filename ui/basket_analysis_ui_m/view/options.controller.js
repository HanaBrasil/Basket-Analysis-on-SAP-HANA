sap.ui.controller("view.options", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf view.options
	 */
	onInit : function() {		
		this.model = sap.ui.getCore().getModel();
		sap.ui.getCore().byId("tab_control").setModel(this.model);
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the
	 * controller's View is re-rendered (NOT before the first rendering!
	 * onInit() is used for that one!).
	 * 
	 * @memberOf view.options
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part of the
	 * document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * 
	 * @memberOf view.options
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free resources
	 * and finalize activities.
	 * 
	 * @memberOf view.options
	 */
	// onExit: function() {
	//
	// }
	
	model: null,

	name_support_slider: "slider_support",
	name_support_value_holder: "lab_support_value",
	
	name_confidence_slider: "slider_confidence",
	name_confidence_value_holder: "lab_confidence_value",

	name_lift_slider: "slider_lift",
	name_lift_value_holder: "lab_lift_value",
	
	onPressBack: function(){
		var back = sap.ui.getCore().byId("file_input");
		sap.ui.getCore().byId("main_container").back(back,"slide");
	},

	onPressNext: function(){
		var next = sap.ui.getCore().byId("view_result");
		sap.ui.getCore().byId("main_container").to(next,"slide");
	},

	onPressSave: function(oControlEvent){
		var data = {
			"min_support" : sap.ui.getCore().byId(this.name_support_slider).getValue(),
			"min_confidence": sap.ui.getCore().byId(this.name_confidence_slider).getValue(),
			"min_lift": sap.ui.getCore().byId(this.name_lift_slider).getValue(),
		};

		jQuery.post(
			"../../services/setOptions.xsjs", 
			data, 
			jQuery.proxy(function(data, textStatus, jqXHR){
				console.log("opa!");
				this.model.refresh();
			},this),
			"html"
			);
	},


	onLiveChangeSliderSupport: function(oControlEvent){
		var value_holder = sap.ui.getCore().byId(this.name_support_value_holder)
		value_holder.setText(oControlEvent.getParameter("value"));
	},

	onLiveChange: function(oControlEvent){
		var value_holder_id= this.getValueHolderOfSlider(oControlEvent.getParameter("id"));
		var value_holder = sap.ui.getCore().byId(value_holder_id)
		value_holder.setText(oControlEvent.getParameter("value"));
	},

	getValueHolderOfSlider: function(slider_name){
		switch(slider_name){
			case this.name_support_slider:
				return this.name_support_value_holder;
			case this.name_confidence_slider:
				return this.name_confidence_value_holder;
			case this.name_lift_slider:
				return this.name_lift_value_holder;
		};
		
	}


});