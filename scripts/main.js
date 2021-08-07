const hatButton = document.querySelector('#hat-button');
const hatImage = document.querySelector('#hat-image');
const pendingProject = document.querySelector('#project-pending');
const footerText = document.querySelector('#footer-text');

hatImage.style.animationPlayState = 'paused';
pendingProject.style.animationPlayState = 'paused';
hatButton.style.animationPlayState = 'paused';

hatButton.onclick = function() {
    hatImage.style.animationPlayState = 'running';
    pendingProject.style.animationPlayState = 'running';
    hatButton.style.animationPlayState = 'running';
}

window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footerText.style.opacity = '1';
    }
}