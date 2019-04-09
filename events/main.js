const SearchUtils = require('./search-utils');
const searchUtils = new SearchUtils.SearchUtils();

searchUtils.on("search_hit", function (search, result, count) {
    console.log(`The search term ${search} found ${result}. There are ${count} listeners.`)
})

searchUtils.on("search_miss", function (search, result) {
    console.log(`The search term ${search} found ${result}.`)
})

var func = function(term){
    searchUtils.search(term);
}

console.log('Doing stuff...');
setTimeout(func,3000,'Ola');
setTimeout(func,2000,'Bob');
setImmediate(func, 'Tim');
console.log('More work...');