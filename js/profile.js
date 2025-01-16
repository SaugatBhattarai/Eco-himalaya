// document.addEventListener('DOMContentLoaded', function() {
//     displayProfile();
// });

// function displayProfile() {
//     const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

//     if (loggedInUser) {
//         // Fetch user data from local storage
//         const userData = JSON.parse(localStorage.getItem('user'));

//         if (userData) {
//             document.getElementById('username').textContent = userData.username;
//             document.getElementById('email').textContent = userData.email;
//             document.getElementById('phoneNumber').textContent = userData.phoneNumber;
//             document.getElementById('dob').textContent = userData.dob;
//         }
//         document.getElementById('signupLink').style.display = 'none'; // Hide sign-up link if logged in
//     } else {
//         document.getElementById('profile-info').style.display = 'none'; // Hide profile info if not logged in
//         document.getElementById('signoutBtn').style.display = 'none'; // Hide sign-out button if not logged in
//         document.getElementById('signupLink').style.display = 'block'; // Show sign-up link
//     }
// }

// document.getElementById('signoutBtn').addEventListener('click', function() {
//     localStorage.removeItem('loggedInUser'); // Clear logged in user data
//     window.location.href = 'index.html'; // Redirect to home page
// });
document.addEventListener('DOMContentLoaded', () => {
    const profileInfo = document.getElementById('profile-info');
    const editProfileSection = document.getElementById('editProfileSection');
    const editProfileForm = document.getElementById('editProfileForm');
    const editProfileBtn = document.getElementById('editProfileBtn');
    const signoutBtn = document.getElementById('signoutBtn');
    const signupLink = document.getElementById('signupLink');
    
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            document.getElementById('username').textContent = userData.username;
            document.getElementById('email').textContent = userData.email;
            document.getElementById('phoneNumber').textContent = userData.phoneNumber;
            document.getElementById('dob').textContent = userData.dob;
        }
        
        signupLink.style.display = 'none';
        editProfileSection.style.display = 'none';  // Hide edit section by default

        editProfileBtn.addEventListener('click', () => {
            editProfileSection.style.display = 'block';
        });

        editProfileForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const newUsername = document.getElementById('editUsername').value;
            const newEmail = document.getElementById('editEmail').value;
            const newPhoneNumber = document.getElementById('editPhoneNumber').value;
            const newDob = document.getElementById('editDob').value;
            const newPassword = document.getElementById('editPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (newPassword !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            const updatedUserData = {
                username: newUsername,
                email: newEmail,
                phoneNumber: newPhoneNumber,
                dob: newDob,
                password: newPassword || JSON.parse(localStorage.getItem('user')).password  // Keep old password if new one is not provided
            };

            localStorage.setItem('user', JSON.stringify(updatedUserData));
            document.getElementById('username').textContent = updatedUserData.username;
            document.getElementById('email').textContent = updatedUserData.email;
            document.getElementById('phoneNumber').textContent = updatedUserData.phoneNumber;
            document.getElementById('dob').textContent = updatedUserData.dob;

            editProfileSection.style.display = 'none';
        });

        signoutBtn.addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
            window.location.href = 'index.html';
        });
    } else {
        profileInfo.style.display = 'none';
        editProfileSection.style.display = 'none';
        signupLink.style.display = 'block';
        
        // Redirect to signup page if "Sign Up" link is clicked
        document.querySelector('#signupLink a').addEventListener('click', () => {
            window.location.href = 'signup.html';
        });
    }
});
