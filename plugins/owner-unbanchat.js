let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply('*Este chat no estΓ‘ registrado en la base de datos!*')
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('*Este chat no estΓ‘ baneado!!*')
  chat.isBanned = false
  m.reply(`${eg}ππππ πΎππΌπ πππ πΏπππ½πΌπππΌπΏπ π₯³\nπΌππππΌ ππ πππππ πΏπππππππ½ππ.`)
}
handler.command = /^unbanchat$/i
handler.botAdmin = true
handler.admin = true

export default handler
