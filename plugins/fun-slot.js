let handler = async (m, { args, usedPrefix, command, conn }) => {
let fa = `
${mg}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙐𝙎𝘼𝙍 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙍𝘼:

𝙀𝙅𝙀𝙈𝙋𝙇𝙊
*${usedPrefix + command} 50*`.trim()

if (!args[0]) throw fa
if (isNaN(args[0])) throw fa
let apuesta = parseInt(args[0])
let users = global.db.data.users[m.sender]
let time = users.lastmining + 10000
if (new Date - users.lastmining < 10000) throw `𝙑𝙐𝙀𝙇𝙑𝘼 𝙀𝙉 *${msToTime(time - new Date())}* 𝙋𝘼𝙍𝘼 𝘾𝙊𝙉𝙏𝙄𝙉𝙐𝘼𝙍 𝘼𝙋𝙊𝙎𝙏𝘼𝙉𝘿𝙊

if (apuesta < 5) throw `${ag}𝘿𝙀𝘽𝙀 𝘿𝙀 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙐𝙉 𝙈𝙄𝙉𝙄𝙈𝙊 𝘿𝙀 *5*`
if (users.exp < apuesta) {
throw `${fg}𝙉𝙊 𝘼𝙇𝘾𝘼𝙉𝙕𝘼 𝙋𝘼𝙍𝘼 𝘼𝙋𝙊𝙎𝙏𝘼𝙍, 𝙇𝙀 𝙍𝙀𝘾𝙊𝙈𝙄𝙀𝙉𝘿𝙊 𝙄𝙉𝙏𝙀𝙍𝘼𝘾𝙏𝙐𝘼𝙍 𝘾𝙊𝙉 𝙀𝙇 𝘽𝙊𝙏 𝙋𝘼𝙍𝘼 𝙊𝘽𝙏𝙀𝙉𝙀𝙍 𝙍𝙀𝘾𝙐𝙍𝙎𝙊𝙎`
}
if (command == 'slot1') {
let emojis = ["🍁", "⚡", "🍇"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ *QUE PRO!! HAS GANADO +${apuesta + apuesta} EXP*`
users.exp += apuesta
} else if (a == b || a == c || b == c) {
end = `😯 *CASI!!, VUELVA A INTENTAR*\n*BONO DE +50 EXP*`
users.exp += 50
} else {
end = `😥 *HA PERDIDO!! ❌ -${apuesta} EXP*`
users.exp -= apuesta
}
users.lastslot = new Date * 1
//return await m.reply(
    //    `
let s = `
🎰 | *RANURAS* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *SLOTS*   | 🎰`
await conn.sendHydrated(m.chat, `${s}\n\n${end}`, wm, null, md, '𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈', null, null, [
['⚡ 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕', `${usedPrefix}slot1 ${apuesta}`],
['🦈 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝑺𝑯𝑨𝑹𝑲𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`],
['💎 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎', `${usedPrefix}slot3 ${apuesta}`]
], m,)}        
        
        
if (command == 'slot2') {
let emojis = ["🦈", "🐓", "🐙"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ *QUE PRO!! HAS GANADO +${apuesta + apuesta} SharkCoins*`
users.money += apuesta
} else if (a == b || a == c || b == c) {
end = `😯 *CASI!!, VUELVA A INTENTAR*\n*BONO DE +30 SharkCoins*`
users.money += 30
} else {
end = `😥 *HA PERDIDO!! ❌ -${apuesta} SharkCoins*`
users.money -= apuesta
}
users.lastslot = new Date * 1
//return await m.reply(
    //    `
let ss = `
🎰 | *RANURAS* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *SLOTS*   | 🎰`
await conn.sendHydrated(m.chat, `${ss}\n\n${end}`, wm, null, md, '𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈', null, null, [
['🦈 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕', `${usedPrefix}slot2 ${apuesta}`],
['⚡ 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝙀𝙓𝙋', `${usedPrefix}slot1 ${apuesta}`],
['💎 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎', `${usedPrefix}slot3 ${apuesta}`]
], m,)}
        
        
if (command == 'slot3') {
let emojis = ["🪵", "💣", "💎"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `✨ *QUE PRO!! HAS GANADO +${apuesta + apuesta} Diamantes*`
users.limit += apuesta
} else if (a == b || a == c || b == c) {
end = `😯 *CASI!!, VUELVA A INTENTAR*\n*BONO DE +2 Diamantes*`
users.limit += 2
} else {
end = `😥 *HA PERDIDO!! ❌ -${apuesta} Diamantes*`
users.limit -= apuesta
}
users.lastslot = new Date * 1
//return await m.reply(
    //    `
let sss = `
🎰 | *RANURAS* | 🎰 
 ────────
  ${x[0]} : ${y[0]} : ${z[0]}
  ${x[1]} : ${y[1]} : ${z[1]}
  ${x[2]} : ${y[2]} : ${z[2]}
 ────────
🎰 |   *SLOTS*   | 🎰`
await conn.sendHydrated(m.chat, `${sss}\n\n${end}`, wm, null, md, '𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈', null, null, [
['💎 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝙊𝙏𝙍𝘼 𝙑𝙀𝙕 | 𝘼𝙂𝘼𝙄𝙉', `${usedPrefix}slot3 ${apuesta}`],
['⚡ 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝙀𝙓𝙋', `${usedPrefix}slot1 ${apuesta}`],
['🦈 𝘼𝙋𝙊𝙎𝙏𝘼𝙍 𝘾𝙊𝙉 𝑺𝑯𝑨𝑹𝑲𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`]
], m,)}
        
        
if (command == 'slot') {       
await conn.sendHydrated(m.chat, `*Elija en que apostará el valor de ${apuesta}*`, wm, null, md, '𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈', null, null, [
['⚡ 𝙀𝙓𝙋', `${usedPrefix}slot1 ${apuesta}`],
['🦈 𝑺𝑯𝑨𝑹𝑲𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`],
['💎 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎', `${usedPrefix}slot3 ${apuesta}`]
], m,)}
        
if (command == 'apostar') {       
await conn.sendHydrated(m.chat, `*Elija en que apostará el valor de ${apuesta}*\n\n*Choose what you will bet the value of ${apuesta}*`, wm, null, md, '𝐒𝐡𝐚𝐫𝐤-𝐁𝐨𝐭ㅤ🦈', null, null, [
['⚡ 𝙀𝙓𝙋', `${usedPrefix}slot1 ${apuesta}`],
['🦈 𝑺𝑯𝑨𝑹𝑲𝘾𝙊𝙄𝙉𝙎', `${usedPrefix}slot2 ${apuesta}`],
['💎 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎', `${usedPrefix}slot3 ${apuesta}`]
], m,)}
       
}
handler.help = ['slot <apuesta>']
handler.tags = ['game']
handler.command = ['slot', 'apostar', 'slot1', 'slot2', 'slot3']
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s "
}
