const firstName=prompt("What is Your First Name ?")
const lastName=prompt("What is Your LastName ?")

const guestTxt=document.getElementById("guestName")

if(firstName&&lastName){
    guestTxt.innerText=firstName+" "+lastName
}

