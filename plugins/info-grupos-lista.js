let handler = async (m, { conn }) => {
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\n🦈 ${await conn.getName(jid)}\n✦ ${jid} \n${chat?.metadata?.read_only ? '❌ *SIN ESTAR AQUÍ | NO*' : '✅ *SIGO AQUÍ | YES*'}\n\n`
m.reply(`*${sk} ESTÁ EN ESTOS GRUPOS*
*IS IN THESE GROUPS:*`.trim())

conn.sendHydrated(m.chat, txt, wm, null, 'https://github.com/GyutaroNc/Shark-Bot', '𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈', null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '.menu'],
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 ✅', '/cuentassk']
], m,)
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i
handler.exp = 30
export default handler
