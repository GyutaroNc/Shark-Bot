import fs from 'fs'
let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `π¦ *Eso son los contactos para ti.*`.trim()   
let buttonMessage= {
'document': { url: md },
'mimetype': `application/${document}`,
'fileName': `β¦ ππ‘ππ«π€-ππ¨π­γ€π¦`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': md,
'mediaType': 2,
'previewType': 'pdf',
'title': 'Super Bot WhatsApp',
'body': wm,
'thumbnail': fs.readFileSync('./media/menus/Menu3.jpg'),
'sourceUrl': yt }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: 'πΈ πΏπ€π£ππ§'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: 'βοΈ ππ£ππ€π§π’ππππ€π£'}, type: 1}, 
{buttonId: `${usedPrefix}allmenu`, buttonText: {displayText: 'π« πππ£πͺΜ ππ€π’π₯π‘ππ©π€'}, type: 1}],
'headerType': 6 }

await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `${wm}`
let oficial = 'ComunΓ­cate con El Chema Mi Creador por Instagram!!, Solo por ese medio puede ayudarte sobre Temas del Shark-Bot'

await conn.sendHydrated2(m.chat, str, oficial, pp, 'https://github.com/GyutaroNc/Shark-Bot', 'ππ‘ππ«π€-ππ¨π­γ€π¦', 'https://www.instagram.com/jm_hefesto', 'ππ£π¨π©πππ§ππ’', [
['β ππ§ ππ‘ ππ£ππππ€', '/menu'],
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueΓ±o|dueΓ±a|propietaria|dueΓ±o|creadora|creador)$/i
export default handler
