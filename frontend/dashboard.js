const currentUser = JSON.parse(localStorage.getItem('currentUser'));

document.getElementById('welcomeText').innerText = `Welcome, ${currentUser.role}!`;

if (currentUser.role === 'provider') {
  document.getElementById('providerSection').style.display = 'block';
}

if (currentUser.role === 'rider') {
  document.getElementById('riderSection').style.display = 'block';
  showAvailableRides();
}

async function addRide(event) {
  event.preventDefault();

  const ride = {
    provider: currentUser.email,
    pickup: document.getElementById('pickup').value,
    dropoff: document.getElementById('dropoff').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    seats: parseInt(document.getElementById('seats').value)
  };

  const response = await fetch('http://localhost:5000/rides', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ride)
  });

  const data = await response.json();
  alert(data.message);
}

async function showAvailableRides() {
  const response = await fetch('http://localhost:5000/rides');
  const rides = await response.json();
  const availableRidesDiv = document.getElementById('availableRides');
  availableRidesDiv.innerHTML = '';

  rides.forEach(ride => {
    availableRidesDiv.innerHTML += `
      <div style="background:#fff;color:#000;padding:10px;margin:10px 0;border-radius:5px;">
        <p><strong>Provider:</strong> ${ride.provider}</p>
        <p><strong>From:</strong> ${ride.pickup}</p>
        <p><strong>To:</strong> ${ride.dropoff}</p>
        <p><strong>Date:</strong> ${ride.date}</p>
        <p><strong>Time:</strong> ${ride.time}</p>
        <p><strong>Seats:</strong> ${ride.seats}</p>
      </div>
    `;
  });
}

async function showAnalysis() {
  const response = await fetch('http://localhost:5000/rides');
  const rides = await response.json();

  const analysisDiv = document.getElementById('analysisResult');
  analysisDiv.innerHTML = `
    <p>Total Rides: ${rides.length}</p>
    <p>Total Available Seats: ${rides.reduce((sum, ride) => sum + ride.seats, 0)}</p>
  `;
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}
