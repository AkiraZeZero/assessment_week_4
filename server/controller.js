const { format } = require("path");

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Your mentality is alert, practical, and analytical.", "Your mind is creative, original and alert.", "Your success will astonish everyone.", "Your talents will be recognized and suitably rewarded.", "Your life will get more and more exciting."];
      
        let randomIndex2 = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex2];
      
        res.status(200).send(randomFortunes);
    },
    getAcnh: (req, res) => {
        const acnh = ["If you are sleepy then go to sleep, its that simple. Remember, my advice may be taken or ignored but never refunded.", "Don't believe everything you read. Except for this of course. Remember, my advice may be taken or ignored but never refunded.", "To improve your mood try baking cookies, I mean obviously. Remember, my advice may be taken or ignored but never refunded.", "A secret skill of yours could save a life. Remember, my advice may be taken or ignored but never refunded.", "It's OK to be frank with people or josh with them but try not to rob or sue them. Remember, my advice may be taken or ignored but never refunded."];
      
        let randomIndex3 = Math.floor(Math.random() * acnh.length);
        let randomAcnh = acnh[randomIndex3];
      
        res.status(200).send(randomAcnh);
    },
    getTaco: (req, res) => {
        const taco = ["You're gonna have a baja Blast day!", "Help! I'm a genie trapped in a sauce packet.", "Help! I can't tell where I am. It's dark and I can hear laughing.", "If you throw this, would it be a flying saucer?", "Live life one sauce packet at a time.", "This is gonna end with you eating me, isn't it?", "Why order a taco when you can ask it politely?"];
      
        let randomIndex4 = Math.floor(Math.random() * taco.length);
        let randomTaco = taco[randomIndex4];
      
        res.status(200).send(randomTaco);
    },
    
    postInspration: (req, res) => {
        form.push()
        res.status(200).send(inspoBtn)
    }      
    //     try {
    //       const response = await axios.post("https://localhost:4000/api/)
    //       console.log("Request successful!")
    //     } catch (error) {
    //       if (error.response) {
    //         console.log(error.reponse.status)
    //       } else {
    //         console.log(error.message)
    //       }
    //     }
    //   }
      
    //   postData();
      

    // I am not having a baja blast ｡･ﾟﾟ*(>д<)*ﾟﾟ･｡

}