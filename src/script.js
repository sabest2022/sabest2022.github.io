
document.addEventListener("DOMContentLoaded", () => {
      if (!localStorage.getItem("mylist")) {
             localStorage.setItem("mylist", JSON.stringify([{
                User: "" , Pass:"",}]));
         }
const localis = JSON.parae(localStorage.getItem("mylist"))
for (let i=0, i<localis.length, i++){
if(username.value === localis[i].User){
welcomePage();
return
}

const myData = [{
    User: "fredrik" , Pass:"1234",
},{
    User: "saeed" , Pass:"bey"
},{
    User: "hamed", Pass:"2345" 
} ];
    const header = document.querySelector("#head");
    var username = document.querySelector(".userIn");
    const pass = document.querySelector(".passwordIn");
    const newUsername = document.querySelector(".newuserIn");
    const newPassword = document.querySelector(".newpasswordIn");
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const logoutBtn = document.querySelector("#backBtn");
    const welcomeForm = document.querySelector("#welcome-page")
    const userMessage = document.querySelector("#user_error-message");
    const regBtn = document.querySelector("#regBtn");
    const openGateBtn = document.querySelector("#openBtn");
    
    openGateBtn.addEventListener("click", cheackCode);
// walkoutBtn.addEventListener("click", walkout);
 //this function is the first step to check whether user is registered on databank or not! if yes, then redirect to register() if not, redirects to sign up()
function cheackCode() {
    
    console.log("cheackCode1")
    for (let i = 0; i < myData.length; i++) {
        if (myData[i].User === username.value && myData[i].Pass === pass.value ) {
            registered();
            
            return;
        }
    }
    if (!localStorage.getItem("mylist")) {
        localStorage.setItem("mylist", JSON.stringify([{
            User: "" , Pass:"",}]));
    }
    let locallist= JSON.parse(localStorage.getItem('mylist'));
    console.log(locallist);

    for  (let i = 0 ; i< locallist.length; i++)  {
         if(locallist[i].User === username.value && pass.value != "" )
    { 
            registered();
            
            return;
        }  }
        
    reset();
    console.log("cheackCode2")
    signup();
}
// back to sign in page with back button and log out
logoutBtn.addEventListener("click", logout);

function logout(){

let locallist= JSON.parse(localStorage.getItem('mylist'));
    console.log(locallist);
    locallist= locallist.filter((usw) => usw.User != username.value)
    localStorage.setItem("mylist", JSON.stringify(locallist));
    header.classList.add("form-hidden");
    login();
    }

//this code should go into checkcode funtion and then check both together: whether user name and pass is in database or in localStorage 
// it may be okey to use include
function registered() {
// if localStorage not exist, so make it
console.log("registered1")
       
        
    let locallist= JSON.parse(localStorage.getItem('mylist'));
    
    // for  (let i = 0 ; i< locallist.length; i++)  {
    //      if(locallist[i].User === username.value && pass.value != "" ){ 
    //         welcomePage();
    //         return;
    //     }  }
        locallist.push({User: username.value});
        localStorage.setItem("mylist", JSON.stringify(locallist));
        welcomePage();
        console.log("registered2")
        
}
    // it shows the welcome page with a button to sign in page 
    
    
// someone who doesnt have any username mached with databank or local storage would be redirected here
// the signup page shows here 
     function signup(){
        regBtn.addEventListener("click", newregisterd);
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
        console.log("signup")
     }

        
// redirected from sign up function 
    function newregisterd() {
            // if localStorage not exist, so make it
            console.log("newregisterd1")
                    if (!localStorage.getItem("mylist")) {
                        localStorage.setItem("mylist", JSON.stringify([{
                            User: "" }]));
                    }
            // check if user  exist in localStorage 
                let locallist= JSON.parse(localStorage.getItem('mylist'));
                
                for  (let i = 0 ; i< locallist.length; i++)  {
                     if(locallist[i].User == newUsername.value){ 
                        login()
                        return;
                    }  }
                    // localStorage.getItem("mylist").includes(username.value)
            //if the user does not exist so push the user in the localStorage list
                locallist.push({User: newUsername.value});
                localStorage.setItem("mylist", JSON.stringify(locallist));
                reset();
                welcomePage()

                console.log("newregisterd2")
        }
                
function changeUsersignup(){
    
    // userMessage.classList.remove(".form-hidden");
  newregisterd();
  console.log("changeusersignup")
}

function welcomePage(){
    console.log("welcomePage")

header.classList.remove("form-hidden");
welcomeForm.classList.remove("form-hidden");
loginForm.classList.add("form-hidden");
createAccountForm.classList.add("form-hidden");
}

function login(){
    reset()
    loginForm.classList.remove("form-hidden");
    createAccountForm.classList.add("form-hidden");
    welcomeForm.classList.add("form-hidden");
    console.log("welcomepage");
}
 

function signupreg() {
            // if localStorage not exist, so make it
    console.log("signupreg1")
    if (!localStorage.getItem("mylist")) {
            localStorage.setItem("mylist", JSON.stringify([{
             User: "" , Pass:"",}]));
    }                 
    let locallist= JSON.parse(localStorage.getItem('mylist'));
    console.log(locallist);
                // for  (let i = 0 ; i< locallist.length; i++)  {
                //      if(locallist[i].User == username.value){ 
    locallist.push({User: newUsername.value, pass: newPassword});
    localStorage.setItem("mylist", JSON.stringify(locallist));
}
       
       
    
function reset() {
    console.log("reset")
        username.value = "";
        pass.value = "";
        newUsername.value = "";
        newPassword.value = "";
}
   
