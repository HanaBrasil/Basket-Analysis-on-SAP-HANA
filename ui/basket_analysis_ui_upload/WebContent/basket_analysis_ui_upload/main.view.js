sap.ui.jsview("basket_analysis_ui_upload.main", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf upload.main
	 */
	getControllerName : function() {
		return "basket_analysis_ui_upload.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf upload.main
	 */
	createContent : function(oController) {
		//		return new sap.ui.commons.TextView({
		//			text: "Hello"
		//		});
		//		
		
		var main_layout = new sap.ui.commons.layout.VerticalLayout();
		
		
		// Upload controls
		var layout_upload = new sap.ui.commons.layout.HorizontalLayout();

		var fup_csv = new sap.ui.commons.FileUploader("fup_csv", {
			name : "fup_csv",
			uploadUrl: oController.uploadUrl,
			change : oController.onFileChanged,
			uploadComplete : jQuery.proxy(oController.onUploadComplete,oController),
		});

		layout_upload.addContent(fup_csv);

		layout_upload.addContent(new sap.ui.commons.Button({
			text : "Upload",
			tooltip : "Upload data",
			press : jQuery.proxy(oController.onPressUpload,oController),
		}));
		
		layout_upload.addContent(new sap.ui.commons.Button({
			text : "Reset",
			tooltip : "Reset data",
			press : jQuery.proxy(oController.onPressReset,oController),
		}));
		
		layout_upload.addContent(new sap.ui.commons.Button({
			text : "Run Basket Analysis",
			tooltip : "Run Basket Analysis",
			press : jQuery.proxy(oController.onPressRunBasketAnalysis,oController),
		}));

		layout_upload.addContent(new sap.ui.commons.TextView("txv_response", {
			text : "Server response",
			design : sap.ui.commons.TextViewDesign.Bold
		}));
		
		// Uploaded Data Controls 
		var tab_data = new sap.ui.table.Table("tab_data", {
			title : "Uploaded Data",
			selectionMode : sap.ui.table.SelectionMode.Single,

			columns : [ new sap.ui.table.Column({
				name : "Header",
				label : new sap.ui.commons.TextView({
					text : "Header",
				}),
				template : new sap.ui.commons.TextView({
					text : "{HEADER_ID}",
				}),
			}),

			new sap.ui.table.Column({
				name : "Item",
				label : new sap.ui.commons.TextView({
					text : "Item",
				}),
				template : new sap.ui.commons.TextView({
					text : "{ITEM_ID}",
				}),
			}),

			],

		});
	
		tab_data.setModel(oController.model);
		tab_data.bindRows("/HeaderItem");
		
		
		// Apriori control		
		var tab_control = new sap.ui.table.Table("tab_control", {
			title : "Apriori Control Data (parameters)",
			selectionMode : sap.ui.table.SelectionMode.Single,

			columns : [ new sap.ui.table.Column({
				name : "Name",
				label : new sap.ui.commons.TextView({
					text : "Name",
				}),
				template : new sap.ui.commons.TextView({
					text : "{NAME}",
				}),
			}),
			new sap.ui.table.Column({
				name : "Int_Args",
				label : new sap.ui.commons.TextView({
					text : "Int Args",
				}),
				template : new sap.ui.commons.TextView({
					text : "{INTARGS}",
				}),
			}),
			new sap.ui.table.Column({
				name : "Double_Args",
				label : new sap.ui.commons.TextView({
					text : "Double Args",
				}),
				template : new sap.ui.commons.TextView({
					text : "{DOUBLEARGS}",
				}),
			}),
			new sap.ui.table.Column({
				name : "String_Args",
				label : new sap.ui.commons.TextView({
					text : "String Args",
				}),
				template : new sap.ui.commons.TextView({
					text : "{STRINGARGS}",
				}),
			}),

			],

		});
	
		tab_control.setModel(oController.model);
		tab_control.bindRows("/Control");
		
		
		
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

		
		main_layout.addContent(layout_upload);
		main_layout.addContent(tab_data);
		main_layout.addContent(tab_control);		
		main_layout.addContent(tab_result);
		
		return main_layout;
	}

});
