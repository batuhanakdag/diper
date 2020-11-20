const Moment = require('moment')
const Discord = require('discord.js')



module.exports = client => {
  
  const aktiviteListesi = [
    `Ucuz Spotify Hesap Satılır. ۪A۫۰۪F۫۰۪R۫۰۪O۫۰۪D۫۰۪E۫۰۪X۫۰#2005 `,


  ]

  client.user.setStatus('idle')
  console.log(`[${Moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${Moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 0))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 13000)
}
   
