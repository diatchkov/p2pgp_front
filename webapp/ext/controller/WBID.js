sap.ui.define([
    "sap/ui/core/Fragment",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/message/MessageType"
], function(Fragment, MessageToast, JSONModel, MessageType) {
    'use strict';

    let _oDialog = null;
    let _oView   = null;

    const oController = {

        set: function( ) { 
            _oView = this.getEditFlow( ).getView( );
            const oModel = _oView.getModel();

            const oListBinding = oModel.bindList("/ZC_P2P_WB_DEVICEVH", null, [], [], {
                $select: "DeviceID"
            });

            oListBinding.requestContexts(0, 100).then(function(aContexts) {

                const aItems = aContexts.map(function(oCtx) {
                    return oCtx.getObject();
                });

                if (!aItems.length) {
                    return;
                }

                _openDialog(aItems);

            }).catch(function(oError) {
                console.error("Weighbridge ID OData read error:", oError);
            });
        },

        onWBIDConfirm: function() {
            const oList     = _oDialog.getContent()[0];
            const oSelected = oList.getSelectedItem();

            if (!oSelected) {
                MessageToast.show("Please select a value first.");
                return;
            }

            const oData  = oSelected.getBindingContext("wbidModel").getObject();
            const sWBID  = oData.DeviceID;

            localStorage.setItem("WBID", sWBID);

            var oMessage = {
				message: "Weighbridge ID is set to: " + sWBID,
				type: MessageType.Success
			}

            MessageToast.show(oMessage.message);
            _oDialog.close();

            if (window._extensionAPI) {
                window._extensionAPI.setCustomMessage(oMessage);
            }

        },

        onWBIDCancel: function() {
            _oDialog.close();
        }

    };

    function _openDialog(aItems) {

        const oJsonModel = new JSONModel({ items: aItems });

        if (_oDialog) {
            _oDialog.setModel(oJsonModel, "wbidModel");
            _oDialog.open();
            return;
        }

        Fragment.load({
            id:         "WBID",
            name:       "ae.emsteel.asas.p2pgp.ext.fragment.WBID",
            controller: oController
        }).then(function(oDialog) {
            _oDialog = oDialog;
            _oDialog.setModel(oJsonModel, "wbidModel");

            _oView.addDependent(_oDialog);

            _oDialog.open();

        }).catch(function(oError) {
            console.error("Fragment.load error:", oError);
        });
    }

    return oController;
});