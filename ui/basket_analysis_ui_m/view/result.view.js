sap.ui.jsview("view.result", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.result
	*/ 
	getControllerName : function() {
		return "view.result";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.result
	*/ 
	createContent : function(oController) {
	
		var main_layout = new sap.m.Page({
			title: "Apriori Example - Step 4/4 - Basket Analysis Result",
		});	
		

		var but_run = new sap.m.Button({
			text: "Run Basket Analysis",
			press: jQuery.proxy(oController.onPressRunBasketAnalysis, oController),
		});

		// Apriori result controls

		var o_prerule = new sap.m.Text({text: "{PRERULE}"});
		var o_postrule = new sap.m.Text({text: "{POSTRULE}"});
		var o_support = new sap.m.Text({text: "{SUPPORT}"});
		var o_confidence = new sap.m.Text({text: "{CONFIDENCE}"});
		var o_lift = new sap.m.Text({text: "{LIFT}"});
		

		var oRow = new sap.m.ColumnListItem();
		oRow.addCell(o_prerule)
			.addCell(o_postrule)
			.addCell(o_support)
			.addCell(o_confidence)
			.addCell(o_lift);

		var tab_result = new sap.m.Table("tab_result", {
			columns : [ 
				new sap.m.Column({
					header : new sap.m.Label({
						text : "Pre Rule",
					}),
				}),

				new sap.m.Column({
					header : new sap.m.Label({
						text : "Post Rule",
					}),
				}),
				
				new sap.m.Column({
					header : new sap.m.Label({
						text : "Support",
					}),
				}),
				
				new sap.m.Column({
					header : new sap.m.Label({
						text : "Confidence",
					}),
				}),

				new sap.m.Column({
					header : new sap.m.Label({
						text : "Lift",
					}),
				}),

			],

		});
	
		tab_result.bindItems(
			"/Result",
			 oRow,
			 new sap.ui.model.Sorter("LIFT", true)
			 );

		
// Navigation
		var lay_navigation = new sap.ui.commons.layout.HorizontalLayout();

		lay_navigation.addContent(new sap.m.Button({
				text: "Back",
				press: jQuery.proxy(oController.onPressBack,this),
			})
		);

		lay_navigation.addContent(new sap.m.Button({
				text: "Go",
				press: jQuery.proxy(oController.onPressNext,this),
			})
		);

// build view
	 	main_layout.addContent(but_run);
		main_layout.addContent(tab_result);
		main_layout.addContent(lay_navigation);
		
		return main_layout;

	},
		
});
