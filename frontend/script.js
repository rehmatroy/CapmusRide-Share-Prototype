function showLogin() {
  document.getElementById('formSection').innerHTML = `
    <h2>Login</h2>
    <form onsubmit="login(event)">
      <select id="loginRole" required>
        <option value="">Select Role</option>
        <option value="rider">Rider</option>
        <option value="provider">Ride Provider</option>
      </select>
      <input type="email" id="loginEmail" placeholder="Email" required>
      <input type="password" id="loginPassword" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  `;
}

function showSignup() {
  document.getElementById('formSection').innerHTML = `
    <h2>Signup</h2>
    <form onsubmit="signup(event)">
      <select id="signupRole" required>
        <option value="">Select Role</option>
        <option value="rider">Rider</option>
        <option value="provider">Ride Provider</option>
      </select>
      <input type="email" id="signupEmail" placeholder="Email" required>
      <input type="password" id="signupPassword" placeholder="Password" required>
      <button type="submit">Signup</button>
    </form>
  `;
}

async function signup(event) {
  event.preventDefault();

  const role = document.getElementById('signupRole').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  const response = await fetch('http://localhost:5000/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ role, email, password })
  });

  const data = await response.json();
  alert(data.message);
  if (response.ok) showLogin();
}

async function login(event) {
  event.preventDefault();

  const role = document.getElementById('loginRole').value;
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const response = await fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ role, email, password })
  });

  const data = await response.json();
  alert(data.message);

  if (response.ok) {
    localStorage.setItem('currentUser', JSON.stringify(data.user));
    window.location.href = 'dashboard.html';
  }
}
