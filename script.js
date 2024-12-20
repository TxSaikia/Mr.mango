// Example: Click event for an image
document.querySelectorAll('.photo img').forEach((img) => {
    img.addEventListener('click', () => {
        alert('You clicked on: ' + img.alt);
    });
});
