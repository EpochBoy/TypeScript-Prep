"use strict";
// URL: "https://jsonplaceholder.typicode.com/todos"
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    console.log("\n    The todo with ID: " + id + "\n    has the title: " + title + "\n    Is finished? " + completed + ".\n    ");
});
