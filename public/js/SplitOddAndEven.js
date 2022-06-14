// Components
const split = document.getElementById('Split');
const displayOdd = document.getElementById('DisplayOdd');
const displayEven = document.getElementById('DisplayEven');
const displayNumbers = document.getElementById('DisplayNumbers');
const buttonAddNumbers = document.getElementById('AddNumbers');
const input = document.getElementById('inputNumbers');
// variables
let Numbers=[];
let OddNumbers=[];
let EvenNumbers=[];
//Regex to check if the input is a number witout a dot
let regex = /^[0-9]+$/;
// functions
function SplitOddAndEven(Numbers) {
    for (let i = 0; i < Numbers.length; i++) {
        if (Numbers[i] % 2 == 0) {
            EvenNumbers.push(Numbers[i]);
        } else {
            OddNumbers.push(Numbers[i]);
        }
    }
    return [OddNumbers, EvenNumbers];
}
console.log(SplitOddAndEven(Numbers));

split.addEventListener('click',event => {
    
   SplitOddAndEven(Numbers)
   displayOdd.innerText = OddNumbers;
   displayEven.innerText = EvenNumbers;
   displayNumbers.innerText = Numbers;
});
document.querySelector('#AddNumbers').onclick = (event) => {
    if(input.value < 0){
        alert('Sie müssen eine positive Zahl eingeben');
        return 'Sie müssen eine positive Zahl eingeben';
    }
    if(regex.test(input.value)){
        Numbers.push(input.value);
        displayNumbers.innerText = Numbers;
        input.value = '';
    }
    else{
        alert('Sie dürfen nur Zahlen ohne Kommas eingeben');
        return 'Sie dürfen nur Zahlen ohne Kommas eingeben';
    }
};

