sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function() {
            QUnit.module("First journey");

            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();

                Then.onTheZC_P2P_INBGATEPASSList.iSeeThisPage();

            });


            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                
                When.onTheZC_P2P_INBGATEPASSList.onFilterBar().iExecuteSearch();
                
                Then.onTheZC_P2P_INBGATEPASSList.onTable().iCheckRows();

                When.onTheZC_P2P_INBGATEPASSList.onTable().iPressRow(0);
                Then.onTheZC_P2P_INBGATEPASSObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) { 
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});