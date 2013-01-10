var amqp = require('amqp');
var nanoTimer = require('../lib/nanoTimer.js').nanoTimer;



var timeTook = nanoTimer.time(function(){
	var i=0;
	var j=0;
	for(i=0;i<1000;i++){
		j++;
	}
});

console.log(timeTook);

var string = 'hello';

var t1 = t2 = '';

var counter = 0;
var total = 0;

var publish = function() {
	
	
	nanoTimer.setInterval(function(){connection.publish('TMS', string);}, 250000);
	nanoTimer.setTimeout(function(){HrTimer.clearInterval();}, 10000000000);
	
	
	
	
	//setInterval(function(){connection.publish('TMS', string);}, 1);
	//setTimeout(function(){nanoTimer.clearInterval();}, 1);
	
};



var connection = amqp.createConnection({host: 'localhost'});



var nanoTime = process.hrtime();
var t1 = nanoTime[0] + nanoTime[1] / 1000000;
var t2 = 0;


connection.on('ready', function()
{
  //Begin generating and sending messages at a rate of 200/s
	
	publish();
	
	/*
	HrTimer.setInterval(function(){
		var hrTime = process.hrtime();
		var sec = hrTime[0];
		var nanoSec = hrTime[1];
		//console.log(nanoSec/1000000000);
		t1 = t2;
		t2 = sec + nanoSec/1000000000;
		var dif = t2 - t1;
		console.log(dif);
		
	}, 1000000000);
	
	*/
	
	
  
	
});



