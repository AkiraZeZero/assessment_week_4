const fortunes = [
  "Your mentality is alert, practical, and analytical.",
  "Your mind is creative, original and alert.",
  "Your success will astonish everyone.",
  "Your talents will be recognized and suitably rewarded.",
  "Your life will get more and more exciting.",
];
const compliments = [
  "Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
];
const acnh = [
  "If you are sleepy then go to sleep, its that simple. Remember, my advice may be taken or ignored but never refunded.",
  "Don't believe everything you read. Except for this of course. Remember, my advice may be taken or ignored but never refunded.",
  "To improve your mood try baking cookies, I mean obviously. Remember, my advice may be taken or ignored but never refunded.",
  "A secret skill of yours could save a life. Remember, my advice may be taken or ignored but never refunded.",
  "It's OK to be frank with people or josh with them but try not to rob or sue them. Remember, my advice may be taken or ignored but never refunded.",
];
const taco = [
  "You're gonna have a baja Blast day!",
  "Help! I'm a genie trapped in a sauce packet.",
  "Help! I can't tell where I am. It's dark and I can hear laughing.",
  "If you throw this, would it be a flying saucer?",
  "Live life one sauce packet at a time.",
  "This is gonna end with you eating me, isn't it?",
  "Why order a taco when you can ask it politely?",
];

const randomIndex = (length) => Math.floor(Math.random() * length);

module.exports = {
  getCompliment: (req, res) => {
    let randomCompliment = compliments[randomIndex(compliments.length)];
    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    let randomFortunes = fortunes[randomIndex(fortunes.length)];
    res.status(200).send(randomFortunes);
  },
  getAcnh: (req, res) => {
    let randomAcnh = acnh[randomIndex(acnh.length)];
    res.status(200).send(randomAcnh);
  },
  getTaco: (req, res) => {
    let randomTaco = taco[randomIndex(taco.length)];
    console.log('test')
    res.status(200).send(randomTaco);
  },
  postTaco: (req, res) => {
    let newTaco = req.body.taco
    console.log('controller', newTaco)
    taco.push(newTaco)
    res.status(200).send(taco)
  },
  postAcnh: (req, res) => {
    let newAcnh = req.body.acnh;
    console.log('acnh controller', newAcnh)
    acnh.push(newAcnh)
    res.status(200).send(acnh)
  }

  // I am not having a baja blast ｡･ﾟﾟ*(>д<)*ﾟﾟ･｡
};
