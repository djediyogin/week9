function validateInput(){
    Event.preventDefault();
    let firstName = document.getElementById("fname").ariaValueMax;
    console.log(firstname);
    let lasttName = document.getElementById("lname").ariaValueMax;
    console.log(lastname);
    let zip = document.getElementById("zip").ariaValueMax;
    console.log(zip);

    let firstLast = firstName + " " + lastName;
    console.log(firstName)

    if(firstLast.length  < 20){ 
        alert("Not enough characters, First and Last name must have at LEAST 20 characters");
        return;
    }
console.log("Valid first and last name!");

if(zip.length != 5 || (!Number.isInteger(parseInt(zip)) && parseInt(zip) > 9999 )){
    alert("invalid zip code. Zip must be a number of 5 digits.");
    return;
}
console.log(parseInt("33"));
console.log(parseInt("3.3"));


console.log("zip valid")
}


window.addEventListener("DOMContentLoaded",(event) => {   
    const form = document.getElementById("myform");
    if(form) {
    form.addEventlistener("submit", validateInput)
}
})

