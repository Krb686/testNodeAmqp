var amqp = require('amqp');
var nanoTimer = require('../lib/nanoTimer.js').nanoTimer;

var connectionLocal = amqp.createConnection({host: 'localhost'});

var c = 0;


connectionLocal.on('ready', function()
{
  queueTMS = connectionLocal.queue('TMS', {autoDelete: false}, function(queue)
  {
    console.log('TMS Queue has been created');
	
      queue.subscribe(function(msg)
      {
        c+=1;
        //var date = new Date(msg.data);
      });
      
      nanoTimer.setInterval(function()
      {
    	  console.log(c + ' msg/s');
    	  c = 0;
      }, 1000000000);

    });
});
