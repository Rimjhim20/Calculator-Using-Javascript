//Write your code here
const add=document.getElementById("add");
const sub=document.getElementById("sub");
const mul=document.getElementById("mul");
const div=document.getElementById("div");
const anwser=document.getElementById("answer");
add.addEventListener('click',function (){
const num1=parseFloat(document.getElementById("num1").value);
const num2=parseFloat(document.getElementById("num2").value);
anwser.innerText=num1+num2;
})
sub.addEventListener('click',function (){
    const num1=parseFloat(document.getElementById("num1").value);
    const num2=parseFloat(document.getElementById("num2").value);
    anwser.innerText=num1-num2;
    })
    mul.addEventListener('click',function (){
        const num1=parseFloat(document.getElementById("num1").value);
        const num2=parseFloat(document.getElementById("num2").value);
        anwser.innerText=num1*num2;
        })
        div.addEventListener('click',function (){
            const num1=parseFloat(document.getElementById("num1").value);
            const num2=parseFloat(document.getElementById("num2").value);
            anwser.innerText=num1/num2;
            })