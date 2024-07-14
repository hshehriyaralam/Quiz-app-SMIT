var formContainer = document.getElementById("formContainer");
var startConatainer = document.getElementById("startContainer");

function formSubmitHandler(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var nameErorr = document.getElementById("nameErorr");
    var emailErorr = document.getElementById("emailError");


    if(!name.value){
        nameErorr.className = "show";
        return
    }
    if(!email.value){
        emailErorr.className = "show"
         return
    }

    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    formContainer.className = "hide";
    startConatainer.className = "ShowQuiz";
    console.log("FormSubmitt");
   

}
