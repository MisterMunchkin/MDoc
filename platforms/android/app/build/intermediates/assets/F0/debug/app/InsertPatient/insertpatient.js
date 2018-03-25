var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");
var insertpatientModel = require("./insertpatient-model").insertpatientModel;

function createViewModel(database) {
    var viewModel = new Observable();



    return viewModel;
}

exports.createViewModel = createViewModel;