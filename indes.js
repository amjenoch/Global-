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
