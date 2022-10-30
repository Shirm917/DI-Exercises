// Instructions
const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
   const usernames = [];
    Object.keys(gameInfo).forEach(index => {
       let result = gameInfo[index]["username"] + "!";
       usernames.push(result);
    });

// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
    const winners = [];
    Object.keys(gameInfo).forEach(index => {
       if (gameInfo[index]["score"] > 5) {
           let username = gameInfo[index]["username"];
           winners.push(username);
       }
    });

    // Find and display the total score of the users.
    let totalScore = 0;
    Object.keys(gameInfo).forEach(index => {
        let scores = gameInfo[index]["score"];
        totalScore += scores;
    });

    console.log(totalScore);
    
