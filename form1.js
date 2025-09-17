function frmdata(){
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let contact = document.querySelector('#contact').value

    if(name==""){
        alert("please enter your name")
        document.querySelector('#name').focus()
        return false
    }

    else if(age==""){
        document.querySelector('#errorage').textContent="please enter this field"
        document.querySelector('#age').focus()
        return false
    }
    else if(isNaN(age)){
        alert("please enter number in age")
        document.querySelector('#age').focus()
        return false                
    }
    else if(contact==""){
        if (contact.length!=10){
            if (isNaN(contact)){
             alert
            }
        }
        alert("please enter your contact")
        document.querySelector('#contact').focus()
        return false
    }
    
    else if(email==""){
        alert("enter email")
        document.querySelector('#email').focus
        return false
    }

    else if(!(email.includes('@gmail.com'))){
        alert("email")
        return false
    }
    else if(!(pass.match(/[`¬!"£$%^&*()_+-=}{:@~?><}]/))){
         alert("please enter special chracters")
    }

    
    else if(pass!=cpass){
         alert("please enter right password")
        return false
    }
    

}