import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍`

let nombre = '𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈'
let nombre2 = '𝐄𝐥 𝐂𝐡𝐞𝐦𝐚 🔥'
 
const s = [
'https://c.tenor.com/BBNrRQkKdcUAAAAi/anime.gif',
'https://c.tenor.com/OHMxfMcU4eQAAAAi/anime-girl.gif',  
'https://c.tenor.com/7nadUsiwZioAAAAd/satanichia-gabriel-dropout.gif',
'https://c.tenor.com/Gr6Z_6lBm2kAAAAd/satania-satanichia.gif',
'https://i.pinimg.com/originals/e4/f7/a2/e4f7a2ca99c568e64c1d41f2a61133eb.jpg',  
'https://i.pinimg.com/474x/b0/62/3f/b0623f46719f73be8b2d65357d8e30b2.jpg',
'https://i.pinimg.com/736x/e4/df/2d/e4df2d77375455726233c66882e5e0e7.jpg',
'https://i.pinimg.com/236x/2b/c2/fa/2bc2fa0191d01026d9797091d1ba5b2f.jpg' 
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
 
 }
handler.customPrefix = /piensa|pienso|pensaré|pensó|pensamos|pensaremos|pensaste|pensando|pensar|🤔/i 
handler.command = new RegExp
handler.exp = 50
export default handler