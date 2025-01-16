// window.addEventListener('DOMContentLoaded', (event) => {
//     displayLoggedInUser();
// });

// function displayLoggedInUser() {
//     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

//     if (loggedInUser) {
//         document.getElementById('name-user').innerHTML=loggedInUser;
//     } else {
//         document.getElementById('name-user').innerHTML = 'Eco-Himalaya';
//     }
// }

// // *****JS for animation in hero section*****

// document.addEventListener('DOMContentLoaded', function() {
//     const heroSubtitles = document.querySelectorAll('.mm-homepage-hero-subtitle');
//     heroSubtitles.forEach(subtitle => {
//       subtitle.style.opacity = 1;  // Ensure the element is visible
//       subtitle.classList.add('animate-slideDown');
//     });
//   });

window.addEventListener('DOMContentLoaded', (event) => {
    displayLoggedInUser();
    setupHelloNameRedirect();
});

function displayLoggedInUser() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        document.getElementById('name-user').textContent = loggedInUser;
    } else {
        document.getElementById('name-user').textContent = 'Eco-Himalaya';
    }
}

function setupHelloNameRedirect() {
    const helloNameElement = document.querySelector('.hello-name');

    helloNameElement.addEventListener('click', function() {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

        if (loggedInUser) {
            window.location.href = 'profile.html'; // Redirect to profile page if logged in
        } else {
            window.location.href = 'signup.html'; // Redirect to sign-up page if not logged in
        }
    });
}

// *****JS for animation in hero section*****
document.addEventListener('DOMContentLoaded', function() {
    const heroSubtitles = document.querySelectorAll('.mm-homepage-hero-subtitle');
    heroSubtitles.forEach(subtitle => {
        subtitle.style.opacity = 1;  // Ensure the element is visible
        subtitle.classList.add('animate-slideDown');
    });
});
