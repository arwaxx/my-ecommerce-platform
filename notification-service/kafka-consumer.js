const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });

const consumer = new Consumer(
  client,
  [{ topic: 'orders', partition: 0 }],
  {
    autoCommit: true,
    fetchMaxWaitMs: 1000,
    fetchMaxBytes: 1024 * 1024,
    encoding: 'utf8',
  }
);

consumer.on('message', function (message) {
  console.log('Received message:', message.value);
  // process the incoming event here
});

consumer.on('error', function (err) {
  console.log('Error:', err);
});
