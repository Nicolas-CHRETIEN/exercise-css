
// Add the elements I'm gonna target in the JS.const shareButton = document.querySelector('.share-link');
const shareMenu = document.querySelector('.window');
const body = document.querySelector('.body');

// This function change the class of an element to change their style.
function share () {
    shareMenu.classList.add('open');
}

// This one withdraw it to come back to the begining.
function closeWindow () {
    shareMenu.classList.remove('open');
}

// Add links to the different websites.
function shareFacebook () {
    window.open ('http://www.facebook.com', 'with = 1000px', 'height = 1000px');
}
function shareInstagram () {
    window.open ('http://www.instagram.com', 'with = 1000px', 'height = 1000px');
}
function shareWhatsap () {
    window.open ('http://www.whatsap.com', 'with = 1000px', 'height = 1000px');
}
function sharePinterest () {
    window.open ('http://www.pinterest.com', 'with = 1000px', 'height = 1000px');
}
function shareYoutube () {
    window.open ('http://www.youtube.com', 'with = 1000px', 'height = 1000px');
}
function shareTwiter () {
    window.open ('http://www.twiter.com', 'with = 1000px', 'height = 1000px');
}
function shareSnapchat () {
    window.open ('http://www.snapchat.com', 'with = 1000px', 'height = 1000px');
}