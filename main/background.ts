import { app } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import api from "../api/index"

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }

  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.
  var express = require("express");
  var expressApp = express();
  const cors = require("cors");

  // const api = require("../api");

  expressApp.use(cors());
  expressApp.use(
    express.urlencoded({
      extended: true,
    })
  );
  expressApp.use(express.json());
  expressApp.use("/api", api);

  // Listen the server
  var listener = expressApp.listen(50323, "0.0.0.0", function () {
    console.log("server is running:" + listener.address().port);
  });
})();

app.on('window-all-closed', () => {
  app.quit();
});
