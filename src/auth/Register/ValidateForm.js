
export function validateForm(event,emailValue,passValue,passValue2,navigate){
    event.preventDefault();
    try{
        let regex=/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9].*[0-9]).{8,}$/;
        const pass1=passValue.current.value;
        const pass2 = passValue2.current.value;
        const email= emailValue.current.value;
        if(regex.test(pass1)){
            if(pass1==pass2){
                localStorage.setItem('userName',email);
                localStorage.setItem('pass',pass1);
                localStorage.setItem('isLoggedIn',true);
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