var util = require('util');

var bleno = require('../..');

var BlenoCharacteristic = bleno.Characteristic;
var BlenoDescriptor = bleno.Descriptor;

function SerialNumberCharacteristic(hardware) {
  SerialNumberCharacteristic.super_.call(this, {
    uuid: '2a25',
    properties: ['read'],
    value: new Buffer(hardware.serialNumber),
    descriptors: [
      new BlenoDescriptor({
        uuid: '2901',
        value: 'Veracity serial number'
      })
    ]
  });
}

util.inherits(SerialNumberCharacteristic, BlenoCharacteristic);

module.exports = SerialNumberCharacteristic;
