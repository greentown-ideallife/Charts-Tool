import UI from 'sketch/ui';
var sketch = require('sketch');
var doc = require('sketch/dom').getSelectedDocument();
var Rectangle = require('sketch/dom').Rectangle;

export default function (context, data, webContents) {
    var document, svgCode, OK, READY_TO_Insert, CANCELLED, NOT_READY;
    const {
        layerTitle = 'chart',
        svg,
        config: { title, subTitle },
    } = data;

    initialise(context);

    userInterfaceLoop();

    function initialise(context) {
        svgCode = '';
        OK = 1000;
        READY_TO_Insert = true;
        CANCELLED = false;
        NOT_READY = null;
    }

    // Keep displaying the user interface until we've either cancelled or clicked search
    function userInterfaceLoop() {
        svgCode = svg;
        if (!svgCode) {
            alert('svg不能为空');
            return;
        }
        doInsertSVG();
    }

    function parentOffsetInArtboard(layer) {
        var offset = { x: 0, y: 0 };
        var parent = layer.parent;
        while (parent.name && parent.type !== 'Artboard') {
            offset.x += parent.frame.x;
            offset.y += parent.frame.y;
            parent = parent.parent;
        }
        return offset;
    }

    function positionInArtboard(layer, x, y) {
        var parentOffset = parentOffsetInArtboard(layer);
        var newFrame = new Rectangle(layer.frame);
        newFrame.x = x - parentOffset.x;
        newFrame.y = y - parentOffset.y;
        layer.frame = newFrame;
    }

    function doInsertSVG() {
        var svgString = NSString.stringWithString(svgCode);
        var svgData = svgString.dataUsingEncoding(NSUTF8StringEncoding);

        var svgImporter = MSSVGImporter.svgImporter();
        svgImporter.prepareToImportFromData(svgData);
        var svgLayer = svgImporter.importAsLayer();

        svgLayer.setName(layerTitle);

        context.document.currentPage().addLayers([svgLayer]);

        var layer = doc.getLayersNamed(layerTitle).pop();
        var canvasView = context.document.contentDrawView();
        var center = canvasView.viewCenterInAbsoluteCoordinatesForViewPort(canvasView.viewPort());
        var shiftX = layer.frame.width / 2;
        var shiftY = layer.frame.height / 2;
        var centerX = center.x - shiftX;
        var centerY = center.y - shiftY;

        positionInArtboard(layer, centerX, centerY);

        layer.adjustToFit();

        context.document.showMessage('🎉 图表插入成功!');
    }

    // Show a small alert dialog
    function alert(message) {
        // Create the dialog
        var alertDialog = COSAlertWindow.new();

        // Add a title, message and button
        alertDialog.setMessageText('SVG Insert - Error');
        alertDialog.setInformativeText(message);
        alertDialog.addButtonWithTitle('OK');

        // And show it
        alertDialog.runModal();
    }
}
