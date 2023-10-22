const mrPlayer = require("./mrPlayer.js");
const linkData = require("../asset/link/linkData.js");

module.exports.logo = async (message, client) => {
  let logo = [
    "             .,-:;//;:=,",
    "         . :H@@@MM@M#H/.,+%;,",
    "      ,/X+ +M@@M@MM%=,-%HMMM@X/,",
    "     -+@MM; $M@@MH+-,;XMMMM@MMMM@+-",
    "    ;@M@@M- XM@X;. -+XXXXXHHH@M@M#@/.",
    "  ,%MM@@MH ,@%=            .---=-=:=,.",
    "  -@#@@@MX .,              -%HX$$%%%+;",
    " =-./@M@M$                  .;@MMMM@MM:",
    " X@/ -$MM/                    .+MM@@@M$",
    ",@M@H: :@:                    . -X#@@@@-",
    ",@@@MMX, .                    /H- ;@M@M=",
    ".H@@@@M@+,                    %MM+..%#$.",
    " /MMMM@MMH/.                  XM@MH; -;",
    "  /%+%$XHH@$=              , .H@@@@MX,",
    "   .=--------.           -%H.,@@@@@MX,",
    "   .%MM@@@HHHXX$$$%+- .:$MMX -M@@MM%.",
    "     =XMMM@MM@MM#H;,-+HMM@M+ /MMMX=",
    "       =%@M@M#@$-.=$@MM@@@M; %M%=",
    "         ,:+$+-,/H#MMMMMMM@- -,",
    "               =++%%%%+/:-.",
  ];
  let count = await logo.length;
  var ascii = (await logo[0]) + "\n";

  mrPlayer.mrPlayer(undefined, linkData.librarian("valve"), client);
  var before = await message.channel.send("```" + ascii + "```");
  for (let i = 1; i < count; i++) {
    ascii += (await logo[i]) + "\n";
    before = await before.edit("```" + ascii + "```");
    console.log(i);
  }
};
