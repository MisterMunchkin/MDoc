var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");
//var createViewModel = require("./insertpatient-model").createViewModel;
const topmost = require("ui/frame").topmost;

const navigateMainPage = {
    moduleName: "../main-page",
    animated: true,
    transition: {
        name: "slide",
        duration: 280,
        curve: "easeIn"
    }
}

var db_promise;
var db_instance;
var page;

function onPageLoaded(args){
    console.log("insert patient page loaded...");

    page = args.object;



    db_promise = new Sqlite("doc");

    db_promise.then(function(db){
        db_instance = db;
        (db.isOpen())? console.log("DB has been opened."): console.log("DB is still closed.");
    }, function(err){
        console.log("failed to opened DB", err);
    });

}

function insert(){
    console.log("insert first");
    
    var patientObject = {
        firstname: page.getViewById("firstname").text,
        lastname: page.getViewById("lastname").text
    };

    db_instance.execSQL("INSERT INTO patients (firstname, lastname) VALUES (?, ?)", [patientObject.firstname, patientObject.lastname]).then(id => {
        console.log("insert success " + id);
        
        topmost().goBack();

    }, error => {
        console.log("Insert error", error);
    });
}

exports.insert = insert;
exports.onPageLoaded = onPageLoaded;