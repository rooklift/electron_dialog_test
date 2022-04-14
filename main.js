"use strict";

const electron = require("electron");
const path = require("path");

let win;

electron.app.whenReady().then(() => {

	win = new electron.BrowserWindow();
	win.loadFile(path.join(__dirname, "renderer.html"));

	win.once("ready-to-show", () => {

		setTimeout(() => {
			electron.dialog.showMessageBox({message: "Dialog 1", title: "Dialog 1", buttons: ["OK"]});
			electron.dialog.showMessageBox({message: "Dialog 2", title: "Dialog 2", buttons: ["OK"]});
		}, 5000);

		setTimeout(() => {
			electron.dialog.showMessageBox({message: "Dialog 3", title: "Dialog 3", buttons: ["OK"]});
			electron.dialog.showMessageBox({message: "Dialog 4", title: "Dialog 4", buttons: ["OK"]});
		}, 10000);

		// My observation: Dialog 1, 3, and 4 get displayed, but 2 does not.

	});

});
