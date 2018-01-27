var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

////////////////////////////////////////////////////////////////

var app = express();
var PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

////////////////////////////////////////////////////////////////

var friendsArr = [
    {
    yourName: "Bailey",
    groupPhoto: "http://www.kittenlady.org/",
    }, 
];

///////////////////////////////////////////////////////////////

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

////////////////////////////////////////////////////////////

app.get("/api/friendsArr?", function (req, res) {
    var chosen = req.params.friends;
    if (chosen) {
        console.log(chosen);
        for (var i = 0; i < friendsArr.length; i++) {

            if (chosen === friendsArr[i].name) {

                return res.json(friendsArr[i]);
            }
        }
        return res.json(false);
    }
    return res.json(friendsArr);
});

app.post("/api/add", function (req, res) {

    var newFriend = req.body;

    // newFriend.yourName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friendsArr.push(newFriend);

    res.json(newFriend);

});

////////////////////////////////////////////////////////////////////

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});