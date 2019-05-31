const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTgzODAwNzI0MDM1NDY5MzE4.XPCtfw.64zNqYdt72EgH6x04MWcVl2zDzg';
const PREFIX = '!';

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;
    channel.send(`Welcome to Blaine County DPS, ${member}!, We hope that you will enjoy your stay in our fine city. Please refer to the rules and regulations and remember to have fun!`)
})

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{
    const user = message.mentions.users.first();
    const member = message.guild.member(user);

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.reply('pong');
            break;
        case 'clear':
            if(!args[1]) return message.reply('Error Define Second Argument')
            message.channel.bulkDelete(args[1]);
            break;
        case 'kick':
            if(!args[1]) message.channel.send('404 player not found')

           

            if(user){
                

                if(member){
                    member.kick('You have been put in timeout! Try to behave.').then(() =>{
                        message.reply(`Successfully removed ${user.tag}`);
                    }).catch(err =>{
                        message.reply('Unable to kick player!')
                        console.log(err);
                    });
                } else{
                    message.reply("That user isn\'t a citizen in our city!")
                }
            } else{
                message.reply('That user is not a citizen in our city!')
            }

            break;
        
            case 'ban':
                    if(!args[1]) message.channel.send('404 player not found')
        
        
                    if(user){
                        
        
                        if(member){
                            member.ban({Reason:'You have failed to follow the laws and have been exiled'}).then(() =>{
                                message.reply(`Successfully Exiled ${user.tag}`);
                            }).catch(err =>{
                                message.reply('Unable to ban player!')
                                console.log(err);
                            });
                        } else{
                            message.reply("That user isn\'t a citizen in our city!")
                        }
                    } else{
                        message.reply('That user is not a citizen in our city!')
                    }
        
                    break;

    }


 
})
bot.login(token);
client.login(process.env.BOT_TOKEN);
