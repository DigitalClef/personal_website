const hatButton = document.querySelector('#hat-button');
const hatImage = document.querySelector('#hat-image');
const pendingProject = document.querySelector('#project-pending');

hatImage.style.animationPlayState = 'paused';
pendingProject.style.animationPlayState = 'paused';
hatButton.style.animationPlayState = 'paused';

hatButton.onclick = function() {
    hatImage.style.animationPlayState = 'running';
    pendingProject.style.animationPlayState = 'running';
    hatButton.style.animationPlayState = 'running';
}