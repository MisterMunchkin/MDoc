var Observable = require("data/observable").Observable;
var Sqlite = require("nativescript-sqlite");
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


function createViewModel(database) {
   // constructor(database){
  //      this.database = database;
  //  }
   // var viewModel = new Observable();
    var viewModel = new Observable();
    

    viewModel.insert = function() {
        database.execSQL("INSERT INTO patients (firstname, lastname) VALUES (?, ?)", [this.firstname, this.lastname]).then(id => {
            console.log("INSERT RESULT", id);
            
            topmost().navigate(navigateMainPage);
        }, error => {
            console.log("INSERT ERROR", error);
        });
    }

}

exports.createViewModel = createViewModel;