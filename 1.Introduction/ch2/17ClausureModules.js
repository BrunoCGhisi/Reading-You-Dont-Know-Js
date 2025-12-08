function User(){
    let username, password;

    function doLogin(user, pw){
        username = user;
        password = pw;
    }

    return {
        login: doLogin,
        getUsername: () => username //Public function
    }
}

let fred = User();
fred.login("Fred", "abcd1234")
console.log(fred.getUsername());