function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}
const loginForm = document.querySelector("#login");
const createAccountForm = document.querySelector("#createAccount");
const inlogedForm = document.querySelector("#inloged")
document.addEventListener("DOMContentLoaded", () => {


    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        inlogedForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });



    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    // loginForm.addEventListener("submit", e => {
    //     e.preventDefault();
    //     cheackCode()
    //     // Perform your AJAX/Fetch login

    //     setFormMessage(loginForm, "error", "Invalid username/password combination");
});

document.querySelectorAll(".form__input").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        // if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 6) {
        //     setInputError(inputElement, "Username must be at least 6 characters in length");

        // if (e.target.id === "signupUsername" && JSON.parse(localStorage.getItem("mylist")).includes("${e.target.id.value}") != true) {

        //     console.log(localStorage);
        //     // }if (localStorage.getItem("mylist").includes("t")===true){console.log("yes")};

        // }
        if (e.target.id === "passwordCheck" && e.target.value.length > 0 && e.target.value.length < 5) {
            setInputError(inputElement, "Username must be at least 5 characters in length");
        }
        // const inp1 = document.querySelector("passwordCheck");
        // //    const inp1 = document.querySelector("passwordCheck1");
        // console.log(inp1.value)
    });

    inputElement.addEventListener("input", e => {
        clearInputError(inputElement);
    });
});
// });


const myData = [{
    User: "fredrik", Pass: "1234",
}, {
    User: "saeed", Pass: "bey"
}, {
    User: "hamed", Pass: "2345"
}];
const username = document.querySelector("#username");
const signupUsername = document.querySelector("#signupUsername");
const pass = document.querySelector("#password");


function cheackCode() {

    // checking if user and pass exist in  our database if so go to register in localStorage and then welcome page
    for (let i = 0; i < myData.length; i++) {
        if (myData[i].User === username.value && myData[i].Pass === pass.value) {
            registered();
            return;
        }
    }
    // if there is not a localstorage with "myList" name, so this line make it before searching in it
    if (!localStorage.getItem("mylist")) {
        localStorage.setItem("mylist", JSON.stringify([{
            User: "", Pass: "",
        }]));
    }
    //checking localStorage if user signed in before without sign out so redirect user to welcome page
    const locallist = JSON.parse(localStorage.getItem('mylist'));
    console.log(locallist);
    for (let i = 0; i < locallist.length; i++) {
        if (locallist[i].User === username.value) {
            console.log("cheackCode1")
            registered();
            return;
        }
    }
    signup()

}
function registered() {
    // push username to localstorage
    console.log("registered1")
    let locallist = JSON.parse(localStorage.getItem('mylist'));
    locallist.push({ User: signupUsername.value });
    localStorage.setItem("mylist", JSON.stringify(locallist));
    //  redirect to welcome page 
    loginForm.classList.add("form--hidden");
    inlogedForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");

    console.log("registered2")
}

// define eventListener for log out button from welcome page to signin page and erase the username from localList
document.querySelector("#signoutBtn").addEventListener("click", e => {
    e.preventDefault();

    let locallist = JSON.parse(localStorage.getItem('mylist'));
    console.log(locallist);
    locallist = locallist.filter((usw) => usw.User != username.value)
    localStorage.setItem("mylist", JSON.stringify(locallist));
    loginForm.classList.remove("form--hidden");
    inlogedForm.classList.add("form--hidden");
    createAccountForm.classList.add("form--hidden");
    reset()
    console.log("log out");
});


document.querySelector("#loginBtn").addEventListener("click", e => {
    e.preventDefault();
    cheackCode()
    // let locallist = JSON.parse(localStorage.getItem('mylist'));
    // console.log(locallist);
    // locallist = locallist.filter((usw) => usw.User != username.value)
    // localStorage.setItem("mylist", JSON.stringify(locallist));
    // loginForm.classList.remove("form--hidden");
    // inlogedForm.classList.add("form--hidden");
    // createAccountForm.classList.add("form--hidden");
});


// console.log("loug out");

document.querySelector("#signupBtn").addEventListener("click", e => {
    e.preventDefault();
    registered()
    reset()
});

// this function resets all input values to noll.
function reset() {
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.value = "";
    });
}
const newUsername = document.querySelector("#signupUsername");
const pass1 = document.querySelector("#passwordCheck");
const pass2 = document.querySelector("#passwordCheck1");
function signup() {
    // if localStorage not exist, so make it
    console.log("newregisterd1")
    if (!localStorage.getItem("mylist")) {
        localStorage.setItem("mylist", JSON.stringify([{
            User: ""
        }]));
    }
    // check if user  exist in localStorage 
    let locallist = JSON.parse(localStorage.getItem('mylist'));

    for (let i = 0; i < locallist.length; i++) {
        if (locallist[i].User == newUsername.value) {
            login()
            return;
        }
    }
    // localStorage.getItem("mylist").includes(username.value)
    //if the user does not exist so push the user in the localStorage list
    locallist.push({ User: newUsername.value });
    localStorage.setItem("mylist", JSON.stringify(locallist));
    reset();
    welcomePage()

    console.log("newregisterd2")
}