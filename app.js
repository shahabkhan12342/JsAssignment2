
//----------------------CHAPTER 21-25-------------



//q1

// FirstName=prompt('Enter First Name');
// LastName=prompt('Enter First Name');
// var fullName=FirstName+" "+LastName;
// alert('Hello'+fullName);


//q2
// var model=prompt("Enter favt mobile:");
// var leng=model.length;
// alert(leng);

//q3
// var  word='Pakistani';
// document.write('String is :'+word);

// var ind=0;
// for(var i=0;i<word.length;i++)
// {
//     if (word[i]=='n')
//     {
//         ind=i;
//     }
// }
// document.write("<br>"+"Index is :"+ind);

// //q4
// var  word='Hello World';
// document.write('String is :'+word);

// var ind=0;
// for(var i=0;i<word.length;i++)
// {
//     if (word[i]=='l')
//     {
//         ind=i;
//     }
// }
// document.write("<br>"+"Index is last word is :"+ind);


//q5
// var  word='Pakistani';
// document.write('String is :'+word);

// document.write("word is :"+word[3]);

// //q6
// FirstName=prompt('Enter First Name');
// LastName=prompt('Enter First Name');
// var fullName=FirstName.concat(LastName);
// alert('Hello'+fullName);


//q7
// var string = 'Hyder abad'; 
  
// // Calling replace() function 
// var newstring = string.replace('Hyder', 'Islam'); 
  
// // Printing replaced string 
// document.write(newstring); 



//q8
// var string = 'Ali and Hamza are good friends'; 
  
// // Calling replace() function 
// var newstring = string.replace('and', '&'); 
  
// // Printing replaced string 
// document.write(newstring); 



//q9
// a='10'
// document.write(typeof(a));
// var a=parseInt(a);
// document.write(typeof(a));


//q10
// var a=prompt('Enter words in lowercase:');
// a.toUpperCase();
// document.write(a);




//q12
// var a=10
// document.write(typeof(a));
// a=toString(a);
// document.write(typeof(a));



//q13
// var username=prompt('Enter username');
// if(username==33 && username==44 && username==46)
// {
//     alert('Error');
// }
// else
// {
//     alert('username saved');
// }


//q14
// A=['cake','applepie','cookie','chips'];
// var aa=prompt('s');
// if(aa in A)
// {
//     console.log('ok ki rep');
// }
// else
// {
//     console.log('lag gye')
// }



//-------------------------Chapter 26-30----------------------------------------

//Task 01

// var number=prompt('Enter Possitive Integer');
// document.write("Number :"+number);
// document.write("Round OFf :"+Math.round(number));
// document.write("Ceil" +Math.ceil(number));
// document.write("Floor :"+Math.floor(number));



//Task 02

// var number=prompt('Enter Negative Integer');
// document.write("Number :"+number);
// document.write("Round OFf :"+Math.round(number));
// document.write("Ceil" +Math.ceil(number));
// document.write("Floor :"+Math.floor(number));



//Task3


// var n=prompt('Enter a number');
// document.write("absolute value :"+Math.abs(n));


//Task 8
// var a=Math.floor(Math.random()*10);
// var n=prompt('Enter Guesss number :');
// if(n==a)
// {
//     document.write("Correct Guess");
// }
// else
// {
//     document.write("Wrong One");
// }



//Task 5

// var coin=Math.floor(Math.random()*2)+1;
// document.write(coin);

// if(coin==1)
// {
//     document.write(coin);
//     document.write("<br>"+"HEads");
// }
// else
// {
//     document.write(coin);
//     document.write("<br>"+"tails");
// }





//-----------------------chap 31-35----------------



//task1

// var a=Date();
// document.write(a);


//task2
// var d=new Date();
// var n=d.getMonth();
// if(n==1)
// {
//     alert('Jan');
// }
// else if(n==2)
// {
//     alert('Feb');
// }
// else if(n==3)
// {
//     alert('March');
// }
// else if(n==4)
// {
//     alert('APRIL')
// }
// else if(n==5)
// {
//     alert('may')
// }
// else if(n==6)
// {
//     alert('June')
// }
// else if(n==7)
// {
//     alert('July')
// }
// else if(n==8)
// {
//     alert('August')
// }



//Task 3
// var d=new Date();
// var n=d.getDay();
// if(n==1)
// {
//     alert('Mon');
// }
// else if(n==2)
// {
//     alert('Tues');
// }
// else if(n==3)
// {
//     alert('Wed');
// }
// else if(n==4)
// {
//     alert('Thurs')
// }
// else if(n==5)
// {
//     alert('Fri')
// }
// else if(n==6)
// {
//     alert('Sat')
// }
// else if(n==7)
// {
//     alert('Sun')
// }



//Task 13
// age=prompt('Enter Age');
// var d=new Date();
// var n=d.getFullYear()-age;
// var
// document.write("born year is :"+n);



// //Task 14
// var a="Shahab Khan";
// var d=new Date();
// var b=d.getMonth();
// var nUnits=410;
// var cUnits=16;
// a_payable = nUnits *cUnits;
// g_payable=a_payable+10;


// document.write("Customer Name :"+a);
// document.write("<br>Current Month :"+b);
// document.write("<br>Total no of uits"+nUnits);
// document.write("<br>Charge per uit"+cUnits);
// document.write('<br>Net Amount payable(within Due date):'+a_payable);

// document.write('<br>Net Amount payable(After Due date):'+g_payable);



//--------------CHAPTER NO 36-------40-----------------------------------------

//Task3

// var add=function()
// {
//     var n=prompt("Enter first no :");
//     var n3=prompt('Enter second no :');

//     var result=n+n3;
// }
// document.write(add());



//Task 7

// var printno=function()
// {
//     var s=prompt('Enterb starting no');
//     var e=prompt('Enter End no');

//     for(var i=s;i<=e;i++)
//     {
//         document.write(i+"<br>")
//     }
// }
// printno();



//task 10


// function check_Palindrome(str_entry){
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
    
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
    
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
    
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
    
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
    
//         for (var x = 0; x < ccount; x++) {
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome('madam');
//     check_Palindrome('nurses run');
//     check_Palindrome('fox');


// //Task 11

// function factorial(x) 
// { 

//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// document.write(factorial(5));