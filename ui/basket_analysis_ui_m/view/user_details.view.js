sap.ui.jsview("view.user_details", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.user_details
	*/ 
	getControllerName : function() {
		return "view.user_details";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.user_details
	*/ 
	createContent : function(oController) {

		var oLayout1 = new sap.ui.layout.form.GridLayout({
			// singleColumn: true,
		});

	    // var oLayout2 = new sap.ui.layout.form.ResponsiveLayout();
	    // var oLayout3 = new sap.ui.layout.form.ResponsiveGridLayout();


		var lay_navigation = new sap.ui.commons.layout.HorizontalLayout();
		lay_navigation.addStyleClass("layout_navigation");
		
		lay_navigation.addContent(new sap.m.Button({
				text: "Back",
				press: jQuery.proxy(oController.onPressBack,oController),
			})
		);

		lay_navigation.addContent(new sap.m.Button({
				text: "Go",
				press: jQuery.proxy(oController.onPressNext,oController),
			})
		);

		var lay_form = new sap.ui.layout.form.Form({
			title: new sap.ui.core.Title({
				text: "Apriori Example - Step 1/4 - User Details",
			}),
			layout: oLayout1,
			
			formContainers: 
				[
					new sap.ui.layout.form.FormContainer({
						formElements: 
							[
								new sap.ui.layout.form.FormElement({
									label: "Name",
									fields: 
										[
											// new sap.ui.commons.Label({text:"Name"}),
							                new sap.ui.commons.TextField("txf_name", {
							                	required: true,
							                	value: "Fabio Pagoti",
							                }),
										]
								})
							]
					}),

					new sap.ui.layout.form.FormContainer({
						formElements: 
							[
								new sap.ui.layout.form.FormElement({
									label: "E-mail",
									fields: 
										[
							                new sap.ui.commons.TextField("txf_email", {
							                	required: true,
							                	value: "fabiopagoti@gmail.com",
							                }),
										]
								})
							]
					}),
					
					new sap.ui.layout.form.FormContainer({
						formElements: 
							[
								new sap.ui.layout.form.FormElement({
									fields: 
										[
											lay_navigation
										]
								})
							]
					}),


				],

		});

		return lay_form;
	
	},
		
});
