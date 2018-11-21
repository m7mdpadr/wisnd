const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "w!";



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`${client.user.username}`,"https://twitch.tv//9ivv")
    console.log('')
    console.log('')
    console.log('╔[════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Logged i as * [ " ${client.user.username} " ]`);
    console.log('')
    console.log('Informatins :')
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log(`channels! [ " ${client.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
  });



client.on('message', message => {

	if(message.author.id === "410778583682777098" || message.author.id === "316324088865882142") {
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');


    if (message.content.startsWith(prefix + 'setwatch')) {
    client.user.setActivity(argresult, {type: 'WATCHING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`Watching Now: **${argresult}**`)
  }


    if (message.content.startsWith(prefix + 'setlis')) {
    client.user.setActivity(argresult, {type: 'LISTENING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
  }


  if (message.content.startsWith(prefix + 'setname')) {
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`Username Changed To **${argresult}**`)
    return message.reply(".");
  }

  if (message.content.startsWith(prefix + 'setavatar')) {
    client.user.setAvatar(argresult);
     message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
  }

  if (message.content.startsWith(prefix + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/9ivv");
       console.log('test' + argresult);
      message.channel.sendMessage(`Streaming: **${argresult}**`)
  }
  if (message.content.startsWith(prefix + 'setplay')) {
    client.user.setGame(argresult);
       console.log('test' + argresult);
      message.channel.sendMessage(`Playing: **${argresult}**`)
  }
	}

 });

client.on("message", message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
        let args = message.content.split(" ").slice(1).join(" ");
            if(message.author.bot) return;
                if(!message.channel.guild) return;
                    if(!message.guild.member(message.author.id).hasPermission("ADMINISTRATOR")) return;
                if(!args) return;
    if(command === "bc") {
        message.channel.send("**Sent.**").then(m => m.delete(5000));
        message.guild.members.forEach(member => {
            let msg = args.replace("[user]", member);
                member.send(msg);
        });
    }
    if(command === "obc") {
        message.channel.send("**Sent.**").then(m => m.delete(5000));
        message.guild.members.filter(a => a.user.presence.status !== "offline").forEach(member => {
            let msg = args.replace("[user]", member);
            member.send(msg);
        });
    }
    

});
var coolDown = new Set();
  client.on('message', message => {
    if (message.content.startsWith("رابط") || message.content.startsWith(prefix + "link")) {
        if(message.author.bot)return;
            if(!message.channel.guild) return;
          
              if(coolDown.has(message.author.id)) return message.channel.send("**يرجى الآنتظار ساعة أخرى قبل طلب رابط مجدداً**").then(m => m.delete(5000));
              message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تـم آرسال الرابط برسالة خآصة :dove: .**");

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 2**`)
        coolDown.add(message.author.id);
            setTimeout(() => {
                coolDown.remove(message.author.id);
            }, 3600000);
    }
});


client.on("message", message => {

    if(message.content.startsWith(prefix + "clear")) {
            
        if(!message.channel.guild) return;
        if(message.author.bot) return;
    if(!message.guild.member(message.author.id).hasPermission("MANAGE_MESSAGES")) return;

        message.channel.fetchMessages().then((moorz) => {
            message.channel.bulkDelete(moorz);
        });
    }
});



  client.on('message', message => {
      if(message.content.startsWith (prefix + "marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' ?? **لازم تطلب ايد وحدة**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' ?? **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** .-. تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author} 
 العرض لمدة 15 ثانية  
 اكتبي موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.Messages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
})

   const filte = m => m.content.startsWith("لا");
message.channel.Messages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} تم رفض عرضك** `);
})
        
  }
});

client.on('message',  (message) => {
        if(message.content.startsWith(prefix + 'kf')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.channel.send("**حدد شخص .**");
  }
  let slaps = [
    'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
    'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
    'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
    'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
    'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} ضربك كف بنص وجهك ${user.username}!`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


client.on('message', message => {

    if (message.content === prefix + "mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ? ")
           });
             }
if (message.content === prefix + "umc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات .")
           });
             }



});


