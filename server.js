const { Client, MessageEmbed, MessageAttachment } = require("discord.js");
const client = new Client();
const Discord = require("discord.js");
const Booru = require("booru");
const embedex = new MessageEmbed();
const { meme } = require("memejs");
let cheweybotapi = require("cheweybot-api-wrapper");
cheweybotapi.login("a2405565-2f96-4805-adaf-6351a2507bdb");
var Jimp = require("jimp");
const FurryBotAPI = require("furrybotapi");
const fb = new FurryBotAPI(
  "FurryBotAPI/1.0.6 (https://github.com/FurryBotCo/FurryBotAPI)"
);
const UrbanDictionary = require("easyurban");
const dictionary = new UrbanDictionary();
const request = require("request");
const { RedditSimple } = require("@ipmanlk/reddit-simple");
const prompter = require("discordjs-prompter");
const Canvas = require('canvas');

client.on("ready", () => {
  console.log("ready!");
  client.user.setPresence({
    activity: {
      name: "I'm back online!",
      type: "PLAYING",
    },
    status: "idle"
  });
});

const prefix = "Emj.";
client.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.startsWith('Emj."')) {
    if (
      `${message.member.user.id}` === "418055133058826241" ||
      `${message.member.user.id}` === "551199854445985813"
    ) {
      const args = message.content
        .slice("chat".length)
        .trim()
        .split('"');
      const command = args.shift().toLowerCase();
      let text = args[0];
      message.delete(1);
      message.channel.send(text);
    } else if (
      !`${message.member.user.id}` !== "551199854445985813" ||
      `${message.member.user.id}` !== "418055133058826241"
    ) {
      message.channel.send("You do not have permissions to do that");
    }
  }
  if (message.content.startsWith("Emj.chat")) {
    const args = message.content
      .slice("chat".length)
      .trim()
      .split('"');
    const command = args.shift().toLowerCase();

    let text = args[0];
    message.delete(1);
    message.channel.send("> " + message.member.user.tag);
    message.channel.send(text);
  }

  if (!message.content.startsWith("Emj.")) {
    const args = message.content
      .slice("".length)
      .trim()
      .split("';\\[]'");
    const command = args.shift().toLowerCase();
  }

  if (message.content.startsWith("Emj.")) {
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();

    function getUserFromMention(mention) {
      if (!mention) return;

      if (mention.startsWith("<@") && mention.endsWith(">")) {
        mention = mention.slice(2, -1);

        if (mention.startsWith("!")) {
          mention = mention.slice(1);
        }

        return client.users.cache.get(mention);
      }
    }

    if (command === "about") {
      message.channel.send(
        "This is a bot made by ♡ The Eevee Queen ♡#7738 \nIt allows the use of really cool commands \nThank you for using this bot"
      );
    }

    if (command === "avatar") {
      if (args[0]) {
        const user = getUserFromMention(args[0]);
        if (!user) {
          return message.reply(
            "Please use a proper mention if you want to see someone else's avatar."
          );
        }
        const embed = {
          color: 16741314,
          image: {
            url: user.displayAvatarURL() + "?size=1024"
          },
          url: user.displayAvatarURL() + "?size=1024",
          title: user.username + "'s avatar"
        };
        message.channel.send({ embed });
      } else {
        const embed = {
          color: 16741314,
          image: {
            url: message.author.displayAvatarURL() + "?size=1024"
          },
          url: message.author.displayAvatarURL() + "?size=1024",
          title: message.author.username + "'s avatar"
        };
        message.channel.send({ embed });
      }
    }

    if (command === "wip") {
      message.channel.send("This command is a work in progress");
    }

    if (command === "help") {
      if (message.channel.nsfw) {
        const Embed = new MessageEmbed()
          .setColor("#ff73c2")
          .setTitle("Help")
          .setAuthor("Emoji Test", "https://i.imgur.com/3A890C8.jpg")
          .setDescription("Help menu for Emoji Test")
          .setThumbnail("https://i.imgur.com/3A890C8.jpg")
          .addField("Invite", "DM me server invite link")
          .addField("User comands", "avatar {@user} \ninfo {@user}", true)
          .addField(
            "Action commands",
            "hug, kiss, cuddle, lick, flop, boop",
            true
          )
          .addField("Nsfw action commands", "nhug, nkiss, ncuddle", true)
          .addField(
            "Image commands",
            "e926(broken) \nmeme \nimage \nedit",
            true
          )
          .addField("Nsfw image commands", "e621(broken) \nr34 \nyiff", true)
          .addField("Misc commands", 'help \nchat {"text"} \ninvite', true)
          .setTimestamp()
          .setFooter("Requested by " + `${message.author.username}`);
        message.channel.send(Embed);
      } else {
        const Embed = new MessageEmbed()
          .setColor("#ff73c2")
          .setTitle("Help")
          .setAuthor("Emoji Test", "https://i.imgur.com/3A890C8.jpg")
          .setDescription("Help menu for Emoji Test")
          .setThumbnail("https://i.imgur.com/3A890C8.jpg")
          .addField("Invite", "DM me server invite link")
          .addField("User comands", "avatar {@user} \ninfo {@user}", true)
          .addField(
            "Action commands",
            "hug, kiss, cuddle, lick, flop, boop",
            true
          )
          .addField("Image commands", "e926 \nmeme \nimage \nedit", true)
          .addField("Misc commands", 'help \nchat {"text"} \ninvite', true)
          .setTimestamp()
          .setFooter("Requested by " + `${message.author.username}`);
        message.channel.send(Embed);
      }
    }
    if (command === "spy") {
      if (message.author.id === "418055133058826241") {
        let user = client.users.cache.get("551199854445985813");
        console.log(user);
        message.channel.send(
          user.typingIn("630059113753214999") + ":" + user.lastMessage
        );
      }
    }
    if (command === "info") {
      let user;
      if (args[0]) {
        user = getUserFromMention(args[0]);
        if (!user) {
          return message.reply(
            "Please use a proper mention if you want to see someone else's info."
          );
        }
      } else {
        user = message.author;
      }
      const embed = {
        color: 16741314,
        thumbnail: {
          url: user.displayAvatarURL()
        },
        title: user.username + "#" + user.discriminator + "'s profile",
        fields: [
          {
            name: "User Id:",
            value: user.id
          },
          {
            name: "Bot?",
            value: user.bot
          },
          {
            name: "User Created:",
            value: user.createdAt
          },
          {
            name: "User Presence:",
            value: user.presence.status
          }
        ]
      };
      message.channel.send({ embed });
    }
    if (command === "meme") {
      if(1===1){
      meme("dankmemes", function(err, data) {
        if (err) return console.error(err);
        const embed = {
          title: data.title.toString(),
          url: data.url.toString(),
          color: 16741314,
          image: {
            url: data.url.toString()
          }
        };
        message.channel.send({ embed });
      });}
    }
    if (command === "r/") {
      message.channel.send("Sorry, but this command is currently broken");
    }
    if (
      [
        "space",
        "cat",
        "dog",
        "birb",
        "nature",
        "fantasy-art",
        "plane",
        "otter",
        "rabbit",
        "snake",
        "car",
        "turtle",
        "duck",
        "panda",
        "wolf",
        "fox"
      ].includes(command)
    ) {
      let search = command;
      cheweybotapi.image
        .get(search)
        .then(res => {
          const embed = {
            color: 16741314,
            image: {
              url: res.data
            }
          };
          message.channel.send({ embed });
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (command === "image") {
      message.channel.send(
        "I can search for: \nspace, cat, dog, birb, nature, fantasy-art, plane, otter, rabbit, snake, car, turtle, duck, panda, wolf, and fox"
      );
    }
    if (["grey", "invert", "flip", "blur"].includes(command)) {
      var attachment12 = message.attachments;
      if (command === "grey") {
        Jimp.read(attachment12.array()[0], (err, lenna) => {
          if (err) throw err;
          lenna.greyscale().write("lena-small-bw.jpg");
          setTimeout(function() {
            const attachment = new MessageAttachment("lena-small-bw.jpg");
            message.channel.send(attachment);
          }, 25);
        });
      }
      if (command === "invert") {
        Jimp.read(attachment12.array()[0], (err, lenna) => {
          if (err) throw err;
          lenna.invert().write("lena-small-bw.jpg");
          setTimeout(function() {
            const attachment = new MessageAttachment("lena-small-bw.jpg");
            message.channel.send(attachment);
          }, 25);
        });
      }
      if (command === "flip") {
        var empt = args[0] == null;
        if (empt === true) {
          message.channel.send("Plese specify a parameter (horz/vert)");
        }
        if (args[0] === "horz") {
          Jimp.read(attachment12.array()[0], (err, lenna) => {
            if (err) throw err;
            lenna.flip(true, false).write("lena-small-bw.jpg");
            setTimeout(function() {
              const attachment = new MessageAttachment("lena-small-bw.jpg");
              message.channel.send(attachment);
            }, 25);
          });
        }
        if (args[0] === "vert") {
          Jimp.read(attachment12.array()[0], (err, lenna) => {
            if (err) throw err;
            lenna.flip(false, true).write("lena-small-bw.jpg");
            setTimeout(function() {
              const attachment = new MessageAttachment("lena-small-bw.jpg");
              message.channel.send(attachment);
            }, 25);
          });
        }
      }
      if (command === "blur") {
        var empt = args[0] == null;
        if (empt === true) {
          message.channel.send(
            "Plese specify a parameter (soft, medium, hard, extreme)"
          );
        }
        if (args[0] === "soft") {
          Jimp.read(attachment12.array()[0], (err, lenna) => {
            if (err) throw err;
            lenna.blur(10).write("lena-small-bw.jpg");
            setTimeout(function() {
              const attachment = new MessageAttachment("lena-small-bw.jpg");
              message.channel.send(attachment);
            }, 25);
          });
        }
        if (args[0] === "medium") {
          Jimp.read(attachment12.array()[0], (err, lenna) => {
            if (err) throw err;
            lenna.blur(30).write("lena-small-bw.jpg");
            setTimeout(function() {
              const attachment = new MessageAttachment("lena-small-bw.jpg");
              message.channel.send(attachment);
            }, 25);
          });
        }
        if (args[0] === "hard") {
          Jimp.read(attachment12.array()[0], (err, lenna) => {
            if (err) throw err;
            lenna.blur(60).write("lena-small-bw.jpg");
            setTimeout(function() {
              const attachment = new MessageAttachment("lena-small-bw.jpg");
              message.channel.send(attachment);
            }, 25);
          });
        }
        if (args[0] === "extreme") {
          Jimp.read(attachment12.array()[0], (err, lenna) => {
            if (err) throw err;
            lenna.blur(150).write("lena-small-bw.jpg");
            setTimeout(function() {
              const attachment = new MessageAttachment("lena-small-bw.jpg");
              message.channel.send(attachment);
            }, 25);
          });
        }
      }
    }
    if (command === "dm") {
      let dUser = getUserFromMention(args[0]);
      let dMessage = args.join(" ").slice(22);
      dUser.send(`${message.member.user.tag} sent you a message: ${dMessage}`);
      message.channel.send("Dm sent to " + dUser.tag);
    }
    if (command === "ping") {
      var ping = Date.now() - message.createdTimestamp;
      message.channel.send("Pong! (" + ping + " ms)");
    }

    if (
      ["hug", "kiss", "cuddle", "boop", "lick", "hold", "propose"].includes(
        command
      )
    ) {
      let result = 1;
      const user = getUserFromMention(args[0]);
      fb.apiRequest("v1/furry/sfw", true, command, true).then(
        res => (result = res.response.image)
      );
      setTimeout(function() {
        if (command === "propose") {
          const embed = {
            title:
              message.author.username +
              "  " +
              command +
              "es to  " +
              user.username,
            url: result,
            color: 16741314,
            image: {
              url: result
            }
          };
          message.channel.send({ embed });
        } else if (command.endsWith("s")) {
          const embed = {
            title:
              message.author.username + "  " + command + "es  " + user.username,
            url: result,
            color: 16741314,
            image: {
              url: result
            }
          };
          message.channel.send({ embed });
        } else {
          const embed = {
            title:
              message.author.username + "  " + command + "s  " + user.username,
            url: result,
            color: 16741314,
            image: {
              url: result
            }
          };
          message.channel.send({ embed });
        }
      }, 1000);
    }
    if (["nhug", "nkiss", "ncuddle", "nlick"].includes(command)) {
      if (message.channel.nsfw) {
        let cmd = command.slice(1);
        let result = 1;
        let user = getUserFromMention(args[0]);
        fb.apiRequest("v1/furry/nsfw", false, cmd, true).then(
          res => (result = res.response.image)
        );
        setTimeout(function() {
          if (cmd.endsWith("s")) {
            const embed = {
              title:
                message.author.username +
                "  " +
                cmd +
                "es  " +
                user.username +
                "  lewdly",
              url: result,
              color: 16741314,
              image: {
                url: result
              }
            };
            message.channel.send({ embed });
          } else {
            const embed = {
              title:
                message.author.username +
                "  " +
                cmd +
                "s  " +
                user.username +
                " lewdly",
              url: result,
              color: 16741314,
              image: {
                url: result
              }
            };
            message.channel.send({ embed });
          }
        }, 1000);
      } else {
        message.channel.send(
          "This command can only be used in channels marked nsfw"
        );
      }
    }
    if (["bang", "suck"].includes(command)) {
      if (message.channel.nsfw) {
        let cmd = command;
        let result = 1;
        let user = getUserFromMention(args[0]);
        fb.apiRequest("v1/furry/nsfw", false, cmd, true).then(
          res => (result = res.response.image)
        );
        setTimeout(function() {
          if (cmd.endsWith("s")) {
            const embed = {
              title:
                message.author.username + "  " + cmd + "es  " + user.username,
              url: result,
              color: 16741314,
              image: {
                url: result
              }
            };
            message.channel.send({ embed });
          } else {
            const embed = {
              title:
                message.author.username + "  " + cmd + "s  " + user.username,
              url: result,
              color: 16741314,
              image: {
                url: result
              }
            };
            message.channel.send({ embed });
          }
        }, 1000);
      } else {
        message.channel.send(
          "This command can only be used in channels marked nsfw"
        );
      }
    }
    if (command === "yiff") {
      let opt = args[0];
      var empt = args[0] == null;
      if (message.channel.nsfw) {
        if (empt === true) {
          message.channel.send(
            "I can get: dickgirl, straight, lesbian, and gay"
          );
        }
        if (empt === false) {
          let resul = 1;
          let url = 1;
          let img = 1;
          fb.apiRequest("furry", false, "yiff/" + opt, true).then(
            res => (resul = res)
          );
          setTimeout(function() {
            const embed = {
              title: "Got yiff with " + opt,
              url: resul.response.image,
              color: 16741314,
              image: {
                url: resul.response.image
              }
            };
            setTimeout(function() {
              message.channel.send({ embed });
            }, 500);
          });
        }
      } else {
        message.channel.send(
          "This command can only be used in channels marked nsfw"
        );
      }
    }
    if (command === "actions") {
      const Embed = new MessageEmbed()
        .setColor("#ff73c2")
        .setTitle("Action Commands")
        .addField("Sfw actions", "hug, kiss, cuddle, lick, flop", true)
        .addField("Nsfw actions", "nhug, nkiss, ncuddle", true)
        .addField("Example", "Emj.hug {@user}");
      message.channel.send(Embed);
    }
    if (command === "getemoji") {
      let term = args[0];
      console.log(term);
      message.channel.send(
        "https://cdn.discordapp.com/emojis/" + term + ".png"
      );
    }
    if (command === "8ball") {
      let ans = Math.floor(Math.random() * 13);
      if (ans === 0) {
        message.channel.send("Yes");
      } else if (ans === 1) {
        message.channel.send("No");
      } else if (ans === 2) {
        message.channel.send("Possibly");
      } else if (ans === 3) {
        message.channel.send("Definitly");
      } else if (ans === 4) {
        message.channel.send("Definitly not");
      } else if (ans === 5) {
        message.channel.send("There's a chance");
      } else if (ans === 6) {
        message.channel.send("Ask me later");
      } else if (ans === 7) {
        message.channel.send("Only today");
      } else if (ans === 8) {
        message.channel.send("All signs point to no");
      } else if (ans === 9) {
        message.channel.send("All signs point to yes");
      } else if (ans === 10) {
        message.channel.send("Tomorrow");
      } else if (ans === 11) {
        message.channel.send("Probably");
      } else if (ans === 12) {
        message.channel.send("Probably not");
      }
    }
    if (command === "ship") {
      let desc = 1;
      let user2 = 1;
      let user1 = getUserFromMention(args[0]);
      if (args[1]) {
        user2 = getUserFromMention(args[1]);
      } else {
        user1 = message.author;
        user2 = getUserFromMention(args[0]);
      }
      let rate = Math.floor(Math.random() * 101);
      if (
        user1.id === "418055133058826241" &&
        user2.id === "551199854445985813"
      ) {
        rate = 101;
      }
      if (
        user2.id === "418055133058826241" &&
        user1.id === "551199854445985813"
      ) {
        rate = 101;
      }
      if (rate < 10) {
        desc = rate + "% " + "`..........`";
      }
      if (rate > 9) {
        desc = rate + "% " + "`█.........`";
      }
      if (rate > 19) {
        desc = rate + "% " + "`██.......`";
      }
      if (rate > 29) {
        desc = rate + "% " + "`███.....`";
      }
      if (rate > 39) {
        desc = rate + "% " + "`████......`";
      }
      if (rate > 49) {
        desc = rate + "% " + "`█████.....`";
      }
      if (rate > 59) {
        desc = rate + "% " + "`██████....`";
      }
      if (rate > 69) {
        desc = rate + "% " + "`███████...`";
      }
      if (rate > 79) {
        desc = rate + "% " + "`████████..`";
      }
      if (rate > 89) {
        desc = rate + "% " + "`█████████.`";
      }
      if (rate > 99) {
        desc = rate + "% " + "`██████████`";
      }
      let title = user1.username + "  X  " + user2.username;
      const embed = {
        title: title,
        description: desc,
        color: 16741314
      };
      message.channel.send({ embed });
    }
    if (command === "waifurate") {
      let desc = 1;
      let user1 = 1;
      if (args[0]) {
        user1 = getUserFromMention(args[0]);
      } else {
        user1 = message.author;
      }
      let rate = Math.floor(Math.random() * 101);
      if (
        user1.id === "418055133058826241" ||
        user1.id === "551199854445985813"
      ) {
        rate = 100;
      }
      if (rate < 10) {
        desc = rate + "% " + "`..........`";
      }
      if (rate > 9) {
        desc = rate + "% " + "`█.........`";
      }
      if (rate > 19) {
        desc = rate + "% " + "`██.......`";
      }
      if (rate > 29) {
        desc = rate + "% " + "`███.....`";
      }
      if (rate > 39) {
        desc = rate + "% " + "`████......`";
      }
      if (rate > 49) {
        desc = rate + "% " + "`█████.....`";
      }
      if (rate > 59) {
        desc = rate + "% " + "`██████....`";
      }
      if (rate > 69) {
        desc = rate + "% " + "`███████...`";
      }
      if (rate > 79) {
        desc = rate + "% " + "`████████..`";
      }
      if (rate > 89) {
        desc = rate + "% " + "`█████████.`";
      }
      if (rate > 99) {
        desc = rate + "% " + "`██████████`";
      }
      let title = user1.username + "'s waifu rating";
      const embed = {
        title: title,
        description: desc,
        color: 16741314
      };
      message.channel.send({ embed });
    }
    if (command === "pingstorm") {
      const ping = args[0];
      var i;
      for (i = 0; i < 5; i++) {
        message.channel.send(ping);
      }
    }
    if (command === "urban") {
      function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      let num = Math.floor(Math.random() * 1);
      let search = "";
      let l = 0;
      while (args[l]) {
        if (search === "") {
          search = search + args[l];
        } else {
          search = search + " " + args[l];
        }
        l = l + 1;
      }
      const result = await dictionary.lookup(search);
      const embed = {
        title: result.list[num].word,
        description: result.list[num].definition,
        color: 16741314,
        url: result.list[num].permalink
      };
      message.channel.send({ embed });
    }
    if (command === "inspire") {
      request("http://inspirobot.me/api?generate=true", function(
        error,
        response,
        body
      ) {
        if (!error && response.statusCode == 200) {
          message.channel.send({
            embed: {
              color: 16741314,
              title: "Be inspired",
              url: body,
              image: {
                url: body
              }
            }
          });
        } else {
          var errimage =
            "http://inspirobot.me/website/images/inspirobot-dark-green.png";
          message.channel.send({
            embed: {
              color: 16741314,
              title: "We have recieved an error, sorry for the inconvenience",
              image: {
                url: errimage
              }
            }
          });
        }
      });
    }
    if (command === "clear") {
      await message.channel.messages
        .fetch({ limit: args[0] })
        .then(messages => {
          if (message.author.id === "418055133058826241") {
            message.channel.bulkDelete(messages);
          }
        });
    }
    if (command === "calculate") {
      let ans;
      let num1 = Number(args[0]);
      let num2 = Number(args[2]);
      if (args[1] === "+") {
        ans = num1 + num2;
      } else if (args[1] === "-") {
        ans = num1 - num2;
      } else if (args[1] === "/") {
        ans = num1 / num2;
      } else if (args[1] === "*") {
        ans = num1 * num2;
      }
      message.channel.send("The answer is: " + ans);
    }
    if (command === "blank") {
      message.channel.send("‎");
    }
    if (command === "prompt") {
      prompter
        .message(message.channel, {
          question: "Do you like bacon?",
          userId: message.author.id,
          max: 1,
          timeout: 10000
        })
        .then(responses => {
          // If no responses, the time ran out
          if (!responses.size) {
            return message.channel.send(`No time for questions? I see.`);
          }
          // Gets the first message in the collection
          const response = responses.first();

          // Respond
          message.channel.send(`**${response}** Is that so?`);
        });
    }
    if (command === "throw") {
      if (args[0].startsWith("<@")) {
        let user = getUserFromMention(args[0]);
        if (args[1]) {
          let user2 = getUserFromMention(args[1]);
          message.channel.send(
            "Threw **" + user.username + "** at **" + user2.username + "**"
          );
        } else {
          message.channel.send("Threw **" + user.username + "**");
        }
      } else {
        let user2 = getUserFromMention(args[1]);
        message.channel.send(
          "Threw **" + args[0] + "** at **" + user2.username + "**"
        );
      }
    }
    if (command === "hmmm") {
      let thonk = Math.floor(Math.random() * 7);
      if (thonk === 0) {
        message.channel.send(`<a:thonk:670692712369881109>`);
      } else if (thonk === 1) {
        message.channel.send(`<a:thonk2:670696151384588288>`);
      } else if (thonk === 2) {
        message.channel.send(`<a:thonk3:670696235853676563>`);
      } else if (thonk === 3) {
        message.channel.send(`<a:thonk4:670696285451583509>`);
      }else if (thonk===4){
        message.channel.send(`<a:thonk5:707730939119140924>`)
      }else if (thonk===5){
        message.channel.send(`<a:thonk6:707731660807995562>`)
      }
      else if (thonk===6){
        message.channel.send(`<a:thonk7:707733405202382868>`)
      }
    }
    if(["gay","trans","bi","lesbian","pan"].includes(command)){
      let flag
      let member = message.author
      if (args[0]) {
        member = getUserFromMention(args[0]);}
      const canvas = Canvas.createCanvas(500, 500);
	    const ctx = canvas.getContext('2d');
      const background = await Canvas.loadImage(member.displayAvatarURL({ format: 'jpg' })+"?size=1024");
	    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      if (command==="gay"){flag = await Canvas.loadImage("https://i.imgur.com/4ilJvmG.png");
      }else if(command==="trans"){flag = await Canvas.loadImage("https://i.imgur.com/8EkOxM1.png");
      }else if(command==="bi"){flag = await Canvas.loadImage("https://i.imgur.com/pDb4TeD.png");
      }else if(command==="lesbian"){flag = await Canvas.loadImage("https://i.imgur.com/CWBtmqA.png");
      }else if(command==="pan"){flag = await Canvas.loadImage("https://i.imgur.com/vOda8WZ.png");
      }
	    ctx.drawImage(flag, 0, 0, canvas.width, canvas.height);
      const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'flag.jpg');
      message.channel.send(attachment)
    }
  }
});

client.login(process.env.TOKEN2);

const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
