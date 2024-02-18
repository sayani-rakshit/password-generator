var password_input=document.getElementById('password-input');
var length_input=document.getElementById('length-input');
var uppercase_input=document.getElementById('uppercase-input');
var lowercase_input=document.getElementById('lowercase-input');
var symbol_input=document.getElementById('symbols-input');
var number_input=document.getElementById('numbers-input');
var generate_password=document.getElementById('generatebtn');

var uppervalue = ()=>{
    var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   return  uppercase[Math.floor(Math.random()*uppercase.length)];
    
};
var lowervalue =()=>{
    var lowercase="abcdefghijklmnopqrstuvwxyz";
    return lowercase[Math.floor(Math.random()*lowercase.length)];
};
var numbervalue=()=>{
    var number="0123456789";
    return number[Math.floor(Math.random()*number.length)];
};
var symbolvalue=()=>{
    var symbol="~!@#$%^&*()_+|}{<>*./";
    return symbol[Math.floor(Math.random()*symbol.length)];
};
function generatepassword(){
    if (isNaN(length_input.value) || length_input.value <4  || length_input.value > 12) {
      alert('Please enter a valid password length between 4 and 12');
      return;

};
 let  password='';
const character=[];
if(uppercase_input.checked){
    character.push(uppervalue);
}

if(lowercase_input.checked){
    character.push(lowervalue);
}
if(number_input.checked){
    character.push(numbervalue);
}
if(symbol_input.checked){
    character.push(symbolvalue);
}
for(let i=0;i<length_input.value;i++){
    var random=character[Math.floor(Math.random()*character.length)];

    password+=random();
}

password_input.innerText=password;
};

generate_password.addEventListener('click',generatepassword);

