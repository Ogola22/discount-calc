/*alert("I am learning JavaScript");{
console.log("");
}
var num1; var nun2; var sum;{
    num1 = 20;
    num2 = 20;
    sum = num1 + num2;
    console.log(sum);
}
const pi = 3.142; let r; let area;{
    r = 7;
    area = pi * r ** 2;
    console.log("Area = " +area); 
}
var fname; var lname; 
    fname = ' Brian';
    lname = ' Ogola'; 
    let fullname = fname + lname;
    console.log("My full name is:" + fullname);


    if, else if, else  statements
let Age = parseInt(prompt("Please enter your age:"));
  if(Age >=18 && Age<=120){
    alert("You can proceed to votr");
  }
  else if(Age>=1 && Age<=17){
    alert("You are too young to vote");
  }
  else if(Age>=121 && Age<=2000){
    alert("too old go rest")
  }
  else{
    alert("Invalid value")
  }
  var grade;
  var cat = parseFloat(prompt("Please enter your cat marks:"));
    if(cat>=0 && cat<=30){
        alert("Proceed")
    }
    else{
        alert("Invalid marks")
    }
  var final = parseFloat(prompt("Please enter your final marks"));
    if(final>=0 && final<=70){
        alert("Click Ok to view your grade")
    }
    else{
        alert("invalid marks")
    }
    grade = cat + final;
    if(grade>=80 && grade<=100){
        alert("Distinction")
    }
    else if(grade>=60 && grade<=79){
        alert("Credit")
    }
    else if(grade>=40 && grade<=59){
        alert("Pass")
    }
    else if(grade>=0 && grade<=39){
        alert("Fail")
    }
    else{
        alert("Invalid grade")
    }
    var userInput = prompt("Please enter your favorite color\n White\n Blue\n Red\n Green");
    switch (userInput) {
      case 'White':
        alert("White is a symbol of peace");
        break;
        case 'Blue':
          alert("Blue is a color symbol of sky");
          break;
        case 'Red':
          alert("Red means danger");
          break;
        case 'Green':
          alert("Safaricom color symbol")
          break;
          
      
      default:
        alert("Color not available for now")
        break;
    }
    var userInput = prompt("Choose a country to know her capital city\n Kenya\n Tanzania\n Uganda\n Nigeria\n S.Africa\n Egypt");
    switch (userInput) {
      case 'Kenya':
      case 'kenya':
      case 'KENYA':
        alert("Nairobi")
        break;
      case 'Tanzania':
      case 'tanzania':
        alert("Dar-esalam")
        break;
      case 'Uganda':
      case 'uganda':
        alert("Kampala")
        break;
      case 'Nigeria':
      case 'nigeria':
        alert("Lagos")
        break;
      case 'S.Africa':
      case 's.africa':
        alert("Cape Town")
        break;
      case 'Egypt':
      case 'egypt':
        alert("Cairo")
        break;
      default:
        alert("Country not available for now please come later.")
        break;
    }
    var userInput = prompt("Enteramount ")*/
    const calculate = document.querySelector('.calculate');
    const resetBtn = document.querySelector(".reset");

    calculate.addEventListener ('click', (e) =>{
      e.preventDefault();

      let billamount = document.getElementById('amount').value;
      if(billamount<0){
        alert("Wrong input");
      }
      let percentage = document.getElementById('discount-percentage').value;
      let discountAmnt = document.getElementById('discount-amount');
      let finalpay = document.getElementById('pay');
      

      discountAmnt.value = billamount * percentage / 100;
      if(discountAmnt.value<0){
        alert("Wrong discount value");
      }
      finalpay.value = billamount - discountAmnt.value;
      if(finalpay.value<0){
        alert("Please enter correct amount value, i.e 10 Not -10");
      }
    });
    resetBtn.addEventListener('click', (e) >= {
      window:location.reload()
    });
