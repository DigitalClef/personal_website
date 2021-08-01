const hatButton = document.querySelector('#hat-button');
const hatImage = document.querySelector('#hat-image');
const pendingProject = document.querySelector('#project-pending');
hatImage.style.display = 'none';

hatButton.onclick = function() {
    if (hatImage.style.display === 'none') {
        hatImage.style.display = 'block';
        hatButton.innerText = 'Return Hat';
        pendingProject.style.backgroundImage = 'linear-gradient(145deg, rgb(198, 238, 198), lightgreen, rgb(198, 238, 198))';
    }
    else {
        hatImage.style.display = 'none';
        hatButton.innerText = 'Generate Hat';
        pendingProject.style.backgroundImage = 'linear-gradient(145deg, orange, rgb(255, 255, 104), orange)';
    }
}