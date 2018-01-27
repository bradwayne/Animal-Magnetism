// var friends

// app.get("/api/friends/:friends?", function (req, res) {
//     var chosen = req.params.friends;
//     if (chosen) {
//         console.log(chosen);
//         for (var i = 0; i < friends.length; i++) {

//             if (chosen === friends[i].name) {

//                 return res.json(friends[i]);
//             }
//         }
//         return res.json(false);
//     }
//     return res.json(friends);
// });

// app.post("/api/addFriends?", function (req, res) {

//     var newFriends = req.body;
//     console.log(newFriends);

//     friends.push(newFriends);

//     res.json(newFriends);

// });