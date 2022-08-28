// step-1: add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function(){
console.log('submit button clicked');

// step 2: get the email address inside the email input field
// always remember to use .value to get text from an input field
const emailfield = document.getElementById('user-email');
const email = emailfield.value;

// step-3: get password
// 3.a: set the id on the html value 
// 3.b: get the element  
// 3.c: get the value from the element
 const passwordfield = document.getElementById('user-password');
 const password = passwordfield.value;
 console.log(email,password)

// danger: do not try varify email password on the client side 
// step: varify email and password
if (email === 'sontan@baap.com' && password === 'secret'){
    window.location.href = 'bank.html';
}
else{
    alert('tui password vhule gechos!! toke tejjo sontan korlam.')
}

})