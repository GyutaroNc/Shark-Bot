let media = './media/menus/Menu2.jpg'
let handler = async (m, { conn, command }) => {
let str = `
π» π½ππππππππΏπ(πΌ) πΌ ππΌπ πΎπππππΌπ ππππΎππΌπππ
βββββββββββββββββ
β *GITHUB*
*${md}*
βββββββββββββββββ
β *INSTAGRAM - ASISTENCIA*
*${ig}*
βββββββββββββββββ
β *YOUTUBE*
*${yt}*
βββββββββββββββββ
*Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/GyutaroNc/Shark-Bot', 'ππ‘ππ«π€-ππ¨π­γ€π¦', null, null, [
['ππ§πͺπ₯π€π¨ πππππππ‘ππ¨ π°', '.grupos'],
['πΎπ§ππππ€π§ π¦', '#owner'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']
], m,)}

handler.command = /^cuentasoficiales|skig|cuentassk|cuentask|accounts|sharkaccounts|account|igshark|cuentasdeshark|cuentasdesharkbot|cuentasdelbot|cuentasbot$/i
handler.exp = 35
export default handler
