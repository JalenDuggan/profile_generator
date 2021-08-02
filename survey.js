const readline = require('readline');

const questions = ["What's your name? Nicknames are also acceptable :)", "What's an activity you like doing?",
"What do you listen to while doing that?", "Which meal is your favourite (eg: dinner, brunch, etc.)",
"What's your favourite thing to eat for that meal?", "Which sport is your absolute favourite?",
"What is your superpower? In a few words, tell us what you are amazing at!"]



const askQuest = (questions) => {
  const allAnswers = [];
  for (const quests of questions) {
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question(quests, (answer) => {
      // TODO: Log the answer in a database
      
      
      allAnswers.push(answer);
      
    
      rl.close();
    });
  }
  

  console.log(allAnswers);
}

askQuest(questions);




