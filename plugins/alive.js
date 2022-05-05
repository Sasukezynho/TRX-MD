const {Module} = require('../main')
const {MODE,ALIVE} = require('../config');
const {parseAlive} = require('./misc/misc');
let w = MODE=='public'?false:true
Module({pattern: 'panel', fromMe: w, desc: 'Get Commands'}, (async (message, match) => {
const templateButtons = [
  {index: 1, urlButton: {displayText: 'Github', url: 'https://github.com/COOlpamod/TRX-MD'}},
  {index: 2, quickReplyButton: {displayText: '❤️', id: 'mdmenu'}},
  {index: 3, quickReplyButton: {displayText: '👍', id: 'mdcmd'}}
]

const buttonMessage = {
    text: `Hello ${message.data.pushName} .)`,
    footer: 'TRX-MD',
    templateButtons: templateButtons
}

await message.client.sendMessage(message.jid, buttonMessage)
}))
Module({on: 'button', fromMe: w, desc: 'Is bot alive?'}, (async (message, match) => {
if (message.tembutton === 'mdcmd') await message.sendReply('👀');
	if (message.tembutton === 'mdmenu') await message.sendReply('👀')
 
}))
Module({pattern: 'alive', fromMe: w, desc: 'Is bot alive?'}, (async (message, match) => {
await parseAlive(message,ALIVE)
 }))
Module({pattern: 'logm', fromMe: w, desc: 'Is bot alive?'}, (async (message, match) => {
await message.client.sendMessage(message.jid, { text: JSON.stringify(message.client.chats) },{ quoted: message.data })
 }))
Module({pattern: 'ping', fromMe: w, desc: 'Measures ping'}, (async (message, match) => {
const start = new Date().getTime()
		await message.client.sendMessage(message.jid, { text: '_Ping!_' })
                const end = new Date().getTime()
		await message.client.sendMessage(message.jid, { text: '*_Pong!_*\n ```' + (end - start) + '``` *_ms_*'},{ quoted: message.data })
}));
