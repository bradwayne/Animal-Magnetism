var friends = require("../data/friends");

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        friends.push(req.body);
        //res.json(friends);


        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 100
        };

        var newFriend = req.body;
        var totalDifference = 0;

        var userScores = newFriend["scores[]"];
        req.body.scores = userScores;
        delete newFriend["scores[]"];


        console.log("array of friends:");
        console.log(friends);
        console.log("newFriend:");
        console.log(newFriend);
        console.log("show me user scores: ");
        console.log(userScores);


        //Loop through friends object and compare
        for (var i = 0; i < friends.length; i++) {

            totalDifference = 0;
            if(newFriend.name !== friends[i].name){
                //console.log("looping through friends array of " + i )
                //Loop through the scores of each friend
                for (var j = 0; j < friends[i].scores.length; j++) {
                    //console.log("second loop: survey questions:" + j + ", scores : " + friends[i].scores[j])
                    //calculating the difference between each score and sum them into totalDifference
                    totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                }
                console.log("total difference: " + totalDifference + ", and current best match is : " + bestMatch.friendDifference)
                //Find best friend match
                if (totalDifference <= bestMatch.friendDifference) {  //25 <= 100
                    console.log("if total difference is smaller than current best match, we should see this pop up!");
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;


                } else {
                    console.log("previous friend is the better match!");
                }
            }
           
        }
        console.log("best match : " );
        console.log(bestMatch);
        res.json(bestMatch);
        //Pushing new friend to friends API
        //    friends.push(req.body);
        //     res.json(bestMatch);


    });

};