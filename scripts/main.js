const hatButton = document.querySelector('#hat-button');
const hatImage = document.querySelector('#hat-image');
hatImage.style.display = 'none';

hatButton.onclick = function() {
    if (hatImage.style.display === 'none') {
        hatImage.style.display = 'block';
        hatButton.innerText = 'Return Hat';
    }
    else {
        hatImage.style.display = 'none';
        hatButton.innerText = 'Generate Hat';
    }
}