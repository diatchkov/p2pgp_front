sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ae/emsteel/asas/p2pgp/test/integration/FirstJourney',
		'ae/emsteel/asas/p2pgp/test/integration/pages/ZC_P2P_INBGATEPASSList',
		'ae/emsteel/asas/p2pgp/test/integration/pages/ZC_P2P_INBGATEPASSObjectPage',
		'ae/emsteel/asas/p2pgp/test/integration/pages/ZC_P2P_INBGATEPASSITEMObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZC_P2P_INBGATEPASSList, ZC_P2P_INBGATEPASSObjectPage, ZC_P2P_INBGATEPASSITEMObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ae/emsteel/asas/p2pgp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZC_P2P_INBGATEPASSList: ZC_P2P_INBGATEPASSList,
					onTheZC_P2P_INBGATEPASSObjectPage: ZC_P2P_INBGATEPASSObjectPage,
					onTheZC_P2P_INBGATEPASSITEMObjectPage: ZC_P2P_INBGATEPASSITEMObjectPage
                }
            },
            opaJourney.run
        );
    }
);