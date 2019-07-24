//function to get precent match with other users
//parameters are the index value of the selection you made and the selection the other user name.
//returns a precentage between 33% to 100%
//0% is give to individuals who dont respond

let calculateMatchPercentage = (user_choice, match_choice) => {
    let map = [];
    switch (user_choice) {
        case 0:
            map = [1,2,3,2];
            break;
        case 1:
            map = [2,1,2,3];
            break;
        case 2:
            map = [3,2,1,2];
            break;
        case 3:
            map = [2,3,2,1];
            break;
        default:
            map = [];
    }

    if  (match_choice !== undefined) {
        return 100 / map[match_choice];
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


let matchQuestionsMatch = [100,50, 50, 0, 100, 50, 50];
// console.log(calculateMatchPercentage(0, 0));  100%
// console.log(calculateMatchPercentage(0, 1));  50%
// console.log(calculateMatchPercentage(0, 2));  33%
// console.log(calculateMatchPercentage(0));     0%
console.log("visability amount: " + currentMatchScore(matchQuestionsMatch) + ' %');

//example of user matchLog from state example User4
let matchLog = {
    user1: [100, 50, 50, 0, 100, 50, 50],
    user2: [50, 50, 50, 100, 100, 50, 50],
    user3: [100, 33, 50, 100, 50, 50, 50]
};

console.log(matchLog.user2);
matchLog.user2 = updateTotalMatchPercentage(matchLog.user2, calculateMatchPercentage(0, 0));
console.log(matchLog.user2);