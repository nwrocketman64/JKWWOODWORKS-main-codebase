/***********************************************
 * ADDIMAGE:
 * The function adds an image input in the add
 * image and edit image form.
 ***********************************************/
const addImage = () => {
    // Get the elements from the page.
    const imageCountInput = document.getElementById('imageCount');
    const imageSection = document.getElementById('imageCollection');

    // Get number of images needed to be added.
    let imageCount = parseInt(imageCountInput.value);

    // Create new elements to be added to image section.
    let imageLabel = document.createElement('label');
    imageLabel.setAttribute('for', 'image' + (imageCount + 1));
    imageLabel.textContent = 'Image ' + (imageCount + 1) + ': ';

    let imageInput = document.createElement('input');
    imageInput.setAttribute('type', 'file');
    imageInput.setAttribute('name', 'image' + (imageCount + 1));
    imageInput.setAttribute('id', 'image' + (imageCount + 1));

    // Append the elements to image section.
    imageSection.appendChild(imageLabel);
    imageSection.appendChild(imageInput);

    // Update the image count.
    imageCountInput.value = imageCount + 1;
};

/***********************************************
 * REMOVEIMAGE:
 * The function removes an image input in the
 * add image and edit image form.
 ***********************************************/
const removeImage = () => {
    // Get the elements from the page.
    const imageCountInput = document.getElementById('imageCount');
    const imageSection = document.getElementById('imageCollection');

    // Get number of images needed to be added.
    let imageCount = parseInt(imageCountInput.value);

    // Check to make sure there are more than one image input.
    if (imageCount > 1) {
        // Remove the last two element in the image section.
        imageSection.removeChild(imageSection.lastElementChild);
        imageSection.removeChild(imageSection.lastElementChild);

        // Update the image count.
        imageCountInput.value = imageCount - 1;
    }
};