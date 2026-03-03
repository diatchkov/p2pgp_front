sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ae.emsteel.asas.p2pgp',
            componentId: 'ZC_P2P_INBGATEPASSList',
            contextPath: '/ZC_P2P_INBGATEPASS'
        },
        CustomPageDefinitions
    );
});