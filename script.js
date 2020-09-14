//Regular expressions
const email=/^[a-zA-Z0-9.!#$%&’*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const mobile=/\+?(88)?0?1[3456789][0-9]{8}\b/;
const postal=/^[3-9][0-9]{3}$/;
const result=document.getElementById("result");

//Vvalidator function

let validator=(e)=>{
    let selectVal=document.getElementById("sel1").value;
    
    var validationObj=new Validation();
   
    if(selectVal==1){
        validationObj.emailValidatior();
    }
    else if(selectVal==2){
        validationObj.mobileValidatior();
    }
    else{
        validationObj.postalCodeValidatior();
    }
    e.preventDefault();
    
}

//Validation Class '

class Validation{

    //emailValidator method
    emailValidatior(){
       let val=prompt("Enter the Email.");
       if(email.test(val)){
           result.innerText="The Email is Correct.";
           result.style.color="green";
       }
       else{
        result.innerText="The Email is Incorrect.";
        result.style.color="red";
       }
    }

    //mobile validator method

    mobileValidatior(){
      let val=prompt("Enter the Mobile Number(Bangladesh).");
      if(mobile.test(val)){
         result.innerText="The Mobile Number is Correct.";
         result.style.color="green";
      }
      else{
       result.innerText="The Mobile Number  is Incorrect.";
       result.style.color="red";
      }
    }

//Postal code validator method
    postalCodeValidatior(){
        let val=prompt("Enter the Postal Code(Bangladesh).");
        if(postal.test(val)){
           result.innerText="The Postal Code is Correct.";
           result.style.color="green";
        }
        else{
         result.innerText="The Postal Code  is Incorrect.";
         result.style.color="red";
        }
      }
  
}

