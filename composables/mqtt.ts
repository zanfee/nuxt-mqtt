import { connect } from "mqtt"
import consola from "consola"

consola.withTag

let client = connect('mqtt://10.50.12.150', {
  host: '10.50.12.150',
  port: 1883,
  protocol: 'mqtt',
})

client.on('connect', () => {
  console.log('Connected');
  client.subscribe('/weather/#', (err) => {
    if (err) {
      console.error(err);
    }
  });
});

client.on('message', (topic, message) => {
  message = message.toString();
  if (topic.startsWith('/weather')) {
    const data = JSON.parse(message);
    const weather = Object.entries(data).filter(([key]) => ['tempCurrent', 'tempMax'].includes(key)).map(([key, value]) => `${key}: ${value}`).join(', ');
    consola.withTag(topic).info(weather);
  }
  else {
    consola.withTag(topic).log(`${message}`)
  }
});

export function useMqtt() {
  return { client, connect }
}
