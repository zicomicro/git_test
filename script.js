

let myKey = document.querySelector('#loc-key');
let myItem = document.querySelector('#loc-value');

const btnAdd = document.querySelector('.btn-add');
const btnDisplay = document.querySelector('.btn-display');
const btnDelete = document.querySelector('.btn-delete');
const btnClear = document.querySelector('.btn-clear');

const display = document.querySelector('.display');


function myDisplay(){
    display.textContent ="";
    if(localStorage.length ===0 )
        display.textContent = "localStorage is empty";

    for (let i =0; i<localStorage.length; i++){

        let key = localStorage.key(i);

        const myDiv = document.createElement('div');
        myDiv.textContent = ` key = [ ${key} ] , value = [ ${localStorage.getItem(key)} ]`;
        display.appendChild(myDiv);
    }
}


function myDelete(key){
    //remove Item by key
    myKey.value="";
    myItem.value="";
    if(localStorage.length !== 0){
        localStorage.removeItem(key);
    display.textContent = "Delete Successfully ";
    }else{
        myDisplay();
    }
    
}

function clearAll(){
    localStorage.clear();
    display.textContent = "Clear Successfully ";
}



btnAdd.addEventListener('click',() =>{
   localStorage.setItem(myKey.value , myItem.value);
   myKey.value ="";
   myItem.value="";
   myDisplay();
});

btnDisplay.addEventListener('click' , myDisplay);

btnClear.addEventListener('click' , clearAll);

btnDelete.addEventListener('click' , () =>{
    if(!myKey.value)
        return display.textContent = "Please Enter Key";

    myDelete(myKey.value);
  
});

