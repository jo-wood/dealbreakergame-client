//function to get precent match with other users
//parameters are the index value of the selection you made and the selection the other user name.
//returns a precentage between 33% to 100%
//0% is give to individuals who dont respond
const gameAnswers = require('./dummyAnswers');

let degreeOfSeperation = (answer) => {
    let map = [];
    switch (answer) {
        case 'optionA':
            map = [1,2,3,2];
            break;
        case 'optionB':
            map = [2,1,2,3];
            break;
        case 'optionC':
            map = [3,2,1,2];
            break;
        case 'optionD':
            map = [2,3,2,1];
            break;
        default:
            map = [];
    }
    return map;
}

let calculateMatchPercentage = (user_choice, match_choice) => {
  let map = degreeOfSeperation(user_choice);
  let degree = 0;
      switch (match_choice) {
        case 'optionA':
          degree = map[0];
          break;
        case 'optionB':
          degree = map[1];
          break;
        case 'optionC':
          degree = map[2];
          break;
        case 'optionD':
          degree = map[3];
          break;
        default:
          degree = 0;
          break;
    }

    if  (match_choice !== undefined) {
        return (Math.floor(100 / degree))
    } else {
        return 0;
    }
}

let updateTotalMatchPercentage = (matchPrecentages, lastQuestionResult) => {
    matchPrecentages.push(lastQuestionResult);
    return matchPrecentages;
}

let currentMatchScore = (matchPercentages) => {
    let sum = matchPercentages.reduce((previous, current) => current += previous);
    return sum / matchPercentages.length;
}



function setUpUsers(gameAns) {
  let totalQuestions = 0;
  let userTracking = {};
  for (let q in gameAns) {
    totalQuestions++;
    let users = Object.keys(gameAns[q]);
    for (let user of users) {
      if (user in userTracking) {
        // do nothing
      } else {
        userTracking[user] = [];
      }
    }
  }
  return {totalQ: totalQuestions, userTracking}
}


let sortedUserObject = (userMatchLog) => {

    //convert to array to sort based on match percent
    var sortedArray = [];
    for (let userID in userMatchLog) {
        sortedArray.push([userID, userMatchLog[userID]]);
    }

    sortedArray.sort(function(a, b) {
        return b[1] - a[1];
    });

    //convert back to object
    let resultObject = {}
    for(let userLog of sortedArray) {
        let userID = userLog[0];
        resultObject[userID] = userLog[1];
    }

    //small issue it is an object with this return and not a array that can be sorted and incrimented
    return resultObject;
}

function calculateMatchAverage(qArr, totalQuestions) {
  let userTotals = {};

  for (let q of qArr) {
  let users = Object.keys(q);
    // add them users as keys
    for (let user of users) {
      if (user in userTotals) {
        // do nothing      
      } else {
        userTotals[user] = 0;
      }
    }
    for (let user of users ) {
      userTotals[user] += q[user]
    }
  }
  
  for (let result in userTotals) {
    userTotals[result] = Math.floor(userTotals[result] / totalQuestions);
  }
  return userTotals;  
}


function calculatePerQuestionMatch(userChoice, questionAnswers){
  let storeMatchAns = {};
    for (let user in questionAnswers) {
    let matchChoice = questionAnswers[user];
    storeMatchAns[user] = calculateMatchPercentage(userChoice, matchChoice);
  }  
  return storeMatchAns;
}


function calculateSumMatches(game) {
  let setUp = setUpUsers(game);
  let totalQuestions = setUp.totalQ;
  let usersRanks = setUp.userTracking;
  let finalRanking = {};

  for (let user in usersRanks) {
    let userQTally = [];
    finalRanking[user] = {};
    for (let question in game) {
      let answers = game[question];
      let userChoice = answers[user];
      // console.log(userChoice, answers);
      let percent = calculatePerQuestionMatch(userChoice, answers);
      userQTally.push(percent)            
    }
    let average = calculateMatchAverage(userQTally, totalQuestions)
    delete average[user];
    let sorted = sortedUserObject(average);
    finalRanking[user] = sorted;
  }  
return finalRanking;
}
let gameMatches = calculateSumMatches(gameAnswers);
console.log(gameMatches);
