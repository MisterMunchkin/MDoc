var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");

function insertPatientModel(database) {
    var viewModel = new Observable();

    viewModel.firstname = "";
    viewModel.lastname = "";

    viewModel.insert = function () {
        database.execSQL("INSERT INTO patients (firstname,lastname) VALUES (?,?)", [this.firstname, this.lastname]).then(id => {
            console.log("INSERT RESULT", id);
        }, error => {
            console.log("INSERT ERROR", error);
        });
    }


    return viewModel;
}

exports.createViewModel = createViewModel;