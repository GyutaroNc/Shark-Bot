let handler = async (m, { command, usedPrefix, text }) => { 
if (!text) throw `${mg}ðððūððð―ðž ðð ððððððððž ððžððž ððð ðððððððŋððŋðž\nððððððð\n*${usedPrefix + command} Hoy va llover?*`   
let pre = `â­âã ððððððððž ãââŽĢ  
âïļ ððððððððž
ð *${text}*
âââââââââââââââ
â ðððððððððž | ðððððððð 
ðĨī *${['Si','Tal vez sÃ­','Tal vez no','Posiblemente','Probablemente no','Que no juelagranmilputa','Puede ser','No puede ser','No','Imposible','Depende','Creo que si','Creo que no','Claro no lo dudes','Hasta yo lo dudo','No tengo palabras jajaja','Es altamente posible','Es bajamente posible'].getRandom()}*
â°âââââã ðĶ *${vs}* ãâââââŽĢ`.trim() 

conn.sendHydrated(m.chat, pre, wm, null, md, 'ððĄððŦðĪ-ððĻð­ãĪðĶ', null, null, [
['ððĐð§ð ðŦððŊ ðŪ', `${usedPrefix + command} ${text}`],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ âïļ', '/menu']
], m, null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {}) }
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i  
export default handler
