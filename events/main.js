const SearchUtils = require('./search-utils');
const search = new SearchUtils.SearchUtils();

search.on("search_hit", function (search, result) {
    console.log(`The search term ${search} found ${result}.`)
})

search.on("search_miss", function (search, result) {
    console.log(`The search term ${search} found ${result}.`)
})

var func = function(term){
    search.search(term);
}

console.log('Doing stuff...');
setTimeout(func,3000,'Ola');
setTimeout(func,2000,'Bob');
setImmediate(func, 'Tim');
console.log('More work...');