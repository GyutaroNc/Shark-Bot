let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`${eg}ππππ πΎππΌπ πππ π½πΌπππΌπΏπ π€\nππ ππππΌππ πΏπππππππ½ππ ππΌπππΌ πππ πππΌ πΏπππ½πΌπππΌπΏπ.`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.botAdmin = true
handler.admin = true 
export default handler
