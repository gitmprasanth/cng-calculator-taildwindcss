const firstName=prompt("What is Your First Name ?")
const lastName=prompt("What is Your LastName ?")

const guestTxt=document.getElementById("guestName")

if(firstName&&lastName){
    guestTxt.innerText=firstName+" "+lastName
}

const tripdistanceEl=document.getElementById("trip-distance")
const fuelEffEl=document.querySelector("#fuel-efficiency")
const fuelEl=document.querySelector("#fuel-cost")
const calculateBtnEl=document.querySelector("#calculateBtn")

calculateBtnEl.addEventListener("click",(event)=>{
    event.preventDefault();
    if(tripdistanceEl.value === ""){
        alert("Enter the Trip distance")
    }
    else{
        const distanceKm=tripdistanceEl.value
        const fuelEfficiency=fuelEffEl.value
        const fuelcost=fuelEl.value
        
        const result=(distanceKm/fuelEfficiency)*fuelcost
        const finalmsg="Your Fuel cost will be around ₹ "+result
       console.log(finalmsg) 
       alert(finalmsg)       
    }


})


// const result=500/24;

//Milege :20.83

