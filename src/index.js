import sketch from 'sketch/dom';
import UI from 'sketch/ui';
import WebUI from 'sketch-module-web-view';
import BrowserWindow from 'sketch-module-web-view';
import SvgInsert from './plugins/svg-insert';

const Panel = 'http://soft.gtdreamlife.com/sketch-bizcharts/';
// const Panel = `http://localhost:8000#${Math.random()}`;

export default context => {
    const options = {
        identifier: 'unique.id.1',
        width: 1020,
        height: 626,
        show: true,
    };

    var browserWindow = new BrowserWindow(options);

    const webContents = browserWindow.webContents;

    // add a handler for a call from web content's javascript
    webContents.on('JsBridge_InsertSvg', data => {
        const json = JSON.parse(data);
        const { svg, config, layerTitle } = json;
        SvgInsert(context, json, webContents);
        browserWindow.close();
    });

    webContents.on('JsBridge_CloseWebview', () => {
        browserWindow.close();
    });

    browserWindow.loadURL(Panel);
};
