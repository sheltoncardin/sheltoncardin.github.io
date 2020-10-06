function formSub(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    let repass = document.getElementById('repass').value;
    let error = document.getElementById('error');
    let name = document.getElementById('name');
    let res = 0;
    
    if(password.length <8){
        console.log("Password is less than 8 characters");
        error.innerHTML="Password is less than 8 characters";
        res=res+1;
    }else{
        if(password != repass){
            console.log("Password doesn't Match");
            error.innerHTML="Password doesn't Match";
            res=res+1;
        }
    }
    if(!email || !password || !repass || !name){
        console.log("One of the fields weren't filled");
        error.innerHTML="One of the fields weren't filled";
        res=res+1;
    }
    if(res ==0)
    {
        error.innerHTML="Succesfully Registered";
    }
}