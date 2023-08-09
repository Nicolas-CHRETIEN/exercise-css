
// Add the elements I'm gonna target in the JS.
const burger = document.querySelector('.burger');
const exit = document.querySelector('.burger-part');
const burgerDiv = document.querySelector('.burger-list-div');
const exit2 = document.querySelector('.close-burger');

// I need to add the event with JS because I did not find how to remove it if I write it directly in the html.
burger.addEventListener('click', openBurger, false);

// This function change the class of two elements to change their style. It also change the burger menu's event to be able to close the menu.
function openBurger () {
    console.log('openBurger executed');
    burgerDiv.classList.replace('burger-closed', 'burger-opened');
    burger.classList.add('burger-opened');
    burger.removeEventListener('click', openBurger, false);
    exit.addEventListener('click', close, false);
}

// This one do the exact contrary to come back to the begining.
function close (e) {
    
    console.log('close executed');
    burgerDiv.classList.replace('burger-opened', 'burger-closed');
    burger.classList.remove('burger-opened');
    burger.addEventListener('click', openBurger);
    exit.removeEventListener('click', close, false);
    e.stopImmediatePropagation();
}