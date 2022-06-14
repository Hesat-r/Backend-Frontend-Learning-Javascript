// buttons
const split = document.getElementById('Split');
const displayOdd = document.getElementById('DisplayOdd');
const displayEven = document.getElementById('DisplayEven');

// variables
let Numbers=[1,2,3,4,5,6,7,8,9,10];
let OddNumbers=[];
let EvenNumbers=[];

// functions
function SplitOddAndEven(Numbers) {
    for (let i = 0; i < Numbers.length; i++) {
        if (Numbers[i] % 2 == 0) {
            EvenNumbers.push(Numbers[i]);
            console.log('Gerade Zahlen',EvenNumbers);
        } else {
            OddNumbers.push(Numbers[i]);
            console.log('Ungerade Zahlen', OddNumbers);
        }
    }
}

document.querySelector('#Split').onclick = (event) => {
   SplitOddAndEven(Numbers)
   displayOdd.innerText = OddNumbers;
   displayEven.innerText = EvenNumbers;
   
};


