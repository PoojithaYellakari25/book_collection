
export async function  validateForm(event,emailValue,passValue,passValue2,navigate){
    event.preventDefault();
    try{
        let regex=/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9].*[0-9]).{8,}$/;
        const pass1=passValue.current.value;
        const pass2 = passValue2.current.value;
        const email= emailValue.current.value;
        let users=JSON.parse(localStorage.getItem('users')||'{}');
        console.log(users);
        if (!Array.isArray(users)) {
            users = [];
        }
        const existingUser = users.find(user=>user.email===email);
        if(existingUser){
            alert("User Already Exists");
            return;
        }
        if(regex.test(pass1)){
            if(pass1==pass2){
                const details={
                    'email':email,
                    'pass':pass1,
                    'books':[]
                }
                users.push(details);
                localStorage.setItem('users',JSON.stringify(users));
                localStorage.setItem('currentUser',email);
                navigate('homepage');
            } else{
                alert("password and re-entered password didn't match");
            }   
        }else{
            alert("please enter the strong password");
        }
    }   
    catch(error){
        alert(error);
    }
    
}