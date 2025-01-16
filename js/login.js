document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateLoginForm();
});

function validateLoginForm() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    let isValid = true;

    if (!validateEmail(email)) {
        document.getElementById('loginEmailError').textContent = 'Invalid email format';
        isValid = false;
    } else {
        document.getElementById('loginEmailError').textContent = '';
    }

    if (password.length < 6) {
        document.getElementById('loginPasswordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        document.getElementById('loginPasswordError').textContent = '';
    }

    if (isValid) {
        // Fetch data from local storage
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            localStorage.setItem('loggedInUser', JSON.stringify(storedUser.username));
            // alert('Login successful!'); 
            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password.');
        }
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
