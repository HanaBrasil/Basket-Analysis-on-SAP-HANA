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
													}),

													new sap.ui.commons.CheckBox({
														checked: true,
														name: "chk_header",
														text: "File contains header"
													})
													]
											}),
											
										],
								}),
								
							]
					}),

				]

		});


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
		
		main_layout.addContent(lay_form);
		main_layout.addContent(tab_data);
		main_layout.addContent(
			new sap.m.Button({
				text: "Go",
				press: jQuery.proxy(function(){
					var next = sap.ui.getCore().byId("view_options");
					sap.ui.getCore().byId("main_container").to(next,"flip");
				},this)
			})
		);

		return main_layout;

		
		
		// // Upload controls
		// var layout_upload = new sap.ui.commons.layout.HorizontalLayout();

		// var fup_csv = new sap.ui.commons.FileUploader("fup_csv", {
		// 	name : "fup_csv",
		// 	uploadUrl: oController.uploadUrl,
		// 	change : oController.onFileChanged,
		// 	uploadComplete : jQuery.proxy(oController.onUploadComplete,oController),
		// });

		// layout_upload.addContent(fup_csv);

		// layout_upload.addContent(new sap.ui.commons.Button({
		// 	text : "Upload",
		// 	tooltip : "Upload data",
		// 	press : jQuery.proxy(oController.onPressUpload,oController),
		// }));
		

		// layout_upload.addContent(new sap.ui.commons.TextView("txv_response", {
		// 	text : "Server response",
		// 	design : sap.ui.commons.TextViewDesign.Bold
		// }));
		
		
		
		// return main_layout;
	},
		
});
