let storedCredentials = {};

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const email = document.getElementById('signup-email').value;
    const fullname = document.getElementById('signup-fullname').value;
    const phone = document.getElementById('signup-phone').value;

    if (!validateFullName(fullname)) {
        alert('Full Name must not contain numbers.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Invalid email format.');
        return;
    }

    if (!validatePhoneNumber(phone)) {
        alert('Invalid phone number format.');
        return;
    }

    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters long and include at least one number, one symbol, one uppercase letter, and one lowercase letter.');
        return;
    }

    storedCredentials = {
        username: username,
        password: password,
        email: email,
        fullname: fullname,
        phone: phone
    };

    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('signin-section').style.display = 'block';
});

document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;

    if (username === storedCredentials.username && password === storedCredentials.password) {
        window.location.href = '../html/index.html'; // Replace with your actual success page URL
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

function validateFullName(fullname) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(fullname);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.toggle-icon');
    
    if (answer.style.display === "none" || !answer.style.display) {
        answer.style.display = "block";
        icon.textContent = "-";
    } else {
        answer.style.display = "none";
        icon.textContent = "+";
    }
}
