let formContainer = document.getElementById('formContainer');
let startContainer = document.getElementById('startContainer')

  document.getElementById('login').addEventListener('click',() => {

      let name = document.getElementById('name')
      let email = document.getElementById('email')
      let nameError = document.getElementById('nameErorr')
      let emailError = document.getElementById('emailError')
      
      
      if(!name.value){
        nameError.className = "showError";
        setTimeout(() => {
            nameError.className = "hide"
        },1000)
        return
    }
    if(!email.value){
        emailError.className = "showError"
        setTimeout(() => {
            emailError.className = "hide"
        },1000)
         return
        }
        
        localStorage.setItem('name', name.value)
        localStorage.setItem('email', email.value)
        formContainer.className = 'hide';
        startContainer.className = 'show'
        console.log("form Submitt");
})
