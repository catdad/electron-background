/* jshint node: true, esnext: true */

const { spawn } = require('child_process');
const importFrom = require('import-from');
const electron = importFrom(process.cwd(), 'electron');

module.exports = (args) => {
  spawn(electron, args, {
    detached: true,
    stdio: 'ignore'
  });
};
