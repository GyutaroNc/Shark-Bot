let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let pp = './src/apoyo.jpg'
//await conn.sendButton(m.chat, wm, `https://paypal.me/Chemita81`, pp, m)
await conn.sendButton(m.chat, `${wm}`, `https://paypal.me/Chemita81`, pp, [['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', `/menu`]], m) //[['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', `/menu`]]
  
let str = `
π¦ Hola!! Que Viva One Piece π― Mis Estimados CompaΓ±eros, no acepto donaciones es pura joda mia jajaja π»!`.trim()
  
await conn.sendHydrated(m.chat, str, wm, media, 'No Acepto Donaciones β οΈ', 'π πΏπ€π£ππ§', null, null, [
['ππ§πͺπ₯π€π¨ πππππππ‘ππ¨ π°', '.grupos'],
['πΎπ§ππππ€π§ π¦', '#owner'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']
], m,)}



handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
