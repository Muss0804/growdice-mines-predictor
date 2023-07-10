const {
    Client,
    EmbedBuilder,
    ActivityType,
    GatewayIntentBits,
    Partials,
    Collection,
    Colors
} = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
    partials: [Partials.Channel],
});
const config = require("./config.json");
client.login(config.token);
  
const cooldown = new Collection();

client.on("ready", () => {
    console.log(`${client.user.tag} logined!`);
    
});

client.on("messageCreate", (message) => {
	const args = message.content.slice(6).trim().split(' ');
	const mines = args.shift().toLowerCase();
    const seed = args.slice(-8)

    if (message.content.startsWith(".mines")) {
if (message.content == ".mines"){
    message.reply("Usage: `.mines` `mine count` `seed`")
    return true;
} 

        if (message.author.id != "owner id") { //github.com/baris1337
            let now = Date.now();

            if (cooldown.has(message.author.id)) {
                let expiration = cooldown.get(message.author.id) + 5000;

                if (now < expiration) {
                    let left = (expiration - now) / 1000;
                    return message.reply({
                        content: `Before using the command ${left.toFixed(1)} wait seconds.`
                    }).then(m => {
                        setTimeout(() => {
                            m.delete();
                        }, 3000);
                    });
                }
            };

            cooldown.set(message.author.id, now);
            setTimeout(() => cooldown.delete(message.author.id), 5000);
        }

        String.prototype.shuffle = function () {
            var a = this.split(""),
                n = a.length;
        
            for(var i = n - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
            return a.join("");
        }

        let embed = new EmbedBuilder();
        embed.setColor("#10f000");

        let list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰"];

        if (mines == 1)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰"];

        if (mines == 2)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰"];

        if (mines == 3)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰"];

        if (mines == 4)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰"];

        if (mines == 5)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 6)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 7)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 8)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 9)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 10)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 11)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 12)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 13)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 14)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 15)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 16)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 17)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 18)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 19)
        list = ["❓", "❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 20)
        list = ["❓", "❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 21)
        list = ["❓", "❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 22)
        list = ["❓", "❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 23)
        list = ["❓", "❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 24)
        list = ["❓", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰", "💰"];

        if (mines == 25) return;
               
        list = list.map(value => ({
                value,
                sort: Math.random()
            }))
            .sort((a, b) => a.sort - b.sort)
            .map(({
                value
            }) => value);

        list.splice(5, 0, "\n");
        list.splice(11, 0, "\n");
        list.splice(17, 0, "\n");
        list.splice(23, 0, "\n");

        embed.addFields(
        {
            name: `**Seed**`,
            value: `~~${seed}~~`
        },
        {
            name: `**Accuracy**`,
            value: Math.floor(Math.random() * 100) + "%"

        },
        {
            name: `**Safe Cashout:**`,
            value: String(Math.floor(Math.random() * mines) + 1 )
        },

        {
            name: `**Game**\n--------------------`,
            value:   list.join("") + "\n--------------------"
        },

        {
            name: `github.com/baris1337`,
            value:  " "
        });

        message.channel.send({
            embeds: [embed]
        });
    };
});
