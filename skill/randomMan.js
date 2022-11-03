const mrPlayer = require('./mrPlayer.js');
const linkData = require('../asset/link/linkData.js');

module.exports.announcers = async (client) => {
  var x = Math.random();

  if (x <= 0.01) {
    mrPlayer.mrPlayer(undefined, linkData.librarian('yoshi90'), client);
  } else if (x <= 0.06) {
    mrPlayer.mrPlayer(undefined, linkData.librarian('sisyo'), client);
  } else if (x <= 0.16) {
    mrPlayer.mrPlayer(undefined, linkData.librarian('pikachu'), client);
  } else if (x <= 0.33) {
    mrPlayer.mrPlayer(undefined, linkData.librarian('switch'), client);
  } else if (x <= 0.53) {
    mrPlayer.mrPlayer(undefined, linkData.librarian('kbc'), client);
  } else if (x <= 0.68) {
    mrPlayer.mrPlayer(undefined, linkData.librarian('killYou'), client);
  } else if (x <= 0.78) {
    mrPlayer.mrPlayer(undefined, linkData.librarian('fireMario'), client);
  } else {
    mrPlayer.mrPlayer(undefined, linkData.librarian('power'), client);
  }
}

module.exports.challenger = async (client, oldState, newState) => {
  var x = Math.random();

  if ((oldState.channelId === null) && (newState.channelId != null)) {
    console.log("JOIN: " + newState);
    if (x <= 0.002) {
      mrPlayer.mrPlayer(undefined, linkData.librarian('challengerGingle'), client);
    }
  }
  if ((oldState.channelId != null) && (newState.channelId === null)) {
    console.log("LEAVE: " + oldState.member);
    if (x <= 0.47) {
      mrPlayer.mrPlayer(undefined, linkData.librarian('xpShutdown'), client);
    }
  }
}