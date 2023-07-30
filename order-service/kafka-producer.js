const kafka = require('kafka-node');
const config = require('./config');

const client = new kafka.KafkaClient({ kafkaHost: config.kafka_server });
const producer = new kafka.Producer(client);

producer.on('ready', () => {
  console.log('Kafka Producer is connected and ready.');
});

producer.on('error', (error) => {
  console.error(`Error in Kafka Producer: ${error}`);
});

function publishToKafka(topic, message) {
  const payloads = [
    {
      topic: topic,
      messages: JSON.stringify(message)
    }
  ];

  producer.send(payloads, (error, data) => {
    if (error) {
      console.error(`Error publishing message to Kafka: ${error}`);
    } else {
      console.log(`Message published to Kafka: ${JSON.stringify(data)}`);
    }
  });
}

module.exports = {
  publishToKafka
};
