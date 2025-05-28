const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  console.log('Username:', username);
  console.log('Password:', password);

  if (username === 'user' && password === 'pass') {
    alert('Welcome back!');
  } else {
    alert('Wrong username or password.');
  }
});
