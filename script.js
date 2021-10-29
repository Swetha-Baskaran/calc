var i1 = document.getElementById("input");
var i2 = document.getElementById("history");

let insertnum = (x) => {
     i1.value += x;
    }

let evaal = () => {
    i1.value = eval(i2.innerHTML + i1.value);
    i2.innerHTML = " ";
}

let cls = () => {
    i1.value = " ";
    i2.innerHTML = " ";
    }

let clear1 = () => {
    i1.value = " ";
    }
        
let insertsym = (x) => {
    var temp;
    temp = i1.value + x; //important
    console.log(temp);
    i1.value = " ";
    i2.innerHTML = temp;
    }
        
let square = () => {
    i1.value *= i1.value;
    }
        
let oneBy = () => {
    i1.value = 1 / i1.value;
    }
        
let sqrt = () => {
    i1.value = (Math.sqrt(i1.value)).toFixed(5);
    }
    
let del = () => {
    i1.value = i1.value.toString().substring(0, i1.value.length - 1);
    }
        
let random = ()=>{
    i1.value = Math.floor(Math.random()*100000);
    }
