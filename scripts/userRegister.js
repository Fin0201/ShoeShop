function Register(){
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password1").value;
    const confirmpassword = document.getElementById("password2").value;
    const phone = document.getElementById("phone").value;

    console.log(name, email, password, phone)

    if (name === "" || phone === "" || email==="" || password == ""){

        if (name === ""){
            document.getElementById("nameError").innerHTML = "You must enter a valid name!";
        }
        if (phone === ""){
            document.getElementById("phoneError").innerHTML = "You must enter phone number!";
        }
        if(password==""){
            document.getElementById("passError").innerHTML = "You must provide a password!";
        }

    }
    else if(password != confirmpassword){
        document.getElementById("matchError").innerHTML = "Passwords do not match!";
    }
    else{
        const user = {
            name:name,
            email:email,
            password:password,
            phone:phone
        }

        localStorage.setItem("userInfo", JSON.stringify(user));
        window.location.href = "account.html";
    }

}