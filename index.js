const btn=document.getElementById('submit-btn')
btn.addEventListener('click',()=>{
    const emailInput=document.getElementById('user-email');
    const userEmail=emailInput.value;
    const passwordInput=document.getElementById('user-pass')
    const userPass=passwordInput.value;
    if (userEmail.toLowerCase()=='najmulbinnurul@gmail.com' && userPass=='12345678') {
       window.location.href='bank.html'
    } else {
        alert('error data');
    }    
})

