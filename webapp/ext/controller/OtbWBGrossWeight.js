sap.ui.define([
    "ae/emsteel/asas/p2pgp/utils/common"
], function(Common) {
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
        },

        isEnabled: function (oBindingContext, aSelectedContexts) {
            return Common.isEnabled(oBindingContext, aSelectedContexts, "__OperationControl/GetWBGrossWeight");
        }
    };
});
