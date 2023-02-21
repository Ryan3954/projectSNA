function validate(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    var pattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;

    if(!email.match(pattern)){
        alert("Wrong Email Format!")
        return false
    }
    else if(password.length < 8){
        alert("Min length 8 characters")
        return false
    }

    return true
}

function message(){
    if(validate()){
        alert("Login Success")
    }
}
