sap.ui.jsview("upload.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf upload.main
	*/ 
	getControllerName : function() {
		return "upload.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf upload.main
	*/ 
	createContent : function(oController) {
//		return new sap.ui.commons.TextView({
//			text: "Hello"
//		});
		
		var layout = new sap.ui.commons.layout.HorizontalLayout();

		layout.addContent(new sap.ui.commons.FileUploader({
			name : "fup_data",
			uploadUrl: "../../../people_file_upload.xsjs", // WebContent << Project Root << ui
			change : oController.onFileChanged,
			uploadComplete : oController.onUploadComplete,
		}));

		layout.addContent(new sap.ui.commons.Button({
			text : "Upload",
			tooltip : "Upload data",
			press : function() {
				fup_data.upload();
			}
		}));
		
		layout.addContent(new sap.ui.commons.TextView({
			text: "Server response",
			design: sap.ui.commons.TextViewDesign.Bold
		}));

		return layout;
	}

});
