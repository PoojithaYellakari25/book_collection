export async function validateLogin(event,emailValue,passValue,navigate){
    event.preventDefault();
    const pass = passValue.current.value;
    const email= emailValue.current.value;
    const verifiedmail = localStorage.getItem('userName');
    console.log(verifiedmail);
    const verifiedpass = localStorage.getItem('pass');
    if(email===verifiedmail){
        if(pass===verifiedpass){
            localStorage.setItem('isLoggedIn',true);
            navigate('/homepage');
        }else{
            alert("Check and enter your password correctly. ")
        }
    }else{
        alert("Unregistered email id please create new account.")
    }
}