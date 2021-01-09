# package.json
config

const  Discord  =  require ("discord.js");
const  dontenv  =  require ("dotenv");
const  fs  =  require ("fs");
const  path  =  require ("path");

dontenv.config ();

const  bot  =  new  Discord.Client ();
bot.commands  =  new  Discord.Collection ();
bot.queues  =  novo  Mapa ();

const  commandFiles  =  fs.readdirSync (path.join  (__dirname,  " / comandos"))
.filter ((nome do arquivo)  =>  nome do arquivo.endsWith (". js"));

para (var  nome  do  arquivo de commandFiles)  {
   comando  const =  requer (`. / comandos / $ {nome do arquivo}`);
  bot.commands.set (command.name,  command);
}

bot.login (process.env.TOKEN);

bot.on ("pronto",  ()  =>  {
  deixe  atividades  = [
      `Utilize  $ {process.env.PREFIX} ajuda  para  obter  ajuda!`,
      `$ {bot.guilds.cache.size}  servidores!`,
      `O  Moner  é  meu  Dono!`,
      `Rusty  Apex!`
    ] ,
    i  =  0;
  setInterval (  ()  =>  bot.user.setActivity (`$ {Activities [ i ++% Activities.length ] }`,  {
        digite:  "STREAMING",  url:  'https: // www.twitch.tv / moner_gsd'
      }),  1000  *  60);   // ASSISTIR,  ESCUTAR,  JOGAR,  TRANSMITIR

  bot.user
      .setStatus ("dnd") // idle,  dnd,  online,  invisível
      .catch (console.error);
console.log ("Estou  Online!")
});


bot.on ("mensagem",  (msg)  =>  {
  if  (! msg.content.startsWith (process.env.PREFIX)  ||  msg.author.bot)  return;

  const  args  =  msg.content.slice (process.env.PREFIX.length) .split ("  "); 
   comando  const =  args.shift ();

  tente  {
    bot.commands.get (comando) .execute (bot,  msg,  args);
    }  catch  (e)  {
    return  msg.reply ("Ops!  Eu  ainda  não  tenho  esse  comando.");
  }
});
