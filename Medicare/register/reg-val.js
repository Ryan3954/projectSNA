function validate(){
    let full_name = document.getElementById("full_name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    var pattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;

    if(full_name.length <= 0){
        alert("Enter Full Name")
        return false
    }
    else if(!email.match(pattern)){
        alert("Wrong Email Format!")
        return false
    }
    else if(password.length < 8){
        alert("Min length 8 characters")
        return false
    }
    else if(confirm_password != password){
        alert("Password didn't match")
        return false
    }
    return true
}

function message(){
    if(validate()){
        alert("Register Success")
    }
}
