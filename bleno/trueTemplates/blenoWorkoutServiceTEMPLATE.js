// TEMPLATE
var util = require('util');

var bleno = require('../index');

var BlenoPrimaryService = bleno.PrimaryService;
var BlenoCharacteristic = bleno.Characteristic;
var BlenoDescriptor = bleno.Descriptor;

console.log('workoutStatservice');

var ElapsedTimeCharacteristic = function() {
  ElapsedTimeCharacteristic.super_.call(this, {
   uuid: '9dc17012-8855-11e3-979a-78acc0b87777',
   properties: ['read'],
// REPLACE ElapsedTimeCharacteristic  value: new Buffer('48:55'),
   descriptors: [
    new BlenoDescriptor({
	uuid: '2901',
    value: 'Elapsed Time (min:sec)'
	    })
   ]
  });
};
util.inherits(ElapsedTimeCharacteristic, BlenoCharacteristic);


var CaloriesCharacteristic = function() {
  CaloriesCharacteristic.super_.call(this, {
   uuid: '9dc17022-8855-11e3-979a-78acc0b87777',
   properties: ['read'],
// REPLACE CaloriesCharacteristic value: new Buffer('8943'),
   descriptors: [
    new BlenoDescriptor({
	uuid: '2901',
	value: 'Calories'
	    })
   ]
  });
};
util.inherits(CaloriesCharacteristic, BlenoCharacteristic);

var AvgHeartRateCharacteristic = function() {
  AvgHeartRateCharacteristic.super_.call(this, {
   uuid: '9dc17032-8855-11e3-979a-78acc0b87777',
   properties: ['read'],
// REPLACE AvgHeartRateCharacteristic  value: new Buffer('124'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'HRAvg'
        })
   ]
  });
};
util.inherits(AvgHeartRateCharacteristic, BlenoCharacteristic);


var MaxHeartRateCharacteristic = function() {
  MaxHeartRateCharacteristic.super_.call(this, {
   uuid: '9dc17042-8855-11e3-979a-78acc0b87777',
   properties: ['read'],
// REPLACE MaxHeartRateCharacteristic   value: new Buffer('165'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'HRMax'
        })
   ]
  });
};
util.inherits(MaxHeartRateCharacteristic, BlenoCharacteristic);


var MaxSpeedCharacteristic = function() {
  MaxSpeedCharacteristic.super_.call(this, {
   uuid: '9dc17052-8855-11e3-979a-78acc0b87777',
   properties: ['read'],
// REPLACE MaxSpeedCharacteristic  value: new Buffer('12'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'SpeedMax'
        })
   ]
  });
};
util.inherits(MaxSpeedCharacteristic, BlenoCharacteristic);




var AvgSpeedCharacteristic = function() {
  AvgSpeedCharacteristic.super_.call(this, {
   uuid: '9dc17062-8855-11e3-979a-78acc0b87777',
   properties: ['read'],
// REPLACE AvgSpeedCharacteristic  value: new Buffer('9'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'SpeedAvg'
        })
   ]
  });
};
util.inherits(AvgSpeedCharacteristic, BlenoCharacteristic);

var AvgPaceCharacteristic = function() {
  AvgPaceCharacteristic.super_.call(this, {
   uuid: '9dc17072-8855-11e3-979a-78acc0b87777',
   properties: ['read'],
// REPLACE AvgPaceCharacteristic value: new Buffer('72'),
   descriptors: [
    new BlenoDescriptor({
	uuid: '2901',
    value: 'PaceAvg'
	    })
   ]
  });
};
util.inherits(AvgPaceCharacteristic, BlenoCharacteristic);

var MaxPaceCharacteristic = function() {
  MaxPaceCharacteristic.super_.call(this, {
   uuid: '9dc17082-8855-11e3-979a-78acc0b87777',
   properties: ['read'],
// REPLACE MaxPaceCharacteristic value: new Buffer('93'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'PaceMax'
        })
   ]
  });
};
util.inherits(MaxPaceCharacteristic, BlenoCharacteristic);


var TotalDistance = function() {
  TotalDistance.super_.call(this, {
   uuid: '9dc17092-8855-11e3-979a-78acc0b87777',
   properties: ['read'],
// REPLACE TotalDistance  value: new Buffer('4.5'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'TotalDistance'
        })
   ]
  });
};
util.inherits(TotalDistance, BlenoCharacteristic);

var FitnessScore = function() {
  FitnessScore.super_.call(this, {
   uuid: '9dc170A2-8855-11e3-979a-78acc0b87777',
   properties: ['read'],
// REPLACE FitnessScore  value: new Buffer('2'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'Fitness Score'
        })
   ]
  });
};
util.inherits(FitnessScore, BlenoCharacteristic);

var EquipmentType = function() {
  EquipmentType.super_.call(this, {
   uuid: '9dc170B2-8855-11e3-979a-78acc0b87777',
   properties: ['read'],
// REPLACE EquipmentType  value: new Buffer('Workout'),
   descriptors: [
    new BlenoDescriptor({
    uuid: '2901',
    value: 'EquipmentType'
        })
   ]
  });
};
util.inherits(EquipmentType, BlenoCharacteristic);

function WorkoutStatsService() {
    WorkoutStatsService.super_.call(this, {
                                        uuid: '9dc17002-8855-11e3-979a-78acc0b87777',
                                        characteristics: [
                                                             new ElapsedTimeCharacteristic(),
                                                             new CaloriesCharacteristic(),
                                                             new AvgHeartRateCharacteristic(),
                                                             new MaxHeartRateCharacteristic,
                                                             new AvgSpeedCharacteristic(),
                                                             new MaxSpeedCharacteristic(),
                                                             new AvgPaceCharacteristic(),
                                                             new MaxPaceCharacteristic(),
                                                             new TotalDistance(),
                                                             new FitnessScore(),
                                                             new EquipmentType()
                                                         ]
                                    });
}

util.inherits(WorkoutStatsService, BlenoPrimaryService);

module.exports =WorkoutStatsService;
