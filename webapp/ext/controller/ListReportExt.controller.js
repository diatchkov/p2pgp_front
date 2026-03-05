sap.ui.define([
	"sap/ui/core/mvc/ControllerExtension",
	"sap/ui/core/message/MessageType"
], function (ControllerExtension, MessageType) {
	'use strict';

	let _extensionAPI = null;

	return ControllerExtension.extend('ae.emsteel.asas.p2pgp.ext.controller.ListReportExt', {
		override: {
			routing: {
				onAfterBinding: function (oBinding, mParameters) {
					_extensionAPI = this.base.getExtensionAPI();
					
					window._extensionAPI = _extensionAPI; 

					const sWBID = localStorage.getItem("WBID");

					_extensionAPI.setCustomMessage(oMessage);
					if (sWBID) {
						var oMessage = {
							message: "Weighbridge ID is set to: " + sWBID,
							type: MessageType.Success
						}
					} else {
						oMessage = {
							message: "No Weighbridge ID set. Please Set Weighbridge ID.",
							type: MessageType.Warning
						}
					}

					_extensionAPI.setCustomMessage(oMessage);
				}
			}
		}
	});
});
