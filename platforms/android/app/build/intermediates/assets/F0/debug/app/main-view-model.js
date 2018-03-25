var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");

function createViewModel(database){
    var viewModel = new Observable();



    viewModel.select = function(){
        database.all("SELECT * from patients").then(rows => {
            for(var row in rows){
                console.log("RESULT", rows[row]);
            }
        }, error => {
            console.log("SELECT ERROR", error);
        });
    }

    return viewModel;
}

exports.createViewModel = createViewModel;