document.addEventListener("DOMContentLoaded", function(){

    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const {name, email, phone} = userInfo;
    console.log(userInfo);

    document.getElementById("name").innerHTML = `Hi ${name}, this is your account!`;
    document.getElementById("email").innerHTML = `<b>Email:</b> ${email}`;
    document.getElementById("phone").innerHTML = `<b>Phone:</b> ${phone}`;
})


function Logout(){
    //alert('Logged out!')
    localStorage.removeItem("userInfo");
    window.location.href="index.html";
}

console.log(name, email, password, phone)



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