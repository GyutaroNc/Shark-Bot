import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}πΏππ½π πΏπ ππππππππΌπ πΌπ ππππΌπππ *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}πππππππ ππΌ πΎπΌππππΏπΌπΏ πΏπ πΏππΌππΌππππ`
if (isNaN(txt)) throw `${mg}πππ ππππ½ππππ, ππππ πππππππ πππππππ`
let sharkcoins = parseInt(txt)
let money = sharkcoins
let pjk = Math.ceil(sharkcoins * pajak)
money += pjk
if (money < 1) throw `${mg}ππ ππππππ ππππππ πΏπ ππ‘ππ«π€πΎππππ ππ *1*`
let users = global.db.data.users
users[who].money += sharkcoins
  //m.reply(`β‘ *ππΏ π°π½Μπ°π³πΈπ³πΎ*
//βββββββββββββββ
//β’  *πππππ:* ${xp}
//βββββββββββββββ`)
conn.sendHydrated(m.chat, `β­βββ[ ππ‘ππ«π€πΎππππ π¦ ]ββββ¬£\nβ\nβα¦ *PARA:*\nβα¦ *${text}*\nββββββββββββββββββ\nβα¦ *SE LE AΓADIΓ*\nβα¦ *${sharkcoins} SharkCoin(s)* π¦\nβ\nβ°βββββββββββββββ¬£`, wm, null, md, 'ππ‘ππ«π€-ππ¨π­γ€π¦', null, null, [
['π€§ πππ£πͺ πΌπ«ππ£π©πͺπ§π π€§', '.rpgmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']], m)
}
handler.help = ['addsk <@user>']
handler.tags = ['sharkcoins']
handler.command = ['aΓ±adirsharkcoins', 'aΓ±adirshark', 'aΓ±adircoins', 'darsharkcoins', 'darshark', 'darcoins'] 
handler.group = true
export default handler
