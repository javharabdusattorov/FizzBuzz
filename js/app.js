let elForm = document.querySelector('.form  ');
let elInput = document.querySelector('.form__input');
let elResult = document.querySelector('.result');
let elHeading = document.querySelector('.heading');
let elResult_box = document.querySelector('.result__box');

const checkValue = function(num) {
    
    if (num % 3 === 0 && num % 5 === 0) {
        // Style
        elResult_box.style.backgroundColor = 'dodgerblue';
        elResult.style.color = 'cyan';
        elResult_box.style.width = '100%';
        elResult_box.style.paddingTop = '0';
        elResult_box.style.paddingBottom = '0';
        elResult_box.style.borderRadius = '0';
        return 'Yay! FizzBuzz';
    }

     else if (num % 3 === 0) {
         // Style
         elResult.style.backgroundColor = 'none';
        elResult_box.style.backgroundColor = 'rgba(255, 98, 41, 0.842)';
        elResult.style.color = 'limegreen';
        elResult_box.style.borderRadius = '10px';
        elResult_box.style.paddingTop = '30px';
        elResult_box.style.paddingBottom = '30px';
        elResult_box.style.width = '35%';
        return 'Fizz';
    }

     else if (num % 5 === 0) {
         // Style
         elResult.style.backgroundColor = 'none';
        elResult_box.style.backgroundColor = 'rgba(223, 5, 223, 0.856)';
        elResult.style.color = 'gold';
        elResult_box.style.borderRadius = '10px';
        elResult_box.style.paddingTop = '30px';
        elResult_box.style.paddingBottom = '30px';
        elResult_box.style.width = '35%';
        return 'Buzz';
    } else {
        return num - 0;
    }
}

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    elHeading.textContent = 'Getluck!'

    let inputValue = elInput.value;

    if (inputValue <= 0 || isNaN(inputValue)) {
        elResult.textContent = "Please, enter a number and make it greater than 0!";
        // Style
        elResult_box.style.width = '100%';
        elResult.style.color = 'white';
        elResult_box.style.backgroundColor = 'red';
        elResult_box.style.borderRadius = '0';
        elResult_box.style.paddingTop = '0';
        elResult_box.style.paddingBottom = '0';
        return;
    } 

    let result = checkValue(inputValue);

    elResult.textContent = result;
} )