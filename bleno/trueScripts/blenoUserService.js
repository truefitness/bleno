var util = require('util');
var bleno = require('../index');

var BlenoPrimaryService = bleno.PrimaryService;
var BlenoCharacteristic = bleno.Characteristic;
var BlenoDescriptor = bleno.Descriptor;


var WeightCharacteristic = function() {
    WeightCharacteristic.super_.call(this,
                                     { uuid: '9dc17013-8855-11e3-979a-78acc0b87777',
                                         properties: ['read'],
                                         value: new Buffer('185'),
                                         descriptors:
                                             [new BlenoDescriptor(
                                                  { uuid: '2901',
                                                      value: 'Weight'})]
                                     });
};
util.inherits(WeightCharacteristic, BlenoCharacteristic);

var AgeCharacteristic = function() {
    AgeCharacteristic.super_.call(this,
                                  {uuid: '9dc17023-8855-11e3-979a-78acc0b87777',
                                      properties: ['read'],
                                      value: new Buffer('49'),
                                      descriptors:
                                          [ new BlenoDescriptor(
                                               {uuid: '2901',
                                                   value: 'Age'})]
                                  });
};
util.inherits(AgeCharacteristic, BlenoCharacteristic);

// Not sure about using strings in char.values

var GenderCharacteristic = function() {
    GenderCharacteristic.super_.call(this,
                                     { uuid: '9dc17033-8855-11e3-979a-78acc0b87777',
                                         properties: ['read'],
                                         value: new Buffer('5'),
                                         descriptors:
                                             [new BlenoDescriptor(
                                                  {uuid: '2901',
                                                      value: 'Gender'})]
                                     });
};
util.inherits(GenderCharacteristic, BlenoCharacteristic);



function UserService() {
    UserService.super_.call(this,
                            {uuid: '9dc17003-8855-11e3-979a-78acc0b87777',
                                characteristics:
                                    [new WeightCharacteristic(),
                                     new AgeCharacteristic(),
                                     new GenderCharacteristic()]
                            });}
util.inherits(UserService, BlenoPrimaryService);

module.exports =UserService;
