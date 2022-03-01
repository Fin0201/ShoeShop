function Register(){
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password1").value;
    const confirmpassword = document.getElementById("password2").value;
    const phone = document.getElementById("phone").value;

    console.log(name, email, password, phone)

    var user = {
        name:name,
        email:email,
        password:password,
        phone:phone
    }

    localStorage.setItem("userInfo", JSON.stringify(user));
    window.location.href = "account.html";


    if(name == "" || email == "" || password == "" || confirmpassword == "" || phone == ""){
        alert("Incorrect");
    }

    else if (password != confirmpassword){
        alert("Incorrect");
    }

    else{
        var user = {
            name:name,
            email:email,
            password:password,
            phone:phone
        }
    }



    localStorage.setItem("userInfo", JSON.stringify(user));
    window.location.href = "account.html";
}