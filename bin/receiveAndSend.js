var amqp = require('amqp');

var connection = amqp.createConnection({host:'localhost'});

var connection2 = amqp.createConnection({host:'10.20.20.153'});

c=0;

connection.on('ready', function()
{
        queueTMS = connection.queue('TMS', {autoDelete:false}, function(queue)
        {
                console.log('TMS Queue has been created');

                connection2.on('ready', function()
                {

                        queue.subscribe(function(msg)
                        {
                                c+=1;
                                connection2.publish('TMS', msg);
                                //console.log('Got msg # ' + c + '! Sending back                                                              ');
                        });
                });
        });
});