const Discord = require('discord.js');
const client = new Discord.Client({
partials: ['MESSAGE', 'REACTION']
});
let prefix = '-';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildMemberAdd', guildMember =>{
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'goku');
guildMember.roles.add(welcomeRole);
   
    guildMember.guild.channels.cache.get('928341780661960792').send(`Welcome <@${guildMember.user.id}> to the server`);
  
});


client.on('message', message => {
    
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'speak')){
    	message.channel.send('no');
  	} else

    if (message.content.startsWith(prefix + 'number')) {
    	message.channel.send(Math.floor(Math.random() * 100));
  	} else
        
          if (message.content.startsWith(prefix + 'roles')) {
    	message.reply('\nSupporter - If you \'re a supporter of Fullmetal or Hayden, get this role to see even more of their content and let them know that you care!\nGranblue - Gives access to the Granblue Fantasy Versus related channels.\nSmash - Gives access to the Smash series related channels.\nBBTag - Gives access to the BlazBlue Cross Tag Battle related channels, where I reign supreme. \nGG - Gives access to the GGXrd2 channels.');
  	} else
        
        if(message.content.startsWith(prefix + 'rando')){
        member.roles.add('930606312440623104')
        
        
        
        
        }
                      
                          
});



client.on('messageReactionAdd', (reaction, user) => {
    
    console.log('Hello!');
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(userid);
    if (reaction.message.id === '930874223956721704') {
        switch (name){
                
            case '🍎':
                members.roles.add('930860952008654908');
                break;
                
        }
        
    }














});
  	
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
