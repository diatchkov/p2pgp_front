sap.ui.define([
    "sap/m/PDFViewer",
], function(PDFViewer) {
    "use strict";
    
    return {
        /**
         * Opens a PDF from a base64 encoded string
         * @param {object} oPDF - PDF data object
         * @param {string} oPDF.MimeCont - Base64 encoded PDF content
         * @param {string} oPDF.MimeType - MIME type (e.g., "application/pdf")
         * @param {string} oPDF.FileName - File name for the PDF
         * @returns {object} PDF viewer instance
         */
        openPDFFromBase64: function(oPDF) {
            if (!oPDF || !oPDF.MimeCont) {
                return null;
            }
            
            try {
                var base64EncodedPDF = oPDF.MimeCont;
                var decodedPdfContent = atob(base64EncodedPDF);
                var byteArray = new Uint8Array(decodedPdfContent.length);

                for (var i = 0; i < decodedPdfContent.length; i++) {
                    byteArray[i] = decodedPdfContent.charCodeAt(i);
                }

                var blob = new Blob([byteArray.buffer], { type: oPDF.MimeType || "application/pdf" });
                var oPDFUrl = URL.createObjectURL(blob);

                var oPDFViewer = new PDFViewer();
                oPDFViewer.setSource(oPDFUrl);
                oPDFViewer.setTitle(oPDF.FileName || "Document");
                oPDFViewer.open();
                
                return oPDFViewer;
            } catch (error) {
                console.error("PDF Error:", error);
                return null;
            }
        },

        isEnabled: function (oBindingContext, aSelectedContexts, sProperty) {
            if (!oBindingContext) return false; 

            var isEnabled = oBindingContext.getProperty(sProperty);
            
            return (isEnabled === undefined) ? false : isEnabled;
        }        
    };
});