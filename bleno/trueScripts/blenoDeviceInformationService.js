var util = require('util');

var bleno = require('../..');
var BlenoPrimaryService = bleno.PrimaryService;

var SerialNumberCharacteristic = require('./blenoSerialNumberCharacteristic');
var HardwareRevisionCharacteristic = require('./blenoHardwareRevisionCharacteristic');

var BlenoCharacteristic = bleno.Characteristic;
var BlenoDescriptor = bleno.Descriptor;




var ManufacturererNameCharacteristic = function() {
  ManufacturererNameCharacteristic.super_.call(this, {
   uuid: '2A29',
   properties: ['read'],
   value: new Buffer('True Fitness'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'Manufacturer Name'
        })
   ]
  });
};
util.inherits(ManufacturererNameCharacteristic, BlenoCharacteristic);

var ModelNumberCharacteristic = function() {
  ModelNumberCharacteristic.super_.call(this, {
   uuid: '2A24',
   properties: ['read'],
   value: new Buffer('Veractity XXX'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'Model Number String'
        })
   ]
  });
};
util.inherits(ModelNumberCharacteristic, BlenoCharacteristic);




function DeviceInformationService(hardware) {
  DeviceInformationService.super_.call(this, {
    uuid: '180a',
    characteristics: [
      new ManufacturererNameCharacteristic,
      new ModelNumberCharacteristic,
      new SerialNumberCharacteristic(hardware),
      new HardwareRevisionCharacteristic(hardware)
    ]
  });
}

util.inherits(DeviceInformationService, BlenoPrimaryService);

module.exports = DeviceInformationService;
