const navSlide = () => {
 const burger = document.querySelector('.burger');
 const nav = document.querySelector('.nav-links');
 const navLinks = document.querySelectorAll('.nav-links li');

 burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');

 });

 navLinks.forEach((link,index) => {
  link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
  console.log(index)
 })
}

navSlide();



var mdp = document.getElementById("cm");
var mdps = document.getElementById("cp");
mdp.addEventListener('keyup', function(){
 var val = this.value;
  if(val.length > 5 ){
   this.style.border ='8px solid red';
 
  }

});

mdps.addEventListener('keyup', function(){

 var val = this.value;
  if(val.length > 5 ){
   this.style.border ='8px solid red';
 
  }
});




// input field
const firtsName = document.getElementById('firtsname')
const lastName = document.getElementById('lastName')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const email = document.getElementById('email')

// form
const form = document.getElementById('myForm');

// vaidation color
const green = '#4CAF50';
const red = '#F44336' ;

function validationFirtsName(){
 // check if is empty
 if(checkIfEmpty(firtsName)) return;
 // is if it has only letters
 if(checkIfOnlyLetters(firtsName)) return;
 return true;
}
function validationlastName(){
 // check if is empty
 if(checkIfEmpty(lastName)) return;
 // is if it has only letters
 if(checkIfOnlyLetters(lastName)) return;
 return true;
}
function validatePassword(){
 // Empty check
 if(checkIfEmpty(password)) return;
 //  Must of in certain length
 if(!meetLength(password, 4, 100)) return ;
 // check password against our character set
// 1- a
// 2- a 1
// 3- A a 1
// 4- A a 1 @
if(!containsCharacters(password,4)) return;
return true;


}
function validateConfirmPassword(){
 if(password.className !== 'valid'){
  setInvalid(confirmPassword, 'Password must be valid');
  return;
 }
 // If they match
 if(password.value !== confirmPassword.value){
  setInvalid(confirmPassword, 'Password must match');
  return;
 } else {
  setValid(confirmPassword);
 }
 return true;²
}
// utility functions
function checkIfEmpty(field){
 if(isEmpty(field.value.trim())){

  // set field invalid
  setInvalid(field, `${field.name} must not be empty`);
  return true;

 } else{
  // set field valid
  setValid(field);
  return false;
 }
}
function isEmpty(value){
 if(value === '') return true;
 return false;
}
function setInvalid(field, message){
 field.className = 'invalid';
 field.nextElementSibling.innerHTML = message;
 field.nextElementSibling.styme.color = red;
}
function setValid(field, message){
 field.className = 'valid';
 field.nextElementSibling.innerHTML = '';
 field.nextElementSibling.styme.color = green;

 // 
}

function checkIfOnlyLetters(field){
 if(/^[a-zA-Z]+$/.text(field.value)){
  setValid(field);
  return true;
 } else {
  setInvalid(field, `${field.name} must contain only letters`);
  return false 
 }
}
function meetLength(field, minLength, maxLength){
 if(field.value.length >= minLength && field.value.length < maxLength){
  setValid(field);
  return true;
 }else if(field.value.length <  minLength ){
  setInvalid(field, `${field.name} must be at least ${minLength} characters long` );
  return false;
 } else {
  setInvalid(field, `${field.name} must be shorter than ${maxLength} characters`);
  return false;
 }
 return false;
}
function containsCharacters(field, code){
 let regEx;
 switch(code){
  case 1: 
  // letters
   regEx = /(?=.*[a-zA-Z])/;
   matchithRegEx(regEx, field, 'Must contain at least one letter');
   case 2:
    // letters and numbers
    regEx = /(?=.*\d)(?=.*[a-zA-Z])/
    return matchithRegEx(regEx, field , 'Must contain at least one letterand one number');
    case 3:
     // uppercase, lowercase and number
     regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
     return matchithRegEx(regEx, field , 'Must contain at least one uppercase, one lowercase and one number');

    case 4:
     // uppercase,clowercase, number and special
     regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
     return matchithRegEx(regEx;field, 'Must contain at least one uppercase, one lowercase and one number and one special character');
     case 5:
      // Email
      
     default: 
  return false
 }
}
function matchithRegEx(regEx, field, message){
 if(field.value.match(regEx)){
  setValid(field);
  return true;

 } else {
  setInvalid(field, message);
  return false;
 }