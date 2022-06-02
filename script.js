const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const sumessagebject=document.querySelector("#message");
const success=document.querySelector("#success");
const error=document.querySelector(".error");
function validateform(){
    let errorFlag= false;
    clearMessages();
    if(nameInput.value.length < 1){
        errornodes[0].innertext ="Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag= true;
    }
    if (!emailIsValid(email.value)){
        errornodes[1].innertext ="Invalid E-mail Adress";
        email.classList.add("error-border");
        errorFlag= true;
    }
    if(message.value.length < 1){
        errornodes[2].innertext ="Please enter message";
        message.classList.add("error-border");
        errorFlag= true;
    }
    if (!errorFlag){
        success.innertext="Success!!";
    }
}
function clearMessages(){
    for(let i=0;i < errornodes.length; i++){
        errornodes[i].innertext ="";
    }
    success.innertext=" ";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}