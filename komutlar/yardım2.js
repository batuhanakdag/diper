const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = 'c!'

	const codare = new Discord.RichEmbed()
       .setAuthor(`Müzik Komutları`)
       .setTitle(`Üyeler için Müzik Komutları`)
       .setDescription(`+çal şarkının ismi = Şarkıyı Çalar \n+durdur = Şarkıyı Durdurur \n +geç =2.Seçilen Şarkıya geçer.\n +dp = botun davet linki `)
       .addField("» Linkler", ` \n[Davet Et]( https://discord.com/oauth2/authorize?client_id=766310650375831614&scope=bot&permissions=8)   `, false)
       .setFooter(`Yapımcı Batuhan Akdağoğlu`)
  return message.channel.send(codare)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'müzikbilgi',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};