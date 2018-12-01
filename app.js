const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    // We can post into the console that the bot launched.
    console.log('Bot started.');
});
client.on('guildMemberAdd', member => {
    let memberTag = member.user.id;
    member.guild.channels.get('476526110046420994').send("Welcome to Rs Wanderers! "+"<@" + member.id +"> Enjoy your stay and don't forget to read the rules first by clicking here, <#476707469549371392>. Afterwards maybe <#476863150420131840> so we can all get to know you!"); 
});
client.on('guildMemberAdd', (guildMember) => {
    guildMember.addRole(guildMember.guild.roles.find(role => role.name === "smiley"));
 });

client.on("message", message => {

    if (message.content === "death of stotter") {

        // the robot answers pong!
        message.channel.send("HUMILIATION!!", {
            files: ["https://i.gyazo.com/0260cd25bde1283951425b54e04844c5.png"]
        });
    }
    if (message.content === "are you online?") {

        // the robot answers pong!
        message.channel.send("Yesh master!");
    }
     if (message.content === "!raids req"){

        message.channel.send("80+ combats stats are recommended depending on the group size you are in would depend your herblore/thieving/con/farming level. If with others this isn't needed, if in small group you would be better with 90 herblore, 60+ con 56+ farming  and higher thieving the better although this isn't a necessity. If you have a look at the <#476540508349661204> it'll show you the best set up you can with your gear, if you need to swap something out just ask :smiley:")
    }


    // client.on('guildMemberAdd', member => {
    //     member.guild.channels.get('518407100930588675').send("Welcome to Rs Wanderers! Enjoy your stay and dont forget to read the rules which is here #rules and maybe introduce your self :) #introduce-yourself"); 
    // });


});
client.login(process.env.BOT_TOKEN);
