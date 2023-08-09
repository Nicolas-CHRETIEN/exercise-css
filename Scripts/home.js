    
// Create the event to select the picture and change the product informations.
// Replace the selected image with the new one.
// Replace the old datas in the menu with the selected image's datas.
function change2 () {

        
    // event.target is the element clicked.
    const image = event.target;

    // Create an object with the datas I want to recuperate in the product page.
    const storedDatas = {
        targetIndex: Number(image.dataset.index),
        targetSrc: image.src
    }

    // Store the object in the way to recuperate the data in the product page.
    localStorage.setItem('storedDatas', JSON.stringify(storedDatas));

    // Load the product page.
    window.location = 'product.html';
}