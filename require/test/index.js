var auth = require('./auth-tools');

module.exports.double = (x) => x*x;

module.exports.getContent = (path, user, pass) => {
    if(auth.login(user, pass)){
        return `${path} content: lksdlkfsjdf`;
    }else{
        return "Invalid credentials.";
    }
}