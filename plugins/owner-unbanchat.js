let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply('*Este chat no está registrado en la base de datos!*')
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('*Este chat no está baneado!!*')
  chat.isBanned = false
  m.reply(`${eg}𝙀𝙎𝙏𝙀 𝘾𝙃𝘼𝙏 𝙁𝙐𝙀 𝘿𝙀𝙎𝘽𝘼𝙉𝙀𝘼𝘿𝙊 🥳\n𝘼𝙃𝙊𝙍𝘼 𝙎𝙄 𝙀𝙎𝙏𝙊𝙔 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀.`)
}
handler.command = /^unbanchat$/i
handler.botAdmin = true
handler.admin = true

export default handler
