const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();


  verifyUser(username, password);
});

function verifyUser(username, password) {
  const correctUsername = 'Bond';
  const correctPassword = '007';

  const messageBox = document.getElementById('message');

  if (username === correctUsername && password === correctPassword) {
    messageBox.textContent = 'Correct. Logging you in...';
  } else {
    messageBox.textContent = 'Username or password is incorrect.';
  }
}

