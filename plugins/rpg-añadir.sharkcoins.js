import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*\n\n𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙏𝘼𝙂 𝙏𝙃𝙀 𝙐𝙎𝙀𝙍 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙇𝘼 𝘾𝘼𝙉𝙏𝙄𝘿𝘼𝘿 𝘿𝙀 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎\n\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙉𝙐𝙈𝘽𝙀𝙍 𝙊𝙁 𝘿𝙄𝘼𝙈𝙊𝙉𝘿𝙎`
if (isNaN(txt)) throw `${mg}𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n\n𝙉𝙊 𝙎𝙔𝙈𝘽𝙊𝙇𝙎, 𝙅𝙐𝙎𝙏 𝙀𝙉𝙏𝙀𝙍 𝙉𝙐𝙈𝘽𝙀𝙍𝙎`
let sharkcoins = parseInt(txt)
let money = sharkcoins
let pjk = Math.ceil(sharkcoins * pajak)
money += pjk
if (money < 1) throw `${mg}𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝘿𝙀 𝑺𝑯𝑨𝑹𝑲𝘾𝙊𝙄𝙉𝙎 𝙀𝙎 *1*\n\n𝙏𝙃𝙀 𝙈𝙄𝙉𝙄𝙈𝙐𝙈 𝙉𝙐𝙈𝘽𝙀𝙍 𝙁𝙍𝙊𝙈 𝑺𝑯𝑨𝑹𝑲𝘾𝙊𝙄𝙉𝙎 𝙄𝙎 *1*`
let users = global.db.data.users
users[who].money += sharkcoins
  //m.reply(`≡ *𝚇𝙿 𝙰𝙽̃𝙰𝙳𝙸𝙳𝙾*
//┌──────────────
//▢  *𝚃𝚘𝚝𝚊𝚕:* ${xp}
//└──────────────`)
conn.sendHydrated(m.chat, `╭━━━[ 𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈 ]━━━⬣\n┃\n┃ღ *PARA | FOR:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE LE AÑADIÓ | NOW YOU HAVE*\n┃ღ *${sharkcoins} SharkCoin(s)* 🦈\n┃\n╰━━━━━━━━━━━━━━⬣`, wm, null, md, '𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈', null, null, [
['⚠️ 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 ⚠️', '.rpgmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']], m)
}
handler.help = ['addsk <@user>']
handler.tags = ['sharkcoins']
handler.command = ['añadirsharkcoins', 'añadirshark', 'añadircoins', 'darsharkcoins', 'darshark', 'darcoins'] 
handler.rowner = true
export default handler
