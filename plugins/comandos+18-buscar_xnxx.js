import axios from 'axios'
import fs from 'fs'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 +18 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 #𝙤𝙣 𝙢𝙤𝙙𝙤𝙝𝙤𝙧𝙣𝙮 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍`
if (!text) throw `${mg}𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙀𝙎𝙏𝘼 𝙈𝘼𝙉𝙀𝙍𝘼\n*${usedPrefix + command} Sexo*`
try {
let apikey = keysxxx[Math.floor(Math.random() * keysxxx.length)]
let res = await axios.get(`https://zenzapis.xyz/searching/xnxx?apikey=${apikey}&query=${text}`)
let json = res.data
let listSerch = []
let teskd = `𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚 𝙡𝙖 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖 | ${args.join(" ")}`
const sections = [{
title: `𝘾𝙊𝙉𝙏𝙀𝙉𝙄𝘿𝙊 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉𝘼𝘿𝙊`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: '𝙀𝙡𝙞𝙟𝙖 𝙮 𝙋𝙧𝙚𝙨𝙞𝙤𝙣𝙚 𝙚𝙣𝙫𝙞𝙖𝙧',
title: " ➤ 𝘾𝙊𝙉𝙏𝙀𝙉𝙄𝘿𝙊 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝘼𝘿𝙊",
buttonText: "➤ 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊",
sections}
for (let i of json.result) {
listSerch.push({title: i.title, description: `⊹ 𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙚 𝘼𝙦𝙪𝙞 𝙥𝙖𝙧𝙖 𝙥𝙤𝙙𝙚𝙧 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙑𝙞𝙙𝙚𝙤`, rowId: `${usedPrefix}xnxxdl ${i.url}`})} 
conn.sendMessage(m.chat, listMessage, { quoted: m })
} catch (e) {
m.reply(`${fg}𝙉𝙊 𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙊, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍`)
console.log(e)
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch|buscarxnxx|xnxxbuscar$/i
handler.level = 5
handler.limit = 1
export default handler
global.keysxxx = ['fiktod', 'c2459db922', 'BF39D349845E', '675e34de8a', '37CC845916', '0b917b905e6f', '6fb0eff124']
