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
	
		
		var main_layout = new sap.ui.commons.layout.VerticalLayout({
			content: 
				[
					new sap.ui.layout.form.Form({
						title: new sap.ui.core.Title({
							text: "Apriori Example - Step 3/4 - Apriori Options",
						}),

						layout: new sap.ui.layout.form.GridLayout({
							singleColumn: true,
						}),

					}),
				],
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
										value: 0.2,
										step: 0.01,
										liveChange: jQuery.proxy(oController.onLiveChange,oController),
									}),
									
								]
							}),

							new sap.ui.commons.layout.MatrixLayoutCell({
								hAlign: sap.ui.commons.layout.HAlign.Center,
								content: [
									new sap.m.Label(oController.name_support_value_holder, {
										text: "0.2",
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
										value: 0.2,
										step: 0.01,
										liveChange: jQuery.proxy(oController.onLiveChange,oController),
									}),
								]
							}),

							new sap.ui.commons.layout.MatrixLayoutCell({
								hAlign: sap.ui.commons.layout.HAlign.Center,
								content: [
									new sap.m.Label(oController.name_confidence_value_holder, {
										text: "0.2",
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
										value: 2,
										step: 0.5,
										liveChange: jQuery.proxy(oController.onLiveChange,oController),
									}),
								]
							}),

							new sap.ui.commons.layout.MatrixLayoutCell({
								hAlign: sap.ui.commons.layout.HAlign.Center,
								content: [
									new sap.m.Label(oController.name_lift_value_holder, {
										text: "2",
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
									new sap.ui.commons.Button({
										text: "Save"
									}),
								]
							})
							

						],
					}),

				],

		});

		main_layout.addContent(layout_options);
			

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
		

		main_layout.addContent(tab_control);


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
