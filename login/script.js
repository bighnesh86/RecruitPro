// Login form
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if user exists in localStorage
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData && userData.username === username && userData.password === password) {
    // Successful login
    alert('Login successful');
    // Redirect to the dashboard or desired page
    window.location.href = 'candidate-search.html';
  } else {
    // Invalid credentials
    alert('Invalid username or password');
  }

  // Clear form fields
  loginForm.reset();
});

// Sign up form
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get input values
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Create user object
  const userData = {
    fullName,
    email,
    username,
    password
  };

  // Store user data in localStorage
  localStorage.setItem('userData', JSON.stringify(userData));

  // Successful sign-up
  alert('Sign up successful');
  
  // Redirect to the login page
  window.location.href = 'login.html';

  // Clear form fields
  signupForm.reset();
});
