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
		
		// Apriori result controls

		var tab_result = new sap.ui.table.Table("tab_result", {
			title : "Apriori Result",
			selectionMode : sap.ui.table.SelectionMode.Single,

			columns : [ new sap.ui.table.Column({
				name : "Prerule",
				label : new sap.ui.commons.TextView({
					text : "Prerule",
				}),
				template : new sap.ui.commons.TextView({
					text : "{PRERULE}",
				}),
			}),
			new sap.ui.table.Column({
				name : "Postrule",
				label : new sap.ui.commons.TextView({
					text : "Postrule",
				}),
				template : new sap.ui.commons.TextView({
					text : "{POSTRULE}",
				}),
			}),
			new sap.ui.table.Column({
				name : "Support",
				label : new sap.ui.commons.TextView({
					text : "Support",
				}),
				template : new sap.ui.commons.TextView({
					text : "{SUPPORT}",
				}),
			}),
			new sap.ui.table.Column({
				name : "Confidence",
				label : new sap.ui.commons.TextView({
					text : "Confidence",
				}),
				template : new sap.ui.commons.TextView({
					text : "{CONFIDENCE}",
				}),
			}),
			new sap.ui.table.Column({
				name : "Lift",
				label : new sap.ui.commons.TextView({
					text : "Lift",
				}),
				template : new sap.ui.commons.TextView({
					text : "{LIFT}",
				}),
			}),

			
			],

		});
	
		tab_result.setModel(oController.model);
		tab_result.bindRows("/Result");

		main_layout.addContent(tab_result);

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


		main_layout.addContent(lay_navigation);
		
		return main_layout;

	},
		
});
