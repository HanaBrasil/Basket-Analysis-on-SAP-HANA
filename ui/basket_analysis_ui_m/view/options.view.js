sap.ui.jsview("view.options", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.options
	*/ 
	getControllerName : function() {
		return "view.options";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.options
	*/ 
	createContent : function(oController) {
	
		var main_layout = new sap.m.Page({
			title: "Apriori Example - Step 3/4 - Apriori Options",
		});		

		var layout_options = new sap.ui.commons.layout.MatrixLayout({
			hAlign: sap.ui.commons.layout.HAlign.Center,
			width: "100%",
			columns: 3,
			rows: 
				[
					new sap.ui.commons.layout.MatrixLayoutRow({
						cells: [
							new sap.ui.commons.layout.MatrixLayoutCell({
								hAlign: sap.ui.commons.layout.HAlign.Center,
								content: [
									new sap.m.Label({
										text: "Minimum Support",
									}),
								]
							}),
							
							new sap.ui.commons.layout.MatrixLayoutCell({
								hAlign: sap.ui.commons.layout.HAlign.Center,
								content: [
									new sap.m.Slider(oController.name_support_slider,{
										min: 0,
										max: 1,
										value: 0.10,
										step: 0.01,
										liveChange: jQuery.proxy(oController.onLiveChange,oController),
									}),
									
								]
							}),

							new sap.ui.commons.layout.MatrixLayoutCell({
								hAlign: sap.ui.commons.layout.HAlign.Center,
								content: [
									new sap.m.Label(oController.name_support_value_holder, {
										text: "0.1",
									}),
								]
							}),

						],
					}),

					new sap.ui.commons.layout.MatrixLayoutRow({
						cells: [
							new sap.ui.commons.layout.MatrixLayoutCell({
								hAlign: sap.ui.commons.layout.HAlign.Center,
								content: [
									new sap.m.Label({
										text: "Minimum Confidence",
									}),
								]
							}),
							
							new sap.ui.commons.layout.MatrixLayoutCell({
								hAlign: sap.ui.commons.layout.HAlign.Center,
								content: [
									new sap.m.Slider(oController.name_confidence_slider,{
										min: 0,
										max: 1,
										value: 0.30,
										step: 0.01,
										liveChange: jQuery.proxy(oController.onLiveChange,oController),
									}),
								]
							}),

							new sap.ui.commons.layout.MatrixLayoutCell({
								hAlign: sap.ui.commons.layout.HAlign.Center,
								content: [
									new sap.m.Label(oController.name_confidence_value_holder, {
										text: "0.30",
									}),
								]
							}),

							

						],
					}),

					new sap.ui.commons.layout.MatrixLayoutRow({
						cells: [
							new sap.ui.commons.layout.MatrixLayoutCell({
								hAlign: sap.ui.commons.layout.HAlign.Center,
								content: [
									new sap.m.Label({
										text: "Minimum Lift",
									}),
								]
							}),
							
							new sap.ui.commons.layout.MatrixLayoutCell({
								hAlign: sap.ui.commons.layout.HAlign.Center,
								content: [
									new sap.m.Slider(oController.name_lift_slider,{
										min: 0,
										max: 10,
										value: 0.8,
										step: 0.01,
										liveChange: jQuery.proxy(oController.onLiveChange,oController),
									}),
								]
							}),

							new sap.ui.commons.layout.MatrixLayoutCell({
								hAlign: sap.ui.commons.layout.HAlign.Center,
								content: [
									new sap.m.Label(oController.name_lift_value_holder, {
										text: "0.8",
									}),
								]
							}),

							

						],
					}),
		
					new sap.ui.commons.layout.MatrixLayoutRow({
						cells: [
							new sap.ui.commons.layout.MatrixLayoutCell({
								hAlign: sap.ui.commons.layout.HAlign.Center,
								colSpan: 3,
								content: [
									new sap.ui.commons.CheckBox({
										text: "Export PMML?"
									}),
								]
							})
							

						],
					}),
					
					new sap.ui.commons.layout.MatrixLayoutRow({
						cells: [
							new sap.ui.commons.layout.MatrixLayoutCell({
								hAlign: sap.ui.commons.layout.HAlign.Center,
								colSpan: 3,
								content: [
									new sap.m.Button({
										text: "Save",
										press: jQuery.proxy(oController.onPressSave, oController),
									}),
								]
							})
							

						],
					}),

				],

		});

		
			

		// Apriori control		

		var o_name = new sap.m.Text({text: "{NAME}"});
		var o_intargs = new sap.m.Text({text: "{INTARGS}"});
		var o_doubleargs = new sap.m.Text({text: "{DOUBLEARGS}"});
		var o_stringargs = new sap.m.Text({text: "{STRINGARGS}"});
		

		var oRow = new sap.m.ColumnListItem();
		oRow.addCell(o_name)
			.addCell(o_intargs)
			.addCell(o_doubleargs)
			.addCell(o_stringargs);

		var tab_control = new sap.m.Table("tab_control", {
			columns : [ 
				new sap.m.Column({
					header : new sap.m.Label({
						text : "Header",
					}),
				}),

				new sap.m.Column({
					header : new sap.m.Label({
						text : "Int Args",
					}),
				}),
				
				new sap.m.Column({
					header : new sap.m.Label({
						text : "Double Args",
					}),
				}),
				
				new sap.m.Column({
					header : new sap.m.Label({
						text : "String Args",
					}),
				}),


			],

		});
	
		tab_control.bindItems("/Control", oRow);
		

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

		
// Building view
		main_layout.addContent(layout_options);
		main_layout.addContent(tab_control);
		main_layout.addContent(lay_navigation);


		return main_layout;

	},
		
});
