var util = require('util');

var bleno = require('../..');
var BlenoCharacteristic = bleno.Characteristic;
var BlenoDescriptor = bleno.Descriptor;

function HardwareRevisionCharacteristic(hardware) {
  HardwareRevisionCharacteristic.super_.call(this, {
    uuid: '2a27',
    properties: ['read'],
    value: new Buffer(hardware.revisionNumber),
    descriptors: [
      new BlenoDescriptor({
        uuid: '2901',
        value: 'hardware version'
      })
    ]
  });

  this.hardware = hardware;
}

util.inherits(HardwareRevisionCharacteristic, BlenoCharacteristic);

//HardwareRevisionCharacteristic.prototype.onReadRequest = function(offset, callback) {
//    if (offset) {
//    callback(this.RESULT_ATTR_NOT_LONG, null);
//  } else {
//    this.blink1.version(function(version) {
//      callback(this.RESULT_SUCCESS, new Buffer(version));
//    }.bind(this));
//  }
//};

module.exports = HardwareRevisionCharacteristic;
