var util = require('util');

var bleno = require('../..');
var BlenoPrimaryService = bleno.PrimaryService;



var BlenoCharacteristic = bleno.Characteristic;
var BlenoDescriptor = bleno.Descriptor;



var DeviceNameCharacteristic = function() {
  DeviceNameCharacteristic.super_.call(this, {
   uuid: '2A00',
   properties: ['read'],
   value: new Buffer('Fitness Stats'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'Fitness Stats'
        })
   ]
  });
};
util.inherits(DeviceNameCharacteristic, BlenoCharacteristic);

var DeviceAppearanceCharacteristic = function() {
  DeviceAppearanceCharacteristic.super_.call(this, {
   uuid: '2A01',
   properties: ['read'],
   value: new Buffer('1088'), // Generic Running Walking Sensor
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'Fitness Stats'
        })
   ]
  });
};
util.inherits(DeviceAppearanceCharacteristic, BlenoCharacteristic);



function DeviceNameService(hardware) {
  DeviceNameService.super_.call(this, {
    uuid: '180a',
    characteristics: [
      new ManufacturererNameCharacteristic,
      new ModelNumberCharacteristic
      ]
  });
}

util.inherits(DeviceNameService, BlenoPrimaryService);

module.exports = DeviceNameService;
