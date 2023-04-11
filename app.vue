<script setup lang="ts">
import { connect } from 'mqtt'

// const { client } = useMqtt()

const client = connect('mqtt://10.50.12.150', {
  host: '10.50.12.150',
  port: 1883,
  protocol: 'mqtt',
})

// client.on('connect', () => {
//   consola.success('Connected')
//   client.subscribe('/weather/#', (err) => {
//     if (err)
//       console.error(err)
//   })
// })

// client.on('message', (topic, message) => {
//   message = message.toString()
//   if (topic.startsWith('/weather')) {
//     const data = JSON.parse(message)
//     const weather = Object.entries(data).filter(([key]) => ['tempCurrent', 'tempMax'].includes(key)).map(([key, value]) => `${key}: ${value}`).join(', ')
//     consola.withTag(topic).info(weather)
//   }
//   else {
//     consola.withTag(topic).log(`${message}`)
//   }
// })
</script>

<template>
  <div />
</template>
