let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
await m.reply(`
â­âã ð *BALANCE* ãââŽĢ
â *USUARIO*
â ${name}
âââââââââââââââ
â *${global.db.data.users[who].limit} Diamantes* ð
â°ââââã *ðĶ ${vs}* ãââââŽĢ`)

let d = `
*COMPRAR DIAMANTES CON EXP*
${usedPrefix}buy *cantidad*
${usedPrefix}buyall *cantidad*

*COMPRAR DIAMANTES CON SHARKCOINS*
${usedPrefix}buy2 *cantidad*
${usedPrefix}buyall2 *cantidad*`

await conn.sendHydrated(m.chat, d, wm, null, md, 'ððĄððŦðĪ-ððĻð­ãĪðĶ', null, null, [
['ðððĢðŠ ðð§ððĢðððĨððĄ âĄ', '#menu'],
['ðððĢðŠĖ ððĪðĒðĨðĄððĐðĪ ðŦ', '.allmenu']
], m,)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
export default handler
