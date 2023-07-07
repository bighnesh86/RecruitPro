// Login form submit event
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Perform login logic here
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Example login validation
    if (username === 'admin' && password === 'admin123') {
      alert('Login successful');
      // Redirect to the homepage or desired page
      window.location.href = 'candidate-search.html';
    } else {
      alert('Invalid username or password');
    }
  });
  
  // Register form submit event
  document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Perform registration logic here
    var companyName = document.getElementById('companyName').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Example registration logic
    alert('Registration successful');
    // Redirect to the login page or desired page
    window.location.href = 'login.html';
  });
  