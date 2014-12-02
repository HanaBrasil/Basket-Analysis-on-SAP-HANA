sap.ui.jsview("view.file_input", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.file_input
	*/ 
	getControllerName : function() {
		return "view.file_input";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.file_input
	*/ 
	createContent : function(oController) {
	
	var main_layout = new sap.ui.commons.layout.VerticalLayout();


	// Form
		var oLayout1 = new sap.ui.layout.form.GridLayout({
			singleColumn: true,
		});
	    var oLayout2 = new sap.ui.layout.form.ResponsiveLayout();
	    // var oLayout3 = new sap.ui.layout.form.ResponsiveGridLayout();

		var lay_form = new sap.ui.layout.form.Form({
			title: new sap.ui.core.Title({
				text: "Apriori Example - Step 2/4 - File Input",
			}),

			layout: oLayout1,
			
			formContainers: 
				[
					new sap.ui.layout.form.FormContainer({
						title: "Import file",
						formElements:
							[
								new sap.ui.layout.form.FormElement({
									label: "File path",
									fields: 
										[
											new sap.ui.layout.VerticalLayout({
												content: [
													// new sap.ui.commons.FileUploader("fup_csv", {
														// name : "fup_csv",
														// 	// uploadUrl: oController.uploadUrl,
														// 	// change : oController.onFileChanged,
														// 	// uploadComplete : jQuery.proxy(oController.onUploadComplete,oController),
														// }),

													new sap.ui.unified.FileUploader("fup_csv",{
														buttonText: "Upload",
														uploadOnChange: false,
														sendXHR : true,
														uploadUrl: oController.uploadUrl,
														uploadComplete: jQuery.proxy(oController.onUploadComplete,oController),
														change: function(oControlEvent){
															this.upload();
														},
													}),

													new sap.ui.commons.CheckBox({
														checked: true,
														name: "chk_header",
														text: "File contains header",
													}),

													new sap.m.Button({
														text: "Reset",
														press : jQuery.proxy(oController.onPressReset,oController),
													}),

													]
											}),
											
										],
								}),
								
							]
					}),

				]

		});


// Uploaded Data Controls 
		
		// row template

		// cells
		var o_header = new sap.m.Text({text: "{HEADER_ID}"});
		var o_item = new sap.m.Text({text: "{ITEM_ID}"});
		

		var oRow = new sap.m.ColumnListItem();
		oRow.addCell(o_header).addCell(o_item);

		var tab_data = new sap.m.Table("tab_data", {
			fixedLayout : true,
			columns : [ 
				new sap.m.Column({
					header : new sap.m.Label({
						text : "Header",
					}),
				}),

				new sap.m.Column({
					header : new sap.m.Label({
						text : "Item",
					}),
				}),

			],

		});
	
		tab_data.bindItems("/HeaderItem", oRow);

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
		main_layout.addContent(lay_form);
		main_layout.addContent(tab_data);
		main_layout.addContent(lay_navigation);

		return main_layout;

	},
		
});
