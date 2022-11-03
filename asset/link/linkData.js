/*
  ちゃんとDBっぽくしたいンゴねぇ
  'announcementOfTime.js'からお引越ししてきました。
*/

module.exports.librarian = (index) => {
  // Linkデータたち
  const shelf = [
  {
    name: 'aot23',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2F%E3%82%A6%E3%82%A8%E3%83%92%E3%82%99%E3%83%83%E3%83%88%E7%A4%BE%E5%AE%9A%E6%99%82%E6%94%BE%E9%80%81.ogg?v=1588249193404'
  },
  {
    name: 'diskSystem',
    link: 'https://www.youtube.com/watch?v=o4K4pik1jVo'
  },
  {
    name: 'kbc',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2F%E3%82%A4%E3%82%B9%E3%83%A9%E3%82%A8%E3%83%AB%E3%81%AB%E3%81%A8%E3%81%A3%E3%81%A8%E3%81%A8%E3%82%B9%E3%83%92%E3%82%9A%E3%83%B3.mp3?v=1592481664996'
  },
  {
    name: 'hamburg',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2Fsisyo.mp3?v=1609674269671'
  },
  {
    name: 'power',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2FOldSpice.mp3?v=1609675229182'
  },
  {
    name: 'beaver',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2Fbeaver.mp3?v=1609671671760'
  },
  {
    name: 'pikachu',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2FPikachu.mp3?v=1612181536593'
  },
  {
    name: 'challengerGingle',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2FChallenger_Gingle.mp3?v=1613390764092'
  },
  {
    name: 'dddGingle',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2FDDD_Gingle.mp3?v=1613390763592'
  },
  {
    name: 'kokosuki',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2FKOKOSUKI.mp3?v=1613729517078'
  },
  {
    name: 'wakaruman',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2Fwakaruman.mp3?v=1613739866462'
  },
  {
    name: 'ehettenandayo',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2FEhe%20tte%20Nandayo.mp3?v=1613739880224'
  },
  {
    name: 'switch',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2FSwitch_SE.mp3?v=1614688336961'
  },
  {
    name: 'peacefullTimesQ',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2FpeacefulTimesQ.mp3?v=1614699043024'
  },
  {
    name: 'peacefullTimesS',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2FpeacefulTimesS.mp3?v=1614853947285'
  },
  {
    name: 'kyouheiShibata',
    link: "https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2FKyouheiShibata's_RunningStyle.mp3?v=1614840552400"
  },
  {
    name: 'killYou',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2FkillYou.mp3?v=1617282190828'
  },
  {
    name: 'fireMario',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2FfireMario.mp3?v=1618502913593'
  },
  {
    name: 'yoshi90',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2FYOSHI90.mp3?v=1623762684444'
  },
  {
    name: 'yamashita',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2F2EM09_Yamahita.mp3?v=1613846874618'
  },
  {
    name: 'themeOf428',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2F428.ogg?v=1590348288922'
  },
  {
    name: 'lifeOnMars',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2FLife-On-Mars%3F.ogg?v=1591803839472'
  },
  {
    name: 'twilight',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2F02%20Twilight.mp3?v=1612180895908'
  },
  {
    name: 'emergencyMeeting',
    link: 'https://cdn.glitch.me/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2FEMERGENCY_MEETING-SE.mp3?v=1639379028697'
  },
  {
    name: '#11above',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2F11above.ogg?v=1588065381293'
  },
  {
    name: 'abe',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2F%E5%AE%89%E5%80%8D%E6%99%8B%E4%B8%89.ogg?v=1588595064568'
  },
  {
    name: 'koike',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2F%E5%B0%8F%E6%B1%A0%E7%99%BE%E5%90%88%E5%AD%90.ogg?v=1588595064970'
  },
  {
    name: 'valve',
    link: 'https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2Fvalve.ogg?v=1589352035171'
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
