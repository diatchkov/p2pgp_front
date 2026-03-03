sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ae.emsteel.asas.p2pgp',
            componentId: 'ZC_P2P_INBGATEPASSITEMObjectPage',
            contextPath: '/ZC_P2P_INBGATEPASS/_Item'
        },
        CustomPageDefinitions
    );
});