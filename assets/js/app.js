
//For login
document.getElementById("login_button").addEventListener("click",function(){

const userName = "admin";
const userPassword = "1234";

  var name =  document.getElementById("username").value;
  var pass =  document.getElementById("password").value;

  if(userName == name && userPassword == pass){
    document.getElementById("login_area").style.display = "none";
   document.getElementById("transition_area").style.display = "block";
  }
 else{
   document.getElementById("username").value = "";
   document.getElementById("password").value = "";
 }

})


// to get the amount from input by user
function userAmount(id){
    var amount = document.getElementById(id).value;
    amount = parseFloat(amount);

    return amount;
}

//to update the amount 
function updateAmount(id, amountNumber){
  var currentAmount = document.getElementById(id).innerText;
   currentAmount = parseFloat(currentAmount);

   var updateDepositAmount = currentAmount + amountNumber;

   document.getElementById(id).innerText = updateDepositAmount;

}

//to update the balance
function updateBalance(id,amountNumber){
  var currentBalance = document.getElementById(id).innerText;
   currentBalance = parseFloat(currentBalance);//1000

   currentBalance = currentBalance + amountNumber;
   document.getElementById(id).innerText = currentBalance;

}

 // For Deposit Amount
 document.getElementById("deposit_button").addEventListener("click", function(){

   //get the deposit Amount from input by calling function
   const depositNumber = userAmount("deposit_amount");//200

   //update deposit amount
   updateAmount("deposit_current_amount",depositNumber);

   // update balance amount
   updateBalance("current_balance",depositNumber);

   document.getElementById("deposit_amount").value = "";
 })
 
 //For Withdraw
 document.getElementById("withdraw_button").addEventListener("click", function(){
  
   //get the deposit Amount from input
   const withdrawNumber = userAmount("withdraw_amount");//500

   //check current balance
   var currentBalance = document.getElementById("current_balance").innerText;
   currentBalance = parseFloat(currentBalance);//1000
  
   //check withdraw is possible or not
   if(currentBalance < withdrawNumber){
      document.getElementById("withdraw_amount").value = "";
   }
   else{
      
      //update deposit amount
      updateAmount("withdraw_current_amount",withdrawNumber);
   
      // update balance amount
      updateBalance("current_balance",((-1)*withdrawNumber));
   
   
      document.getElementById("withdraw_amount").value = "";
   }
   
 })
 