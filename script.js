// Add functionality to switch between pages
document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.querySelector('.home-page');
    const aboutMePage = document.querySelector('.about-me');
    const toAboutMeButton = document.getElementById('to-about-me');

    toAboutMeButton.addEventListener('click', () => {
        homePage.classList.add('hidden');
        aboutMePage.classList.remove('hidden');
    });
});
