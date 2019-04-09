// var events = require('events');
// var util = require('util');

const {EventEmitter} = require('events');

// var GetData = function GetData() {
//     this.search = function (term) {
//         let names = ['Ola', 'Fred', 'Tim'];
//         let result = names.includes(term);
//         if (result) {
//             this.emit("search_hit", term, result)
//         } else {
//             this.emit("search_miss", term, result)
//         }
//     }
// }

class SearchUtils extends EventEmitter{
    search(term) {
        let names = ['Ola', 'Fred', 'Tim'];
        let result = names.includes(term);
        if (result) {
            this.emit("search_hit", term, result)
        } else {
            this.emit("search_miss", term, result)
        }
    }
}

//util.inherits(GetData, events.EventEmitter);
module.exports.SearchUtils = SearchUtils;