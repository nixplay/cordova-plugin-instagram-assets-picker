//
//  InstagramAssetsPicker.js
//
//  Created by Ross Martin on 2-25-2016

var exec = require('cordova/exec');
var pluginName = 'InstagramAssetsPicker';

function InstagramAssetsPicker() {}

InstagramAssetsPicker.prototype.getMedia = function(win, fail, opts) {
  exec(win, fail, pluginName, 'getMedia', [opts]);
};

InstagramAssetsPicker.prototype.cropAsset = function(win, fail, opts) {
  exec(win, fail, pluginName, 'cropAsset', [opts]);
};

module.exports = new InstagramAssetsPicker();
