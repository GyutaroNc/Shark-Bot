let handler  = async (m, { conn, usedPrefix, command }) => {
let res = "https://recoders-area.caliph.repl.co/api/lolivid"
conn.sendHydrated(m.chat, null, null, res, null, null, null, null, [['ððððððððð | ðððð ð', `/${command}`]], m)}
handler.help = ['lolivid']
handler.tags = ['random']
handler.command = /^(lolivid|lolivideos|lolÃ­vid)$/i
export default handler
