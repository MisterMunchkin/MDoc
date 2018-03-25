var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");
const topmost = require("ui/frame").topmost;


const navigateInsert = {
    moduleName: "InsertPatient/insertpatient",
    animated: true,
    transition: {
        name: "slide",
        duration: 280,
        curve: "easeIn"
    }
}

function createViewModel(database){
    var viewModel = new Observable();

   /* viewModel.insert = function(){
        database.execSQL("INSERT INTO people (firstname, lastname) VALUES (?, ?)", [this.firstname, this.lastname]).then(id => {
            console.log("INSERT RESULT", id);
        }, error => {
            console.log("INSERT ERROR", error);
        });
    }*/

    viewModel.select = function(){
        database.all("SELECT * from patients").then(rows => {
            for(var row in rows){
                console.log("RESULT", rows[row]);
            }
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }

    viewModel.routeToInsert = function(){
        topmost().navigate(navigateInsert);
    }
    return viewModel;
}

exports.createViewModel = createViewModel;