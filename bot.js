const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = 'Ruby, ';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  console.log(member.user.username + 'welcome to the server!')
    console.log(member)
    const role = member.guild.roles.find('name', 'Guests');
    member.addRole(role);
});


client.on('message', message => {
    
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'speak')){
    	message.channel.send('no');
  	} else

    if (message.content.startsWith(prefix + 'number')) {
    	message.channel.send(Math.floor(Math.random() * 100));
  	} else
        
    if (message.content.startsWith(prefix + 'Unist')){
        message.member.addRole('562663500808323073')
        .then(console.log)
        .catch(console.error);
             let rudeRuby = Math.floor(Math.random() * 4);
             switch(rudeRuby)
        {
            case 1 :
                if(rudeRuby == 1){
                message.reply('I\'m only doing this because I have to...');
                };
                break;
                
            case 2 :
                if(rudeRuby == 2){
                message.reply('can\'t you see I\'m busy?')
                };
                break;
                
            case 3 :
                if(rudeRuby == 3){
                message.reply('stop bothering me.')
                };
                break;
                
                default :
                message.reply('you have your role, now go away...')
        } 
    } else
            if (message.content.startsWith(prefix + 'granblue')){
        message.member.addRole('481485569063518217')
        .then(console.log)
        .catch(console.error);
        let rudeRuby = Math.floor(Math.random() * 4);
        switch(rudeRuby)
        {
            case 1 :
                if(rudeRuby == 1){
                message.reply('I\'m only doing this because I have to...');
                };
                break;
                
            case 2 :
                if(rudeRuby == 2){
                message.reply('can\'t you see I\'m busy?')
                };
                break;
                
            case 3 :
                if(rudeRuby == 3){
                message.reply('stop bothering me.')
                };
                break;
                
                default :
                message.reply('you have your role, now go away...')
        }
    } else
        
         if (message.content.startsWith(prefix + 'smash')){
        message.member.addRole('481485523781943306')
        .then(console.log)
        .catch(console.error);
             let rudeRuby = Math.floor(Math.random() * 4);
             switch(rudeRuby)
        {
            case 1 :
                if(rudeRuby == 1){
                message.reply('I\'m only doing this because I have to...');
                };
                break;
                
            case 2 :
                if(rudeRuby == 2){
                message.reply('can\'t you see I\'m busy?')
                };
                break;
                
            case 3 :
                if(rudeRuby == 3){
                message.reply('stop bothering me.')
                };
                break;
                
                default :
                message.reply('you have your role, now go away...')
        }
    } else
        
         if (message.content.startsWith(prefix + 'BBTag')){
        message.member.addRole('481485486955692063')
        .then(console.log)
        .catch(console.error);
             let rudeRuby = Math.floor(Math.random() * 4);
             switch(rudeRuby)
        {
            case 1 :
                if(rudeRuby == 1){
                message.reply('I\'m only doing this because I have to...');
                };
                break;
                
            case 2 :
                if(rudeRuby == 2){
                message.reply('can\'t you see I\'m busy?')
                };
                break;
                
            case 3 :
                if(rudeRuby == 3){
                message.reply('stop bothering me.')
                };
                break;
                
                default :
                message.reply('you have your role, now go away...')
        }
    } else
        
         if (message.content.startsWith(prefix + 'GG')){
        message.member.addRole('481485431863771136')
        .then(console.log)
        .catch(console.error);
             let rudeRuby = Math.floor(Math.random() * 4);
             switch(rudeRuby)
        {
            case 1 :
                if(rudeRuby == 1){
                message.reply('I\'m only doing this because I have to...');
                };
                break;
                
            case 2 :
                if(rudeRuby == 2){
                message.reply('can\'t you see I\'m busy?')
                };
                break;
                
            case 3 :
                if(rudeRuby == 3){
                message.reply('stop bothering me.')
                };
                break;
                
                default :
                message.reply('you have your role, now go away...')
        }
    } else
        
      if (message.content.startsWith(prefix + 'supporter')){
        message.member.addRole('481189063064551475')
        .then(console.log)
        .catch(console.error);
          message.reply('you get to see more of me now, have fun :smiling_imp:');
    } else
        
          if (message.content.startsWith(prefix + 'roles')) {
    	message.reply('\nSupporter - If you \'re a supporter of Fullmetal or Hayden, get this role to see even more of their content and let them know that you care!\nSplatoon - Gives access to the Splatoon 2 related channels.\nSmash - Gives access to the Smash series related channels.\nBBTag - Gives access to the BlazBlue Cross Tag Battle related channels, where I reign supreme. \nGG - Gives access to the GGXrd2 channels.');
  	} else
        
                   if (message.content.startsWith(prefix + 'remove unist')) {
                        message.member.removeRole('562663500808323073')
  .then(console.log)
  .catch(console.error);
                         message.reply('you\'ve been successfully removed')
                    } else
                        
                        if (message.content.startsWith(prefix + 'remove granblue')) {
                        message.member.removeRole('481485569063518217')
  .then(console.log)
  .catch(console.error);
                         message.reply('you\'ve been successfully removed')
                    } else
                    
            
              if (message.content.startsWith(prefix + 'remove smash')){
                    message.member.removeRole('481485523781943306')
  .then(console.log)
  .catch(console.error);
                   message.reply('you\'ve been successfully removed')
              } else
                    
                    
       if (message.content.startsWith(prefix + 'remove supporter')){
          message.member.removeRole('481189063064551475')
  .then(console.log)
  .catch(console.error);
            message.reply('you\'ve been successfully removed')
                      } else
                    
                    
                       if (message.content.startsWith(prefix + 'remove BBTag')){
                    message.member.removeRole('481485486955692063')
  .then(console.log)
  .catch(console.error);
                           message.reply('I don\'t blame you for getting salty, losing to me all the time. You\'re always welcome to come back and repeat the process though.')
                       } else
                    
                    
                     
                    if (message.content.startsWith(prefix + 'remove GG')){
                    message.member.removeRole('481485431863771136')
  .then(console.log)
  .catch(console.error);
                        message.reply('you\'ve been successfully removed')
                    }
                                
});
  	
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
