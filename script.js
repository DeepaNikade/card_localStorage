const result = localStorage.getItem("userInformation");

if (result) {
  const userdetails = JSON.parse(result);

  // display info on card
  document.getElementById("firstName").textContent = userdetails.firstName;
  document.getElementById("LastName").textContent = userdetails.lastName;
  document.getElementById("country").textContent = userdetails.country;
  document.getElementById("phoneNum").textContent = userdetails.phoneNumber;
  document.getElementById("city").textContent = userdetails.City;
  document.getElementById("village").textContent = userdetails.village;
} else {
  userInfoStoring();
}

function userInfoStoring() {
  const firstName = prompt("Enter your First Name");
  const lastName = prompt("Enter your last Name");
  const country = prompt("Enter your Country");
  const phoneNumber = prompt("Enter yor Phone Number");
  const City = prompt("Enter your City");
  const village = prompt("Enter your Village");

  const userdetails = {
    firstName,
    lastName,
    country,
    phoneNumber,
    City,
    village,
  };

  // storing user info in loacal storage as a json string

  localStorage.setItem("userInformation", JSON.stringify(userdetails));

  // display the info on card

  document.getElementById("firstName").textContent = userdetails.firstName;
  document.getElementById("LastName").textContent = userdetails.lastName;
  document.getElementById("country").textContent = userdetails.country;
  document.getElementById("phoneNum").textContent = userdetails.phoneNumber;
  document.getElementById("city").textContent = userdetails.City;
  document.getElementById("village").textContent = userdetails.village;
}
userInfoStoring();



let modebtn=document.querySelector("#mode");
let body=document.querySelector("body")
let currMode="light";

modebtn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode="dark";
        body.style.backgroundColor="black";


    }else{
        currMode="light";
        body.style.backgroundColor="white";
    }
})