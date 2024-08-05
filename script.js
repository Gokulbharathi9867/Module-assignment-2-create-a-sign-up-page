let a = document.getElementsByClassName('email1');
let b = document.getElementsByClassName('password1');

 function valid(){
   if(a === ""){
    alert("Please enter the valid email or phone number");
   }
  else{
    console.log(a.value);
  }  
  if(b === ""){
    alert("Please enter the password");
  }
  else{
    console.log(b.value);
  }
 
 }