client.on('message', message => {
    if (message.content.startsWith(prefix + "hack")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('تم تهكير جهازك راقب ماذا سيحدث تاليا')
           }, 6000)
           });
         }
 });
 
 
 
  client.on('message', message => {
  if(message.content.startsWith(prefix + "apply")) {
    var gg = message.guild.channels.find('name', 'التقديمات')
    if(!gg) return;
     message.channel.send("**الاسم**").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.Messages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.delete();
     message.channel.send('**العمر**').then(m => {
let chaMd = message.channel.Messages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        m.delete();
message.channel.send('**ماذا تستطيع ان تقدم للسيرفر**').then(ms => {
let br = message.channel.Messages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(col => {
  br = col.first().content
        col.first().delete()

ms.delete()

 message.channel.send('جاري التقديم ..').then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },2000);

if(gg) {
gg.send({embed : new Discord.RichEmbed()
.setDescription(`**  الاسم :question:  : \n ${lan}\nالعمر :link: :\n ${md} \n ماذا تستطيع ان تقدم للسيرفر :question: :\n ${br}  \nتم التقديم بواسطة  : <@${message.author.id}> **`)  
          .setFooter(`ادارة السيرفر`)
.setTimestamp()
});
}        
})
})
})
})
})
})
})
 }
})

client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
     
    if(cmd === `${prefix}report`){
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Idk who 2 report ??");
        let reason = args.join(" ").slice(22);
        if(!reason) return message.channel.send("What is the reason ??");
    
        let reportEmbed = new Discord.RichEmbed()
        .setTitle("User just reported...")
        .setColor("#f7abab")
        .addField("- Reported User :", `${rUser} (${rUser.id})`)
        .addField("- Reported By :", `${message.author} (${message.author.id})`)
        .addField("- Reported In :", message.channel)
        .addField("- Report Time :", message.createdAt.toLocaleString(),true)
        .addField("- Reason :", reason);
    
        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("You should to make `reports` channel.");
    
    
        message.delete().catch(O_o=>{});
        message.author.send(`<@${rUser.id}>, Reported Successfully!!`)
        reportschannel.send(reportEmbed);
    };
});

