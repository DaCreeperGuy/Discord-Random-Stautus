(async () => {
    const Discord = require("discord.js");
    const Database = require("easy-json-database");
    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const s4d = {
        Discord,
        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
        joiningMember: null,
        reply: null,
        tokenInvalid: false,
        tokenError: null,
        checkMessageExists() {
            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
        }
    };
    s4d.client = new s4d.Discord.Client({
        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
        partials: ["REACTION"]
    });

    var Random_Game, Last_Game;

    function mathRandomInt(a, b) {
        if (a > b) {
            // Swap a and b to ensure a is smaller.
            var c = a;
            a = b;
            b = c;
        }
        return Math.floor(Math.random() * (b - a + 1) + a);
    }


    await s4d.client.login('Enter Token Here').catch((e) => {
        s4d.tokenInvalid = true;
        s4d.tokenError = e;
    });

    // Random Game
    s4d.client.on('ready', async () => {

        while (s4d.client && s4d.client.token) {
            await delay(50);
            Random_Game = mathRandomInt(1, 10);
            while (!(Random_Game != Last_Game)) {
                if (Random_Game == Last_Game) {
                    Random_Game = mathRandomInt(1, 10);
                }
            }
            if (Random_Game == 1) {
                s4d.client.user.setActivity(String('CS:GO'));
                Last_Game = 1;
                await delay(Number((mathRandomInt(3600, 7200))) * 1000);
            }
            if (Random_Game == 2) {
                s4d.client.user.setActivity(String('Pokemon Go'));
                Last_Game = 2;
                await delay(Number((mathRandomInt(3600, 7200))) * 1000);
            }
            if (Random_Game == 3) {
                s4d.client.user.setActivity(String('Valorent'));
                Last_Game = 3;
                await delay(Number((mathRandomInt(3600, 7200))) * 1000);
            }
            if (Random_Game == 4) {
                s4d.client.user.setActivity(String('Candy Crush'));
                Last_Game = 4;
                await delay(Number((mathRandomInt(3600, 7200))) * 1000);
            }
            if (Random_Game == 5) {
                s4d.client.user.setActivity(String('Portal 2'));
                Last_Game = 5;
                await delay(Number((mathRandomInt(3600, 7200))) * 1000);
            }
            if (Random_Game == 6) {
                s4d.client.user.setActivity(String('Cyber Punk 2077'));
                Last_Game = 6;
                await delay(Number((mathRandomInt(3600, 7200))) * 1000);
            }
            if (Random_Game == 7) {
                s4d.client.user.setActivity(String('Geometry Dash'));
                Last_Game = 7;
                await delay(Number((mathRandomInt(3600, 7200))) * 1000);
            }
            if (Random_Game == 8) {
                s4d.client.user.setActivity(String('Minecraft'));
                Last_Game = 8;
                await delay(Number((mathRandomInt(3600, 7200))) * 1000);
            }
            if (Random_Game == 9) {
                s4d.client.user.setActivity(String('GTA 5'));
                Last_Game = 9;
                await delay(Number((mathRandomInt(3600, 7200))) * 1000);
            }
            if (Random_Game == 10) {
                s4d.client.user.setActivity(String('Detroit: Become Human'));
                Last_Game = 10;
                await delay(Number((mathRandomInt(3600, 7200))) * 1000);
            }

            console.log('ran')
        }

    });


    return s4d;
})();
