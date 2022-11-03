/*
  ちゃんとDBっぽくしたいンゴねぇ
  'announcementOfTime.js'からお引越ししてきました。
*/

module.exports.librarian = (index) => {
  // Linkデータたち
  const shelf = [
  {
    name: 'aot23',
    link: 'asset/audio/sound/system_sound/AoT23.mp3'
  },
  {
    name: 'diskSystem',
    link: 'https://www.youtube.com/watch?v=o4K4pik1jVo'
  },
  {
    name: 'kbc',
    link: 'asset/audio/sound/system_sound/kbc.mp3'
  },
  {
    name: 'hamburg',
    link: 'asset/audio/sound/system_sound/sisyo.mp3'
  },
  {
    name: 'power',
    link: 'asset/audio/sound/system_sound/power.mp3'
  },
  {
    name: 'beaver',
    link: 'asset/audio/sound/system_sound/beaver.mp3'
  },
  {
    name: 'pikachu',
    link: 'asset/audio/sound/system_sound/pikachu.mp3'
  },
  {
    name: 'challengerGingle',
    link: 'asset/audio/sound/system_sound/Challenger_Gingle.mp3'
  },
  {
    name: 'dddGingle',
    link: 'asset/audio/sound/system_sound/DDD_Gingle.mp3'
  },
  {
    name: 'kokosuki',
    link: 'asset/audio/sound/system_sound/KOKOSUKI.mp3'
  },
  {
    name: 'wakaruman',
    link: 'asset/audio/sound/system_sound/wakaruman.mp3'
  },
  {
    name: 'ehettenandayo',
    link: 'asset/audio/sound/system_sound/Ehe_tte_Nandayo.mp3'
  },
  {
    name: 'switch',
    link: 'asset/audio/sound/system_sound/Switch_SE.mp3'
  },
  {
    name: 'kyouheiShibata',
    link: "asset/audio/sound/system_sound/KyouheiShibata's_RunningStyle.mp3"
  },
  {
    name: 'killYou',
    link: 'asset/audio/sound/system_sound/killYou.mp3'
  },
  {
    name: 'fireMario',
    link: 'asset/audio/sound/system_sound/fireMario.mp3'
  },
  {
    name: 'yoshi90',
    link: 'asset/audio/sound/system_sound/YOSHI90.mp3'
  },
  {
    name: 'yamashita',
    link: 'asset/audio/music/2EM09Yamashita.mp3'
  },
  {
    name: 'themeOf428',
    link: 'asset/audio/music/428.mp3'
  },
  {
    name: 'lifeOnMars',
    link: 'asset/audio/music/LifeOnMars.mp3'
  },
  {
    name: 'twilight',
    link: 'asset/audio/music/Twilight.wav'
  },
  {
    name: 'emergencyMeeting',
    link: 'asset/audio/sound/system_sound/EMERGENCY_MEETING-SE.mp3'
  },
  {
    name: '#11above',
    link: 'asset/audio/music/#11above.mp3'
  },
  {
    name: 'abe',
    link: 'asset/audio/sound/system_sound/abe.wav'
  },
  {
    name: 'koike',
    link: 'asset/audio/sound/system_sound/koike.wav'
  },
  {
    name: 'valve',
    link: 'asset/audio/sound/system_sound/Valve.mp3'
  },
  {
    name: 'xpShutdown',
    link: 'asset/audio/sound/system_sound/WindowsXpShutdown.wav'
  },
  {
    name: 'dameda',
    link: 'asset/audio/sound/system_sound/dameda.wav'
  },
  {
    name: 'tekinosensuikanwohakken',
    link: 'asset/audio/sound/system_sound/tekinosensuikanwohakken.wav'
  }
  ]

  // この司書がお望みのLinkを探してさしあげますわ
  return shelf.find(({ name }) => name === index).link;
}
