module.exports.login = (username,password) => {
    if(username === "bob" && password === "pass"){
        return true;
    } else{
        return false;
    }
}