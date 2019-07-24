var maxSpeed = {
    user1: 300, 
    user2: 60, 
    user3: 200, 
    user4: 1000,
    user5: 400, 
    rocket: 8 * 60 * 60
};


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

sortedUserObject(maxSpeed);