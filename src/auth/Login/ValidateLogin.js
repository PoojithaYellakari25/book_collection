export async function validateLogin(event,emailValue,passValue,navigate){
    event.preventDefault();
    const pass = passValue.current.value;
    const email= emailValue.current.value;
    let users=JSON.parse(localStorage.getItem('users')||'[]');
    if (!Array.isArray(users)) {
        users = [];
    }
    const verified=users.find(user=> user.email==email );
    if(verified){
        if(verified.pass===pass){
            localStorage.setItem('currentUser',email);
            navigate('/homepage');
        }else{
            alert("Check and enter your password correctly. ")
        }
    }else{
        alert("Unregistered email id please create new account.")
    }
}