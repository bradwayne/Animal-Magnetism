// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "survey.html"));
// });

// ////////////////////////////////////////////////////////////

// var arrFriends = [];


// $(".submit").click(function () {
//     event.preventDefault();
//     var newFriends = {
//         yourName: $("#yourName").val().trim(),
//         groupPhoto: $("#groupPhoto").val().trim(),
//     };
//     console.log(arrFriends);

//     if (arrFriends.length < 5) {
//         console.log("added to friends list");
//         $.post("/api/addFreinds", newFriends)
//             .then(function (data) {
//                 console.log(data);
//                 alert("Adding frineds...");
//             });
//     } else {
//         console.log("could not add friend!");
       
//     }

// })