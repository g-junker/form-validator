const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submit = document.querySelector('button');

submit.addEventListener('click', function(e){
    e.preventDefault();
    if(username.value === ""){
        username.classList.add("is-invalid");
    }
    if(password.value === ""){
        password.classList.add("is-invalid");
    }
});

username.addEventListener('keydown', function(){
    username.classList.remove("is-invalid");
})

password.addEventListener('keydown', function(){
    password.classList.remove("is-invalid");
})