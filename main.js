const form = document.querySelector('#rating-form');
const radioButtons = document.querySelectorAll('input[name="rating"]');
const rating = document.querySelector('span');

const mainContainer = document.querySelector('.main-container');
const innerContainer = document.querySelector('.inner-container');
const innerContainer2 = document.querySelector('.inner-container2');


form.addEventListener('submit', function (event) {
    event.preventDefault();
    for (button of radioButtons) {
        if (button.checked) {
            console.log(button.value);
            rating.append(button.value);
            mainContainer.classList.add('fade-in');
            innerContainer.classList.add('hide');
            innerContainer2.classList.remove('hide');
        }
    }
})