client.on('message', msg => {
    if(msg.content.startsWith (prefix + 'server')) {
      if(!msg.channel.guild) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField(':globe_with_meridians: **Name : **' , `**[ ${msg.guild.name} ]**`,true)
      .addField(':earth_africa: ** Region:**',`**[ ${msg.guild.region} ]**`,true)
      .addField(':military_medal:** Roles :**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField(':bust_in_silhouette:** Members :**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField(':pencil:** TextChannels :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField(':loud_sound:** VoiceChannels :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField(':crown:** Owner :**',`**[ ${msg.guild.owner} ]**`,true)
      .addField(':id:** ID :**',`**[ ${msg.guild.id} ]**`,true)
      .addField(':date:** Created At : **',msg.guild.createdAt.toLocaleString())
      .addField(':sleeping:**AFKChannel :**',`**${msg.guild.afkChannel || 'None'}**`, true)
      msg.channel.send({embed:embed});
    }
  });
  //avatar
  client.on("message", message => {
    if(message.content.startsWith(prefix + "avatar")) {
      if(!message.channel.guild) return;
        let human = message.mentions.users.first();
        if(human) {
          var him = human;
        } else {
          var him = message.author;
        }
        message.react("🖼");
        let avatar = new Discord.RichEmbed()
          .setImage(him.avatarURL)
          .setTitle(`❆ Requested by: ${message.author.tag}`)
          .setColor("BLACK")
          .setFooter(message.author.username, message.author.displayAvatarURL);
  
          message.channel.sendEmbed(avatar)
    }
  });

client.on('message', message => {
    if (message.content.startsWith(prefix + "bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});

client.on("message", (message) => {
if (message.content.startsWith(prefix + "ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});
client.on("message", (message) => {
if (message.content.startsWith(prefix + "cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
            if(!args) return message.channel.send("**Name? ,_,**");
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});


client.on('message', message => {
    if(message.content.startsWith(prefix + "setVoice")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
      console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
      },1000);
    });
    }
  });
  
  
  
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});





  client.on('message', message => {
    if (message.content === prefix + "rooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}`).join('\n')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
    if (message.content === prefix + "roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}  ${message.guild.members.filter(a => a.roles.has(roles)).size} members`).join('\n')
message.channel.send(`\`\`\`${roles}\`\`\``)
    }
});
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
 


 client.on('message', message => {
    if(message.content.startsWith(prefix + 'id')) {
    var year = message.author.createdAt.getFullYear()
    var month = message.author.createdAt.getMonth()
    var day = message.author.createdAt.getDate()
    let args = message.content.split(' ').slice(1).join(' ');
    if (args == '') {
    var z = message.author;
    }else {
    var z = message.mentions.users.first();
    }
    
    let d = z.createdAt;
    let n = d.toLocaleString();
    let x;
    let y;
    
    if (z.presence.game !== null) {
    y = `${z.presence.game.name}`;
    } else {
    y = "Not Playing... |💤.";
    }
    if (z.bot) {
    var w = 'Bot';
    }else {
    var w = 'Person';
    }
   let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField('**🔱| Name:**',`**<@` + `${z.id}` + `>**`, true)
    .addField('**📠 | ID:**:', "**"+ `${z.id}` +"**",true)
    .addField('**🎮 | Game:**','**'+y+'**' , true)
    .addField('**🤖| Type:**',"**"+ w + "**",true)
    .addField('**📛| Tag:**',"**#" +  `${z.discriminator}**`,true)
    .addField('**📆| Joined discord at:** ' ,year + "-"+ month +"-"+ day)
    .addField("**⌚| Joined server at:**", message.member.joinedAt.toLocaleString())
    .setThumbnail(`${z.avatarURL}`)
    .setFooter(message.author.username, message.author.avatarURL)
    
    message.channel.send({embed});
    
    }
    
  });
  client.on('message', message => {
    if (message.author.codes) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == "ban") {
                 if(!message.channel.guild) return message.reply('** This command only for servers**');
           
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    
    if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
    if (!message.guild.member(user)
    .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");
  
  
    message.guild.member(user).ban(7, user);
  
  message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)
  
  }
  });
  
  
  client.on('message', message => {
    if (message.author.kick) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == "kick") {
                 if(!message.channel.guild) return;
           
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
  
    if (message.mentions.users.size < 1) return message.reply("منشن شخص");
    if(!reason) return message.reply ("اكتب سبب الطرد");
    if (!message.guild.member(user)
    .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");
  
    message.guild.member(user).kick(7, user);
  
    const banembed = new Discord.RichEmbed()
    .setAuthor('Kicked !', user.displayAvatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .addField("User:",  `[ + ${user.tag} + ]`)
    .addField("By:", `[  + ${message.author.tag} +  ]`)
    .addField("Reason:", `[ + ${reason} +  ]`)
    client.channels.get("492086928397565952").send({embed : banembed})
  }
  });
  
  client.on('message', message => {
    let args = message.content.split(" ");
    if(message.content.startsWith(prefix + "mute")) {
      if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
   
      if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
   
      let mention = message.mentions.members.first();//kinggamer حقوق الفا كودز و
      if(!mention) return  message.channel.send('').then(msg => { //kinggamer حقوق الفا كودز و
        msg.delete(3500);
        message.delete(3500);
      });
   
      if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => {
        msg.delete(3500);
        message.delete(3500); //kinggamer حقوق الفا كودز و
      });
     
      if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); //kinggamer حقوق الفا كودز و
   
      if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);
   
     
      if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
     
      if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => {
        msg.delete(3500);
        message.delete(3500); //kinggamer حقوق الفا كودز و
      });
     
      let duration = args[2];
      if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
   
      if(isNaN(duration))  message.channel.send('').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
   
      let reason = message.content.split(" ").slice(3).join(" ");
      if(!reason) reason = " [ **لم يذكر لماذا** ] ";
   
      let thisEmbed = new Discord.RichEmbed()
      .setAuthor(mention.user.username, mention.user.avatarURL)
      .setTitle('**تم آعطائك ميوت**')
      .addField('**__السيرفر__**',[ message.guild.name ]) //kinggamer حقوق الفا كودز و
      .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
      .addField('**__آلسبب__**',reason)
      .addField('**__وقت الميوت__**',duration)
   
      let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
      if(!role) try {
        message.guild.createRole({
          name: "Muted",
          permissions: 0 //kinggamer حقوق الفا كودز و
        }).then(r => {
          message.guild.channels.forEach(c => {
            c.overwritePermissions(r , {
              SEND_MESSAGES: false, //kinggamer حقوق الفا كودز و
              READ_MESSAGES_HISTORY: false,
              ADD_REACTIONS: false
            });
          });
        }); //kinggamer حقوق الفا كودز و
      } catch(e) {
        console.log(e.stack);
      }
      mention.addRole(role).then(() => {
        mention.send(thisEmbed);
        message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
        mention.setMute(true); //kinggamer حقوق الفا كودز و
      });
      setTimeout(() => {
        if(duration === 0) return;
        mention.setMute(false);
        mention.removeRole(role)
      },duration * 60000); //kinggamer حقوق الفا كودز و
    }
  });
  client.on('message', message => {
      let mention = message.mentions.members.first();
  let command = message.content.split(" ")[0];
       command = command.slice(prefix.length);
      let args = message.content.split(" ").slice(1);  //kinggamer حقوق الفا كودز و
  if(command === `unmute`) {2
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
   
    let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
       if(!kinggamer) return message.channel.send('').then(msg => {
        msg.delete(3500);
        message.delete(3500); //kinggamer حقوق الفا كودز و
      });
   
    let role = message.guild.roles.find (r => r.name === "Muted");
   
    if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
   
    kinggamer.removeRole(role) //kinggamer حقوق الفا كودز و
    message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
   
    return;
   
    }
   
  });
const moment = require("moment");
    client.on("guildMemberAdd", m => {
          let room = m.guild.channels.find(a => a.name === 'log'); //
      if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 7) {
          m.ban() .then((
              room.send(`**:no_entry: | ${m} Has been banned for: \`fake\`**`)
          ));
      };
      function parseDate(str) {
          var mdy = str.split('/');
          return new Date(mdy[2], mdy[0]-1, mdy[1]);
      };
      
      function datediff(first, second) {
          return Math.round((second-first)/(1000*60*60*24));
      };
  });
  
  
client.on("message", (message) => {
    
   if (message.content.startsWith(prefix + "new")) {     
        const reason = message.content.split(" ").slice(1).join(" ");     
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `تم فتح تذكرة الرجاء انتظار الى حين يأتي مشرف ويقوم بلرد عليك`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith(prefix + "close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتب $confirm`)
           .then((m) => {
               message.channel.Messages(response => response.content === '$confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })    
                   .then((collected) => {
                       message.channel.delete();
                   })    
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});
 



client.on('message' , message => {
    if(message.content === prefix + 'help') {
      message.author.send(`
      ─════════════[ Commands Menu ]════════════─
      » \`${prefix}bc\` ➺ برودكاست ب امبيد وبدون
      » \`${prefix}link\` ➺ رابط انفايت للسيرفر
      » \`${prefix}clear\` ➺ مسح الشات
      » \`${prefix}server\` ➺ لعرض معلومات السيرفر
      » \`${prefix}marry\` ➺ لعبة الزواج
      » \`${prefix}kf\` ➺ لعبة كف
      » \`${prefix}mc\` ➺ قفل الشات
      » \`${prefix}umc\` ➺ فتح الشات
      » \`${prefix}hack\` ➺ لعبة التهكير
      » \`${prefix}apply\` ➺ تقديم / لازم في روم اسمه التقديمات
      » \`${prefix}report\` ➺ تبليغ / لازم في روم اسمه repoerts
      » \`${prefix}avatar\` ➺ عرض صورتك او شخص تمنشنه
      » \`${prefix}bans\` ➺ يقولك عدد الاشخاص المبندين من السيرفر
      » \`${prefix}ct\` ➺ انشاء روم كتابي
      » \`${prefix}cv\` ➺ انشاء روم صوتي
      » \`${prefix}setVoice\` ➺ يسويلك روم ويقولك عدد الاشخاص في الرومات الصوتية
      » \`${prefix}move\` ➺ سحب عضو للروم الصوتي
      » \`${prefix}ban\` ➺ تبنيد عضو من السيرفر
      » \`${prefix}kick\` ➺ طرد عضو من السيرفر
      » \`${prefix}mute\` ➺ اعطاء ميوت كتابي
      » \`${prefix}unmute\` ➺ فك الميوت الكتابي
      » \`${prefix}rooms\` ➺ لعرض الرومات الموجودة في السيرفر
      » \`${prefix}roles\` ➺ لعرض الرتب الموجودة في السيرفر
      » \`${prefix}id\` ➺ لعرض معلوماتك
      » \`${prefix}new\` ➺ لانشاء تذكرة
      » \`${prefix}close\` ➺ لاغلاق تذكرة
      `);
    }

    });

    const invites = {};

    const wait = require('util').promisify(setTimeout);
    
    client.on('ready', () => {
      wait(1000);
    
      client.guilds.forEach(g => {
        g.fetchInvites().then(guildInvites => {
          invites[g.id] = guildInvites;
        });
      });
    });
    
    client.on('guildMemberAdd', member => {
      member.guild.fetchInvites().then(guildInvites => {
        const ei = invites[member.guild.id];
        invites[member.guild.id] = guildInvites;
        const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
        const inviter = client.users.get(invite.inviter.id);
        const logChannel = member.guild.channels.find(channel => channel.name === "wind");
        if(!logChannel) return;
        setTimeout(() => {
            logChannel.send(`**By: <@${inviter.id}> .**`);
        }, 1000);
      });
    });
    

client.login(process.env.WIND_SYSTEM);
