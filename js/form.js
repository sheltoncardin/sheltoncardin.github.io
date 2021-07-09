function validateForm() {
    var name = document.forms["myForm"]["Name"];
    var address = document.forms["myForm"]["Address"];
    var email = document.forms["myForm"]["EmailId"];
    var phone = document.forms["myForm"]["Mob"];
    var gen = document.forms["myForm"]["Gender"];
    var lenphoe = 0;

    lenphoe = phone.value.length; //Takimg the length of mobile number
    lenphoe = lenphoe.toString();

    if (name.value == "") {
        window.alert("Please enter your name!");
        name.focus();
        return false;
    }
    if (address.value == "") {
        window.alert("Please enter your address!");
        address.focus();
        return false;
    }
    if (!email.value.includes('@') && !email.value.includes('.') || email.value == "") {
        window.alert("Please enter a valid e-mail address!");
        email.focus();
        return false;
    }
    if (phone.value == "") {
        window.alert("Please enter your mobile number!");
        phone.focus();
        return false;
    }
    if (lenphoe != 10) {
        window.alert("Please enter your 10 digts number!");
        phone.focus();
        return false;
    }
    if (gen.value == "") {
        window.alert("Please enter your Gender!")
        gen.focus;
        return false;
    }
    else {
        var data = "Name: " + name.value + "\n" +
            "Address: " + address.value + "\n" +
            "Email ID: " + email.value + "\n" +
            "Phone: " + phone.value + "\n" +
            "Gender: " + gen.value + "\n";
        window.alert(data);
    }
    return true;
}
