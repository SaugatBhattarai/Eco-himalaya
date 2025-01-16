document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateSignupForm();
});

function validateSignupForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const dob = document.getElementById('dob').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;

    let isValid = true;

    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters';
        isValid = false;
    } else {
        document.getElementById('usernameError').textContent = '';
    }

    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (!validatePhoneNumber(phoneNumber)) {
        document.getElementById('phoneNumberError').textContent = 'Invalid phone number format';
        isValid = false;
    } else {
        document.getElementById('phoneNumberError').textContent = '';
    }

    if (!dob) {
        document.getElementById('dobError').textContent = 'Date of birth is required';
        isValid = false;
    } else if (!validateDOB(dob)) {
        document.getElementById('dobError').textContent = 'You must be at least 13 years old to sign up';
        isValid = false;
    } else {
        document.getElementById('dobError').textContent = '';
    }

    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    if (password !== repeatPassword) {
        document.getElementById('repeatPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    } else {
        document.getElementById('repeatPasswordError').textContent = '';
    }

    if (isValid) {
        // Store data in local storage
        const userData = {
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            dob: dob,
            password: password
        };

        localStorage.setItem('user', JSON.stringify(userData));
        // alert('Signup successful! Data saved in local storage.');

        window.location.href = '../html/login.html';
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
}

function validateDOB(dob) {
    const dobDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    return age >= 13;
}
