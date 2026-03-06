sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        get: async function (oEvent) {
            var oContext = this.getBindingContext();
            var oModel = oEvent.getModel();
            var sWBID = localStorage.getItem("WBID");

            var result = await this.getEditFlow().invokeAction("com.sap.gateway.srvd.zp2p_ui_gp.v0001.GetWBGrossWeight", {
                contexts: oContext,
                model: oModel,
                skipParameterDialog: true,
                parameterValues: [
                    { name: "WBID", value: sWBID } 
                ]
            });
        }
    };
});
